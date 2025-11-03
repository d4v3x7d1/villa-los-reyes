import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
    routes,
    withInMemoryScrolling({
      scrollPositionRestoration: 'enabled', // vuelve al inicio
      anchorScrolling: 'enabled',           // permite #anclas
      
    })
  ),

    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/data/',
        suffix: '.json'
      }),
      fallbackLang: 'es',
      lang: 'es'
    })
  ]
};

