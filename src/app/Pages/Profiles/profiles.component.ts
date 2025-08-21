import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AvatarComponent } from './Avatar/avatar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule, AvatarComponent, TranslateModule],
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  selectedLang = 'es';
  isBrowser: boolean;

  constructor(
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) this.selectedLang = savedLang;
    }
    this.translate.use(this.selectedLang);
  }

  changeLang(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
    }
  }
}
