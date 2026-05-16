import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService, Experience } from '../../../../services/api';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-expeciencie',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './expeciencie.component.html',
  styleUrl: './expeciencie.component.css'
})
export class ExpeciencieComponent implements OnInit, OnDestroy {
  showFullProjects = false;
  $experiences: Observable<Experience[]> = new Observable();
  private langChangeSubscription?: Subscription;

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadExperiences();

    // Recargar cuando el idioma cambie
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadExperiences();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadExperiences() {
    this.$experiences = this.apiService.getExperience();
  }

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
