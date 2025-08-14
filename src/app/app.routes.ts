import { Routes } from '@angular/router';
import { ProfilesComponent } from './Pages/Profiles/profiles.component';
import { ExpeciencieComponent } from './Pages/Expeciencie/expeciencie.component';
import { LearningComponent } from './Pages/Learning/learning.component';
import { ProyectsComponent } from './Pages/Proyects/proyects.component';
import { SkillsComponent } from './Pages/Skills/skills.component';

export const routes: Routes = [
    { path: '', component: ProyectsComponent }, // portada con los 3 proyectos
    { path: 'tecnologias', component: SkillsComponent },
    { path: 'experiencia', component: ExpeciencieComponent },
    { path: 'formacion', component: LearningComponent },
    { path: '**', redirectTo: '' } // fallback
];
