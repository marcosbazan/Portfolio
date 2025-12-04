import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AvatarComponent } from './Avatar/avatar.component';
import { LanguageService } from '../../language.service';
@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule, AvatarComponent, TranslateModule],
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  selectedLang = 'es';
  cvPath = '';

  constructor(
    public translate: TranslateService,
    private langService: LanguageService
  ) {}

  ngOnInit() {
    // Inicializa idioma desde localStorage
    const savedLang = localStorage.getItem('lang') || 'es';
    this.langService.setLang(savedLang);

    // Suscribirse a cambios globales de idioma
    this.langService.lang$.subscribe(lang => {
      this.applyLanguage(lang);
    });
  }

  openCv() {
    if (!this.cvPath) return;
    window.open(this.cvPath, '_blank');
  }

  private applyLanguage(lang: string) {
    this.selectedLang = lang;

    // Actualiza traducciones en tiempo real
    this.translate.setDefaultLang(lang);
    this.translate.use(lang).subscribe(() => {
      // Actualiza CV según idioma
      this.cvPath = lang === 'en'
        ? 'assets/MarcosBazanFernandez_Ing.pdf'
        : 'assets/MarcosBazanFernandez_Es.pdf';
    });

    localStorage.setItem('lang', lang);
  }
}
