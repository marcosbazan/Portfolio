<?php

namespace App\Http\Controllers\Extras;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExtrasController extends Controller
{
    /**
     * Get extra activities and interests
     */
    public function index(Request $request)
    {
        $lang = $request->header('Accept-Language', 'es');

        if (str_contains($lang, 'en')) {
            return [
                "INTERESTS" => [
                    "TITLE" => "Interests",
                    "TEXT" => "I enjoy learning new technologies and experimenting with personal projects, exploring different programming languages, frameworks, and tools that help me improve my skills as a developer."
                ],
                "LANGUAGES" => [
                    "TITLE" => "Languages",
                    "SPANISH" => "Spanish",
                    "ENGLISH" => "English",
                    "LEVEL" => [
                        "SPANISH" => "Native",
                        "ENGLISH" => "Intermediate level (B2)"
                    ]
                ],
                "EVENTS" => "Events",
                "EVENTS_LIST" => [
                    "I participated in DrupalCon 2025 held in Santiago de Compostela.",
                    "I attended the CCN-CERT Cybersecurity Conference 2024 in Madrid.",
                    "I attended t3chfest 2024 in Madrid."
                ],
                "RECOGNITIONS" => [
                    "TITLE" => "Recognitions",
                    "TEXT" => "Recognized during my internship for my ability to learn quickly and my willingness to take on new challenges."
                ],
                "CERTIFICATES" => "Certificates",
                "CERTIFICATES_LIST" => [
                    "English for IT 2 – Cisco",
                    "Application development with NodeJs and Express – Openwebinars",
                    "Fundamentals of Angular – Openwebinars"
                ]
            ];
        }

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
