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
    link: "https://github.com/usuario/proyecto1",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    ]
  },
  {
    key: 1,
    link: "https://github.com/usuario/proyecto2",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    ]
  },
  {
    key: 2,
    link: "https://github.com/usuario/proyecto3",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
    ]
  },
  {
    key: 3,
    link: "https://github.com/usuario/proyecto4",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"]
    }]

  constructor(private translate: TranslateService) {}

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
