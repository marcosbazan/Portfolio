import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class BrowserTranslateLoader implements TranslateLoader {

  getTranslation(lang: string): Observable<any> {
    return new Observable(subscriber => {

      // 🚀 anti-cache (clave para Netlify)
      const url = `/assets/i18n/${lang}.json?v=${Date.now()}`;

      fetch(url, { cache: 'no-store' })
        .then(res => res.json())
        .then(json => {
          subscriber.next(json);
          subscriber.complete();
        })
        .catch(err => {
          console.error('Error cargando traducciones:', err);
          subscriber.next({});
          subscriber.complete();
        });
    });
  }
}
