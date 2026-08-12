import { Component, computed, effect, inject, input, Input } from '@angular/core';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { HeaderData } from '../../../../shared/interfaces/common.interface';
import { PackageItinerary } from '../../components/package-itinerary/package-itinerary';
import { PackageCrossSell } from '../../components/package-cross-sell/package-cross-sell';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../../services/package.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { SeoService } from '../../../../shared/services/seo.service';

@Component({
  selector: 'package-itinerary-page',
  imports: [PageHeader, PackageItinerary, PackageCrossSell],
  templateUrl: './package-itinerary-page.html',
  styleUrl: './package-itinerary-page.css',
})
export class PackageItineraryPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private packageService = inject(PackageService);
  private seo = inject(SeoService);

  constructor() {
    effect(() => {
      const pkg = this.packageData();
      if (pkg) {
        this.seo.set({
          title: pkg.title,
          description: pkg.desc,
          image: pkg.image?.src,
          type: 'product',
        });
      } else {
        this.seo.setFromKeys('HEADER.ITINERARY.TITLE', 'HEADER.ITINERARY.DESCRIPTION');
      }
    });
  }

  slug = input.required<string>();

  // packageData = toSignal(
  //   toObservable(this.slug).pipe(
  //     switchMap((slug) => this.packageService.getPackageBySlug(slug)),
  //     tap((data) => {
  //       if (!data) this.goToParent();
  //     }),
  //     catchError(() => {
  //       this.goToParent();
  //       return of(undefined);
  //     }),
  //   ),
  // );

  packageData = toSignal(
    toObservable(this.slug).pipe(
      tap(s => console.log('1. El slug recibido por el input es:', s)), // LOG 1
      switchMap((slug) => this.packageService.getPackageBySlug(slug)),
      tap((data) => {
        console.log('2. Datos recibidos del servicio:', data); // LOG 2
        if (!data) {
          console.warn('3. No hay datos, redirigiendo...');
          this.goToParent();
        }
      }),
      catchError((err) => {
        console.error('ERROR en el flujo:', err);
        this.goToParent();
        return of(undefined);
      }),
    ),
  );

  header = computed<HeaderData>(() => {
    const pkg = this.packageData();
    return {
      title: 'HEADER.ITINERARY.TITLE',
      description: 'HEADER.ITINERARY.DESCRIPTION',
      img: pkg?.image,
    };
  });

  private goToParent() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
