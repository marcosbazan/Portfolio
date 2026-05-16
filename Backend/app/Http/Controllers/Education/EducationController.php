<?php

namespace App\Http\Controllers\Education;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    /**
     * Get education background
     */
    public function index(Request $request)
    {
        $lang = $request->header('Accept-Language', 'es');

        if (str_contains($lang, 'en')) {
            return [
                [
                    "id" => 0,
                    "institution" => "Cesur",
                    "degree" => "Multiplatform Application Development",
                    "period" => "Sep.2022 - Jan.2025",
                    "description" => "Development of Multiplatform Applications."
                ],
                [
                    "id" => 1,
                    "institution" => "Santa María de los Apóstoles",
                    "degree" => "Vocational training in microcomputer systems and networks",
                    "period" => "Sep.2020 - Jun.2022",
                    "description" => "Vocational training in microcomputer systems and networks."
                ]
            ];
        }

        return [
            [
                "id" => 0,
                "institution" => "Cesur",
                "degree" => "Desarrollo de Aplicaciones Multiplataforma",
                "period" => "Sep.2022 - Ene.2025",
                "description" => "Desarrollo de Aplicaciones Multiplataforma."
            ],
            [
                "id" => 1,
                "institution" => "Santa María de los Apóstoles",
                "degree" => "Ciclo formativo en sistemas microinformáticos y redes",
                "period" => "Sep.2020 - Jun.2022",
                "description" => "Ciclo formativo en sistemas microinformáticos y redes."
            ]
        ];
    }
}
