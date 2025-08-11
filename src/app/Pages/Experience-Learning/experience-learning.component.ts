import { Component } from '@angular/core';
import { ExpeciencieComponent } from '../Expeciencie/expeciencie.component';
import { LearningComponent } from '../Learning/learning.component';

@Component({
  selector: 'app-experience-learning',
  standalone: true,
  imports: [ExpeciencieComponent, LearningComponent],
  template: `
    <section id="experience-learning-section" class="two-columns">
      <app-expeciencie class="card-section"></app-expeciencie>
      <app-learning class="card-section"></app-learning>
    </section>
  `
})
export class ExperienceLearningComponent {}
