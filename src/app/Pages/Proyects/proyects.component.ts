import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  showFullProjects = false;
  selectedImage: string | null = null;
  carouselImages: string[] = [];
  currentCarouselIndex = 0;

  projects = [
    {
      key: 0,
      link: "https://github.com/marcos318888/Portafolio",
      img: "assets/proyectos/Portfolio.png",
      techs: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      ]
    },
    {
      key: 1,
      link: "https://github.com/marcos318888/Gestion-Biblioteca",
      img: "assets/proyectos/Biblioteca.jpg",
      techs: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
      ]
    },
    {
      key: 2,
      link: "https://github.com/marcos318888/NOMINATOR",
      img: [
        "assets/proyectos/Nominas.png",
        "assets/proyectos/Pantalla-Altas.png",
        "assets/proyectos/Pantalla-Bajas.png",
        "assets/proyectos/Pantalla-Informes.png",
        "assets/proyectos/Pantalla-Nominas.png",
        "assets/proyectos/Pantalla-NominasDatos.png"
      ],
      techs: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
      ]
    },
    {
      key: 3,
      link: "https://github.com/marcos318888/Chatbot",
      img: "assets/proyectos/Chatbot.jpg",
      techs: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"
      ]
    }
  ];

  constructor(private translate: TranslateService) {}

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
