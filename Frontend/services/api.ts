import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'; // 👈 ¡Súper importante este import!
import { TranslateService } from '@ngx-translate/core';

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
  // Apunta a tu Laravel local por si lo enciendes
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private translate: TranslateService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Accept-Language': this.translate.currentLang || 'es'
    });
  }

  setLanguage(lang: string) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.baseUrl}/skills`, { headers: this.getHeaders() }).pipe(
      catchError(() => {
        // Si Laravel está APAGADO o estás en Netlify, se cargará esto automáticamente:
        return of([
          { category: 'Frontend', icons: ['fab fa-angular', 'fab fa-js', 'fab fa-css3-alt', 'fab fa-bootstrap'] },
          { category: 'Backend & Tools', icons: ['fab fa-laravel', 'fab fa-php', 'fab fa-git-alt'] }
        ]);
      })
    );
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/experience`, { headers: this.getHeaders() }).pipe(
      catchError(() => {
        return of([
          {
            id: 1,
            position: 'Desarrollador Web',
            company: 'Freelance / Proyectos Propios',
            period: '2023 - Presente',
            description: ['Desarrollo de aplicaciones web SPA con Angular y APIs REST.'],
            technologies: ['Angular', 'TypeScript', 'Laravel']
          }
        ]);
      })
    );
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}/education`, { headers: this.getHeaders() }).pipe(
      catchError(() => {
        return of([
          {
            id: 1,
            title: 'Desarrollo de Aplicaciones Web',
            institution: 'I.E.S. Centro de Estudios',
            period: '2021 - 2023',
            description: 'Especialización en desarrollo Frontend y maquetación de interfaces.',
            degree: 'Técnico Superior'
          }
        ]);
      })
    );
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`, { headers: this.getHeaders() }).pipe(
      catchError(() => {
        // Tu proyecto real de IPR Prevención para cuando Laravel no responda
        return of([
          {
            key: 1,
            link: 'https://github.com/marcosbazan/Portfolio',
            img: 'assets/images/ipr.png',
            techs: ['Angular', 'Bootstrap', 'TypeScript']
          }
        ]);
      })
    );
  }

  getExtras(): Observable<Extra> {
    return this.http.get<Extra>(`${this.baseUrl}/extras`, { headers: this.getHeaders() }).pipe(
      catchError(() => {
        return of({
          INTERESTS: {
            TITLE: 'Intereses',
            TEXT: 'Apasionado por el desarrollo Frontend, la arquitectura limpia de software y el aprendizaje constante de nuevas tecnologías.'
          },
          LANGUAGES: {
            TITLE: 'Idiomas',
            SPANISH: 'Español',
            ENGLISH: 'Inglés',
            LEVEL: { SPANISH: 'Nativo', ENGLISH: 'B2 Intermedio' }
          },
          EVENTS: 'Eventos',
          EVENTS_LIST: ['Participación activa en comunidades de desarrollo y eventos tech.'],
          RECOGNITIONS: {
            TITLE: 'Logros',
            TEXT: 'Diseño, optimización y despliegue automatizado de porfolio web profesional.'
          },
          CERTIFICATES: 'Certificados',
          CERTIFICATES_LIST: ['Curso Completo de Angular Avanzado', 'Maquetación Web Profesional']
        });
      })
    );
  }
}
