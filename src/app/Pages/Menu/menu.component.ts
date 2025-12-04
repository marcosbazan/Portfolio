import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedLang = 'es';
  isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    private langService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Inicializa idioma desde localStorage
    const savedLang = localStorage.getItem('lang') || 'es';
    this.langService.setLang(savedLang);

    // Suscribirse a cambios globales de idioma
    this.langService.lang$.subscribe(lang => {
      this.selectedLang = lang;
      this.translate.use(lang);
    });
  }

  changeLang(lang: string) {
  this.langService.setLang(lang); // cambia idioma global
  this.selectedLang = lang;       // <-- esto es clave para el botón activo
  if (this.isBrowser) {
    localStorage.setItem('lang', lang);
  }
}

}
