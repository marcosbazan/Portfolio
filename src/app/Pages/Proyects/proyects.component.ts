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
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    ]
  },
  {
    key: 1,
    link: "https://github.com/marcos318888/GaleriaArte",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    ]
  },
  {
    key: 2,
    link: "https://github.com/marcos318888/NOMINATOR",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
    ]
  },
  {
    key: 3,
    link: "https://github.com/marcos318888/Chatbot",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"]
    }]

  constructor(private translate: TranslateService) {}

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
