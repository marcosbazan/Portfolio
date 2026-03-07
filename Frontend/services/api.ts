import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  name: string;
  tech: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Traer proyectos
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
  }

  // Traer skills
  getSkills(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/skills`);
  }

  // Enviar formulario de contacto
  sendContact(formData: ContactForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, formData);
  }
}
