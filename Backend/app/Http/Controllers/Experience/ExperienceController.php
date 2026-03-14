<?php

namespace App\Http\Controllers\Experience;

use App\Http\Controllers\Controller;

class ExperienceController extends Controller
{
    /**
     * Get work experience
     */
    public function index()
    {
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
                "technologies" => [
                    "Drupal", "Symfony", "PHP", "MySQL"
                ]
            ],
            [
                "id" => 1,
                "company" => "Interterritorial de Prevencion de Riesgos S.L.",
                "position" => "Desarrollador Full Stack",
                "period" => "Ene.2026 - Presente",
                "description" => [""],
                "technologies" => [
                    "Laravel", "Symfony", "PHP", "MySQL"
                ]
            ],
        ];
    }
}
