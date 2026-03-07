import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; //  Importa TranslateModule

@Component({
  selector: 'app-extras',
  standalone: true, 
  imports: [TranslateModule], // Habilita el pipe translate
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent {
  interestsKey = 'EXTRAS.INTERESTS.TEXT';
  recognitionsKey = 'EXTRAS.RECOGNITIONS.TEXT';
  
  languages = [
    { langKey: 'EXTRAS.LANGUAGES.SPANISH', levelKey: 'EXTRAS.LANGUAGES.LEVEL.SPANISH' },
    { langKey: 'EXTRAS.LANGUAGES.ENGLISH', levelKey: 'EXTRAS.LANGUAGES.LEVEL.ENGLISH' }
  ];


}
