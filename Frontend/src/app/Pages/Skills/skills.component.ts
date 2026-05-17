import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../../../services/api';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  showFullProjects = false;
  $skills: Observable<any[]> = new Observable();

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.$skills = this.apiService.getSkills();
  }

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
