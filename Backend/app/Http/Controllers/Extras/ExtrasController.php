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
            [
                "category" => "Certificaciones",
                "items" => [
                    [
                        "name" => "AWS Certified Developer",
                        "institution" => "Amazon Web Services",
                        "year" => "2023",
                        "credential" => "DVA-C002"
                    ],
                    [
                        "name" => "Google Cloud Professional",
                        "institution" => "Google Cloud",
                        "year" => "2022",
                        "credential" => "Cloud Developer"
                    ]
                ]
            ],
            [
                "category" => "Idiomas",
                "items" => [
                    [
                        "language" => "Español",
                        "level" => "Nativo"
                    ],
                    [
                        "language" => "Inglés",
                        "level" => "C1 Advanced"
                    ],
                    [
                        "language" => "Francés",
                        "level" => "B1 Intermediate"
                    ]
                ]
            ],
            [
                "category" => "Intereses",
                "items" => [
                    "Contribución a Open Source",
                    "Desarrollo de Videojuegos",
                    "Inteligencia Artificial",
                    "Ciberseguridad"
                ]
            ]
        ];
    }
}
