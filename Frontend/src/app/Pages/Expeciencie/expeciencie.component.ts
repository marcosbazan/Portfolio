import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-expeciencie',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './expeciencie.component.html',
  styleUrl: './expeciencie.component.css'
})
export class ExpeciencieComponent {
  showFullProjects = false;

  constructor(private translate: TranslateService) {}

  toggleFullProjects() {
    this.showFullProjects = !this.showFullProjects;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
