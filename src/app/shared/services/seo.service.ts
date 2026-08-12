import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SeoData {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

interface ActiveKeys {
  title: string;
  description?: string;
  options?: Omit<SeoData, 'title' | 'description'>;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private router = inject(Router);
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  private readonly siteName = 'Villa Los Reyes';
  private readonly titleSuffix = 'Villa Los Reyes · Viñales, Cuba';
  private readonly titleMaxLength = 70;
  private readonly descriptionMaxLength = 160;

  private activeKeys: ActiveKeys | null = null;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.syncUrlTags());

    this.translate.onLangChange.subscribe(() => {
      if (this.activeKeys) {
        this.applyKeys();
      }
    });
  }

  set(data: SeoData): void {
    this.activeKeys = null;
    this.renderTags(data);
  }

  setFromKeys(titleKey: string, descriptionKey?: string, options: Omit<SeoData, 'title' | 'description'> = {}): void {
    this.activeKeys = { title: titleKey, description: descriptionKey, options };
    this.applyKeys();
  }

  private applyKeys(): void {
    const { title, description, options } = this.activeKeys!;
    const keys = description ? [title, description] : [title];

    this.translate.get(keys).subscribe((result) => {
      const [titleValue, descriptionValue] = Array.isArray(result) ? result : [result];
      this.renderTags({
        title: titleValue,
        description: descriptionValue,
        image: options?.image,
        type: options?.type,
        url: options?.url,
      });
    });
  }

  private renderTags(data: SeoData): void {
    const title = this.formatTitle(data.title);
    this.title.setTitle(title);

    if (data.description) {
      this.upsertMeta('name', 'description', this.formatDescription(data.description));
    }

    const type = data.type || 'website';
    const url = this.canonicalUrl(data.url);

    this.upsertMeta('property', 'og:title', title);
    this.upsertMeta('property', 'og:description', this.formatDescription(data.description || ''));
    this.upsertMeta('property', 'og:type', type);
    this.upsertMeta('property', 'og:url', url);
    this.upsertMeta('property', 'og:site_name', this.siteName);

    this.upsertMeta('name', 'twitter:card', 'summary_large_image');
    this.upsertMeta('name', 'twitter:title', title);
    this.upsertMeta('name', 'twitter:description', this.formatDescription(data.description || ''));

    const image = this.absoluteImageUrl(data.image);
    if (image) {
      this.upsertMeta('property', 'og:image', image);
      this.upsertMeta('name', 'twitter:image', image);
    }

    this.upsertCanonical(url);
  }

  private syncUrlTags(): void {
    const url = this.canonicalUrl();
    this.upsertMeta('property', 'og:url', url);
    this.upsertCanonical(url);
  }

  private canonicalUrl(path?: string): string {
    const fromRouter = path ?? this.router.url.split('#')[0].split('?')[0];
    return this.absoluteUrl(fromRouter);
  }

  private absoluteUrl(path: string): string {
    const base = environment.siteUrl.replace(/\/+$/, '');
    if (!path) return `${base}/`;
    if (/^https?:\/\//.test(path)) return path;
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
  }

  private absoluteImageUrl(path?: string): string | undefined {
    if (!path) return undefined;
    if (/^https?:\/\//.test(path)) return path;
    return this.absoluteUrl(path);
  }

  private formatTitle(value: string): string {
    const cleaned = this.collapseWhitespace(value).slice(0, this.titleMaxLength);
    return cleaned ? `${cleaned} · ${this.titleSuffix}` : this.siteName;
  }

  private formatDescription(value: string): string {
    const withoutTags = value.replace(/<[^>]*>/g, ' ');
    return this.collapseWhitespace(withoutTags).slice(0, this.descriptionMaxLength);
  }

  private collapseWhitespace(value: string): string {
    return value.replace(/\s+/g, ' ').trim();
  }

  private upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
    const selector = `meta[${attr}="${key}"]`;
    if (content && this.meta.getTag(selector)) {
      this.meta.updateTag({ [attr]: key, content } as MetaDefinition, selector);
    } else if (content) {
      this.meta.addTag({ [attr]: key, content } as MetaDefinition);
    }
  }

  private upsertCanonical(href: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}