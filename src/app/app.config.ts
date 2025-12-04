import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserTranslateLoader } from './browser-translate-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: TranslateLoader,
          useClass: BrowserTranslateLoader
        }
      })
    )
  ]
};
