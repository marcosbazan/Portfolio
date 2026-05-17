import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../../../services/api';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit, OnDestroy {
  showFullProjects = false;
  $extras: any = {};
  private langChangeSubscription?: Subscription;

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadExtras();

    // Recargar cuando el idioma cambie
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadExtras();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadExtras() {
    this.$extras = this.apiService.getExtras();
  }

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
