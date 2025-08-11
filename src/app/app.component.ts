import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilesComponent } from "./Pages/Profiles/profiles.component";
import { MenuComponent } from './Pages/Menu/menu.component';
import { SkillsComponent } from "./Pages/Skills/skills.component";
import { ExpeciencieComponent } from './Pages/Expeciencie/expeciencie.component';
import { LearningComponent } from './Pages/Learning/learning.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilesComponent, MenuComponent, SkillsComponent, ExpeciencieComponent, LearningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
}
