import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../../../services/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit, OnDestroy {
  showFullProjects = false;

  // 1º Declaramos "extras" como any para que el HTML pueda leer .INTERESTS, .LANGUAGES, etc.
  extras: any;

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

  // 2º Nos suscribimos al servicio para desempaquetar el objeto directo de Laravel
  loadExtras() {
    this.apiService.getExtras().subscribe({
      next: (data) => {
        this.extras = data;
      },
      error: (error) => {
        console.error('Error loading extras:', error);
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
