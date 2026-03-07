// src/app/language.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject = new BehaviorSubject<string>('es');
  lang$ = this.langSubject.asObservable();

  setLang(lang: string) {
    this.langSubject.next(lang);
  }

  get currentLang(): string {
    return this.langSubject.getValue();
  }
}
