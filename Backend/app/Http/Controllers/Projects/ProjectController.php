<?php

namespace App\Http\Controllers\Projects;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Get all projects
     */
    public function index(Request $request)
    {

        return [
            [
                "key" => 0,
                "link" => "https://web.iprprevencion.es/",
                "img" => "assets/proyectos/web_iprprevencion.png",
                "techs" => [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"

                ]
            ],
            [
                "key" => 1,
                "link" => "https://github.com/marcos318888/Portafolio",
                "img" => "assets/proyectos/Portfolio.png",
                "techs" => [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-plain-wordmark.svg"

                ]
            ],
            [
                "key" => 2,
                "link" => "https://github.com/marcos318888/Gestion-Biblioteca",
                "img" => "assets/proyectos/Biblioteca.jpg",
                "techs" => [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                ]
            ],
            [
                "key" => 3,
                "link" => "https://github.com/marcos318888/NOMINATOR",
                "img" => [
                    "assets/proyectos/Nominas.png",
                    "assets/proyectos/Pantalla-Altas.png",
                    "assets/proyectos/Pantalla-Bajas.png",
                    "assets/proyectos/Pantalla-Informes.png",
                    "assets/proyectos/Pantalla-Nominas.png",
                    "assets/proyectos/Pantalla-NominasDatos.png"
                ],
                "techs" => [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
                ]
            ],
            [
                "key" => 4,
                "link" => "https://github.com/marcos318888/Chatbot",
                "img" => "assets/proyectos/Chatbot.jpg",
                "techs" => [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"
                ]
            ]
        ];
    }
}
