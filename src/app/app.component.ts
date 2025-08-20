import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './Pages/Menu/menu.component';
import { ProfilesComponent } from './Pages/Profiles/profiles.component';
import { SkillsComponent } from './Pages/Skills/skills.component';
import { ProyectsComponent } from './Pages/Proyects/proyects.component';
import { ExpeciencieComponent } from './Pages/Expeciencie/expeciencie.component';
import { LearningComponent } from './Pages/Learning/learning.component';
import { ExtrasComponent } from './Pages/Extras/extras.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule, // IMPORTANTE: permite usar pipes | translate
    MenuComponent,
    ProfilesComponent,
    SkillsComponent,
    ProyectsComponent,
    ExpeciencieComponent,
    LearningComponent,
    ExtrasComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.translate.use(savedLang);
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
