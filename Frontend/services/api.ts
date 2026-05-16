import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // 👈 Añadido "of" para simular respuestas
import { TranslateService } from '@ngx-translate/core';
import {environment} from '../src/environments/environment.development';

export interface Skill {
  category: string;
  icons: string[];
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  key: number;
  link: string;
  img: string | string[];
  techs: string[];
}

export interface Education {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  degree: string;
}

export interface Extra {
  INTERESTS: {
    TITLE: string;
    TEXT: string;
  };
  LANGUAGES: {
    TITLE: string;
    SPANISH: string;
    ENGLISH: string;
    LEVEL: {
      SPANISH: string;
      ENGLISH: string;
    };
  };
  EVENTS: string;
  EVENTS_LIST: string[];
  RECOGNITIONS: {
    TITLE: string;
    TEXT: string;
  };
  CERTIFICATES: string;
  CERTIFICATES_LIST: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private translate: TranslateService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Accept-Language': this.translate.currentLang || 'es'
    });
  }

  setLanguage(lang: string) {}

  getSkills(): Observable<Skill[]> {
    if (!this.baseUrl) {
      // Datos simulados para Netlify
      return of([
        { category: 'Frontend', icons: ['fab fa-angular', 'fab fa-js', 'fab fa-css3-alt'] },
        { category: 'Backend', icons: ['fab fa-laravel', 'fab fa-php'] }
      ]);
    }
    return this.http.get<Skill[]>(`${this.baseUrl}/skills`, { headers: this.getHeaders() });
  }

  getExperience(): Observable<Experience[]> {
    if (!this.baseUrl) {
      return of([]); // Devuelve array vacío o rellénalo con tus experiencias simuladas si quieres
    }
    return this.http.get<Experience[]>(`${this.baseUrl}/experience`, { headers: this.getHeaders() });
  }

  getEducation(): Observable<Education[]> {
    if (!this.baseUrl) {
      return of([]);
    }
    return this.http.get<Education[]>(`${this.baseUrl}/education`, { headers: this.getHeaders() });
  }

  getProjects(): Observable<Project[]> {
    if (!this.baseUrl) {
      // 👈 ¡Tu nuevo proyecto IPR Prevención para que luzca en Netlify!
      return of([
        {
          key: 1,
          link: 'https://github.com/marcosbazan/Portfolio', // Cambia por el link correcto si quieres
          img: 'assets/images/ipr.png', // Tu imagen guardada en Frontend/src/assets/images/ipr.png
          techs: ['Angular', 'Bootstrap', 'Laravel']
        }
      ]);
    }
    return this.http.get<Project[]>(`${this.baseUrl}/projects`, { headers: this.getHeaders() });
  }

  getExtras(): Observable<Extra> {
    if (!this.baseUrl) {
      // Estructura simulada con los campos requeridos por tu interfaz Extra
      return of({
        INTERESTS: { TITLE: '', TEXT: '' },
        LANGUAGES: { TITLE: '', SPANISH: '', ENGLISH: '', LEVEL: { SPANISH: '', ENGLISH: '' } },
        EVENTS: '',
        EVENTS_LIST: [],
        RECOGNITIONS: { TITLE: '', TEXT: '' },
        CERTIFICATES: '',
        CERTIFICATES_LIST: []
      });
    }
    return this.http.get<Extra>(`${this.baseUrl}/extras`, { headers: this.getHeaders() });
  }
}
