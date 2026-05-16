<?php

namespace App\Http\Controllers\Experience;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->header('Accept-Language', 'es');

        if (str_contains($lang, 'en')) {
            return [
                [
                    "id" => 0,
                    "company" => "CodeArts Solution",
                    "position" => "Full Stack Developer",
                    "period" => "Nov.2024 - Feb.2025",
                    "description" => [
                        "Developed an application using Drupal 11 for the frontend and Symfony with PHP for the backend.",
                        "Implemented features such as user authentication, data management, creation and customization of modules, themes, and routes."
                    ],
                ],
                [
                    "id" => 1,
                    "company" => "Interterritorial de Prevencion de Riesgos S.L.",
                    "position" => "Full Stack Developer",
                    "period" => "Jan.2026 - Present",
                    "description" => [""],
                ]
            ];
        }

        return [
            [
                "id" => 0,
                "company" => "CodeArts Solution",
                "position" => "Desarrollador Full Stack",
                "period" => "Nov.2024 - Feb.2025",
                "description" => [
                    "Desarrollo de una aplicación utilizando Drupal 11 para el frontend y Symfony con PHP para el backend.",
                    "Implementación de funcionalidades como autenticación de usuarios, gestión de datos, creacion y personalización de módulos, temas y rutas."
                ],

            ],
            [
                "id" => 1,
                "company" => "Interterritorial de Prevencion de Riesgos S.L.",
                "position" => "Desarrollador Full Stack",
                "period" => "Ene.2026 - Presente",
                "description" => [""],

            ]
        ];
    }
}
