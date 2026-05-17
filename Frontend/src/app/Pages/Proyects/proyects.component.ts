import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../../services/api';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit, OnDestroy {
  showFullProjects = false;
  selectedImage: string | null = null;
  carouselImages: string[] = [];
  currentCarouselIndex = 0;
  projects: any= [];
  private langChangeSubscription?: Subscription;

  constructor(
    private translate: TranslateService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadProjects();

    // Recargar cuando el idioma cambie
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadProjects() {
    this.apiService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  // ✅ Comprobación de array para Angular
  isArray(img: string | string[]): img is string[] {
    return Array.isArray(img);
  }

  // Zoom para imagen individual
  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

  // Carrusel para múltiples imágenes
  openCarousel(images: string[]) {
    this.carouselImages = images;
    this.currentCarouselIndex = 0;
  }

  closeCarousel() {
    this.carouselImages = [];
    this.currentCarouselIndex = 0;
  }

  prevCarouselImage() {
    if (this.carouselImages.length === 0) return;
    this.currentCarouselIndex = (this.currentCarouselIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextCarouselImage() {
    if (this.carouselImages.length === 0) return;
    this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.carouselImages.length;
  }

  // Devuelve la primera imagen si es array, o la imagen misma si es string
  getFirstImage(img: string | string[]): string {
    return Array.isArray(img) ? img[0] : img;
  }

  // Determina si se hace zoom o carrusel
  openProjectImage(img: string | string[]) {
    if (Array.isArray(img)) {
      this.openCarousel(img);
    } else {
      this.openImage(img);
    }
  }
}
