import { importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// Loader que usa fetch desde assets/i18n/*.json
export class BrowserTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return new Observable(subscriber => {
      fetch(`/assets/i18n/${lang}.json`)
        .then(res => res.json())
        .then(json => subscriber.next(json))
        .catch(() => subscriber.next({}));
    });
  }
}

export const appConfig = {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: { provide: TranslateLoader, useClass: BrowserTranslateLoader }
      })
    )
  ]
};
