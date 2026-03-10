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
                "id" => 1,
                "degree" => "Ingeniería Informática",
                "institution" => "Universidad Politécnica",
                "period" => "2018 - 2022",
                "description" => "Especialización en Desarrollo de Software",
                "achievements" => [
                    "Matrícula de Honor",
                    "Proyecto Final Sobresaliente"
                ]
            ],
            [
                "id" => 2,
                "degree" => "Curso Full Stack Development",
                "institution" => "Coding Academy",
                "period" => "2021",
                "description" => "Intensivo de desarrollo web moderno",
                "technologies" => [
                    "React", "Node.js", "MongoDB", "AWS"
                ]
            ]
        ];
    }
}
