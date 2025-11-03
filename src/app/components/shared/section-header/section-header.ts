import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.html',
  styleUrls: ['./section-header.css'],
  imports: [RouterLink, TranslatePipe],
})
export class SectionHeader implements OnInit, OnDestroy {

  header = input.required<{
    title: string;
    description: string;
    link?: { text: string; url: string } | null;
  }>();

  segments: Segment[] = [];
  private langSub?: Subscription;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    // Inicializa al cargar el componente
    this.updateSegments();

    // Suscríbete a cambios de idioma
    this.langSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateSegments();
    });
  }

  ngOnDestroy() {
    if (this.langSub) this.langSub.unsubscribe();
  }

  private updateSegments() {
    this.translate.get(this.header().description).subscribe(translatedText => {
      this.segments = this.parseLinks(translatedText);
    });
  }

  private parseLinks(text: string): Segment[] {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let result: Segment[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push({ text: text.slice(lastIndex, match.index) });
      }
      result.push({ text: match[1], link: match[2] });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      result.push({ text: text.slice(lastIndex) });
    }

    return result;
  }
}

interface Segment {
  text: string;
  link?: string;
}
