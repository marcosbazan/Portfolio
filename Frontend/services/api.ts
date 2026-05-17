import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {environment} from '../src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Olvídate de IPs fijas, usamos la variable global
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private translate: TranslateService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Accept-Language': this.translate.currentLang || 'es'
    });
  }

  setLanguage(lang: string) {}

  getSkills(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/skills`, { headers: this.getHeaders() }); }
  getExperience(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/experience`, { headers: this.getHeaders() }); }
  getEducation(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/education`, { headers: this.getHeaders() }); }
  getProjects(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/projects`, { headers: this.getHeaders() }); }
  getExtras(): Observable<any> { return this.http.get<any>(`${this.baseUrl}/extras`, { headers: this.getHeaders() }); }
}
