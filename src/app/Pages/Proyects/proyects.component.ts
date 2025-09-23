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
    img: "assets/proyectos/Portfolio.png",
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
    techs: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"
      ]
    }];

  constructor(private translate: TranslateService) {}

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
