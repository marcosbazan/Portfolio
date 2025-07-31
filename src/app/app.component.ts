import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilesComponent } from "./Pages/Profiles/profiles.component";
import { MenuComponent } from './Pages/Home/Menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilesComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
}
