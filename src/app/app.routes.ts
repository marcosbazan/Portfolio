import { Routes } from '@angular/router';
import { ProfilesComponent } from './Pages/Profiles/profiles.component';
import { ExpeciencieComponent } from './Pages/Expeciencie/expeciencie.component';
import { LearningComponent } from './Pages/Learning/learning.component';
import { ProyectsComponent } from './Pages/Proyects/proyects.component';
import { SkillsComponent } from './Pages/Skills/skills.component';
import { ExtrasComponent } from './Pages/Extras/extras.component';

export const routes: Routes = [
    { path: '', component: ProyectsComponent }, // portada con los 3 proyectos
    { path: 'tecnologias', component: SkillsComponent },
    { path: 'proyectos', component: ProyectsComponent },
    { path: 'experiencia', component: ExpeciencieComponent },
    { path: 'formacion', component: LearningComponent },
    { path: 'extras', component: ExtrasComponent },
    { path: '**', redirectTo: '' } // fallback
];
