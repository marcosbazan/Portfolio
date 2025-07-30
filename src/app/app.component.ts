import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilesComponent } from "./Pages/Profiles/profiles.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
}
