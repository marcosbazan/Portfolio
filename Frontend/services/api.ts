import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private translate: TranslateService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Accept-Language': this.translate.currentLang || 'es'
    });
  }

  setLanguage(lang: string) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.baseUrl}/skills`, { headers: this.getHeaders() });
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/experience`, { headers: this.getHeaders() });
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}/education`, { headers: this.getHeaders() });
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`, { headers: this.getHeaders() });
  }


  getExtras(): Observable<Extra> {
    return this.http.get<Extra>(`${this.baseUrl}/extras`, { headers: this.getHeaders() });
  }
}
