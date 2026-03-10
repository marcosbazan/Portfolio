import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService, Skill } from '../../../services/api';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadSkills();
  }

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
