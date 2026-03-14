<?php

namespace App\Http\Controllers\Education;

use App\Http\Controllers\Controller;

class EducationController extends Controller
{
    /**
     * Get education background
     */
    public function index()
    {
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
