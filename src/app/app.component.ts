import { RouterModule, RouterOutlet,provideRouter } from '@angular/router';
import { ProfilesComponent } from './Pages/Profiles/profiles.component';
import { MenuComponent } from './Pages/Menu/menu.component';
import { SkillsComponent } from './Pages/Skills/skills.component';
import { ExpeciencieComponent } from './Pages/Expeciencie/expeciencie.component';
import { LearningComponent } from './Pages/Learning/learning.component';
import { ProyectsComponent } from './Pages/Proyects/proyects.component';
import { Component } from '@angular/core';

const routes = [
  { path: '', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExpeciencieComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'projects', component: ProyectsComponent },
  { path: '**', redirectTo: 'profiles' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MenuComponent],
  providers: [provideRouter(routes)],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
}