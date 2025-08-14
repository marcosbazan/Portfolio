import { Routes } from '@angular/router';
import { ProfilesComponent } from './Pages/Profiles/profiles.component';
import { ExpeciencieComponent } from './Pages/Expeciencie/expeciencie.component';
import { LearningComponent } from './Pages/Learning/learning.component';
import { ProyectsComponent } from './Pages/Proyects/proyects.component';
import { SkillsComponent } from './Pages/Skills/skills.component';
import { ProyectosCompletosComponent } from './Pages/Proyectos-completos/proyectos-completos.component';



export const routes: Routes = [
    { path: '', component: ProfilesComponent },
    { path: 'tecnologias', component: SkillsComponent },
    { path: 'experiencia', component: ExpeciencieComponent },
    { path: 'proyectos', component: ProyectsComponent },
    { path: 'formacion', component: LearningComponent },
    { path: 'proyectos-completos', component: ProyectosCompletosComponent },
    { path: '**', redirectTo: '' }

];
