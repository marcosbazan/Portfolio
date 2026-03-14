<?php

namespace App\Http\Controllers\Extras;

use App\Http\Controllers\Controller;

class ExtrasController extends Controller
{
    /**
     * Get extra activities and interests
     */
    public function index()
    {
        return [
            "INTERESTS" => [
                "TITLE" => "Intereses",
                "TEXT" => "Me gusta aprender nuevas tecnologías y experimentar con proyectos personales, explorando diferentes lenguajes, frameworks y herramientas que me permiten mejorar mis habilidades como desarrollador."
            ],
            "LANGUAGES" => [
                "TITLE" => "Idiomas",
                "SPANISH" => "Español",
                "ENGLISH" => "Inglés",
                "LEVEL" => [
                    "SPANISH" => "Nativo",
                    "ENGLISH" => "Nivel intermedio (B2)"
                ]
            ],
            "EVENTS" => "Eventos",
            "EVENTS_LIST" => [
                "He participado en la DrupalCon 2025 celebrada en Santiago de Compostela.",
                "He asistido a las jornadas de ciberseguridad CCN-CERT 2024 en Madrid.",
                "He asistido al t3chfest 2024 en Madrid."
            ],
            "RECOGNITIONS" => [
                "TITLE" => "Reconocimientos",
                "TEXT" => "Reconocimiento en mis prácticas por destacar por mi capacidad para aprender rápidamente y mi disposición a asumir nuevos retos."
            ],
            "CERTIFICATES" => "Certificados",
            "CERTIFICATES_LIST" => [
                "English for IT 2 – Cisco",
                "Desarrollo de aplicaciones con NodeJs y Express – Openwebinars",
                "Fundamentos de Angular – Openwebinars"
            ]
        ];
    }
}
