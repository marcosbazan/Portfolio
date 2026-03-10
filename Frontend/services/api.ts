import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  category: string;
  icons: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
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
  id: number;
  title: string;
  description: string;
  type: string;
  url?: string;
  technologies?: string[];
}



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.baseUrl}/skills`);
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/experience`);
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}/education`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
  }


  getExtras(): Observable<Extra[]> {
    return this.http.get<Extra[]>(`${this.baseUrl}/extras`);
  }
}
