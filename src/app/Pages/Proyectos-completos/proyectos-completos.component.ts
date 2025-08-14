import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
  category: string;
  featured: boolean;
}

@Component({
  selector: 'app-proyectos-completos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos-completos.component.html',
  styleUrls: ['./proyectos-completos.component.css']
})
export class ProyectosCompletosComponent {

}
