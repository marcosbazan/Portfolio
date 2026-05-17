import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService} from '../../../../services/api';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit, OnDestroy {
  showFullProjects = false;
  $education: Observable<any[]> = new Observable();
  private langChangeSubscription?: Subscription;

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadEducation();

    // Recargar cuando el idioma cambie
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadEducation();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadEducation() {
    this.$education = this.apiService.getEducation();
  }

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
