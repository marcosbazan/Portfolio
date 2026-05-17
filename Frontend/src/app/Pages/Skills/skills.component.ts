import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../../../services/api';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  showFullProjects = false;

  // 1º Cambiamos $skills por un array normal de tipo any
  skills: any[] = [];

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadSkills();
  }

  // 2º Creamos la función para suscribirnos a los datos de Laravel
  loadSkills() {
    this.apiService.getSkills().subscribe({
      next: (data) => {
        this.skills = data;
      },
      error: (error) => {
        console.error('Error loading skills:', error);
      }
    });
  }

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
