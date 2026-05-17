import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  constructor() {}

  setLanguage(lang: string) {}

  getSkills(): Observable<Skill[]> {
    return of([
      { category: 'Frontend', icons: ['fab fa-angular', 'fab fa-js', 'fab fa-css3-alt', 'fab fa-bootstrap'] },
      { category: 'Backend & Tools', icons: ['fab fa-laravel', 'fab fa-php', 'fab fa-git-alt'] }
    ]);
  }

  getExperience(): Observable<Experience[]> {
    return of([
      {
        id: 1,
        position: 'Desarrollador Web',
        company: 'Freelance / Proyectos Propios',
        period: '2023 - Presente',
        description: ['Desarrollo de aplicaciones web SPA con Angular.'],
        technologies: ['Angular', 'TypeScript', 'Bootstrap']
      }
    ]);
  }

  getEducation(): Observable<Education[]> {
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
  }

  getProjects(): Observable<Project[]> {
    return of([
      {
        key: 1,
        link: 'https://github.com/marcosbazan/Portfolio',
        img: 'assets/images/ipr.png', // Tu imagen guardada en assets
        techs: ['Angular', 'Bootstrap', 'TypeScript']
      }
    ]);
  }

  getExtras(): Observable<Extra> {
    return of({
      INTERESTS: {
        TITLE: 'Intereses',
        TEXT: 'Apasionado por el desarrollo Frontend, la arquitectura limpia de software y el aprendizaje constante.'
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
  }
}
