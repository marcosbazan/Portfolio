import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // <--- Importa TranslateModule

@Component({
  selector: 'app-extras',
  standalone: true, // <--- Muy importante
  imports: [TranslateModule], // <--- Esto habilita el pipe translate
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent {
  interestsKey = 'EXTRAS.INTERESTS.TEXT';
  hobbiesKey = 'EXTRAS.HOBBIES.TEXT';
  recognitionsKey = 'EXTRAS.RECOGNITIONS.TEXT';
  
  languages = [
    { langKey: 'EXTRAS.LANGUAGES.SPANISH', levelKey: 'EXTRAS.LANGUAGES.LEVEL.SPANISH' },
    { langKey: 'EXTRAS.LANGUAGES.ENGLISH', levelKey: 'EXTRAS.LANGUAGES.LEVEL.ENGLISH' }
  ];

  certificatesKeys = [
    'EXTRAS.CERTIFICATES_LIST.0',
    'EXTRAS.CERTIFICATES_LIST.1',
    'EXTRAS.CERTIFICATES_LIST.2'
  ];
}
