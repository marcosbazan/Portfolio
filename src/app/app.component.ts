import { RouterModule, RouterOutlet,provideRouter } from '@angular/router';
import { ProfilesComponent } from './Pages/Profiles/profiles.component';
import { MenuComponent } from './Pages/Menu/menu.component';
import { SkillsComponent } from './Pages/Skills/skills.component';
import { ExpeciencieComponent } from './Pages/Expeciencie/expeciencie.component';
import { LearningComponent } from './Pages/Learning/learning.component';
import { ProyectsComponent } from './Pages/Proyects/proyects.component';
import { Component } from '@angular/core';
import { ProyectosCompletosComponent } from './Pages/Proyectos-completos/proyectos-completos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MenuComponent, ProfilesComponent, SkillsComponent, ProyectsComponent, ExpeciencieComponent, LearningComponent,ProyectosCompletosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
}