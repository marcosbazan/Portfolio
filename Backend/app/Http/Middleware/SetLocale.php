<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App; // Importamos la fachada App
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Leemos la cabecera 'Accept-Language' que envía Angular.
        // Si no viene ninguna, usamos el idioma por defecto de config/app.php
        $locale = $request->header('Accept-Language', config('app.locale'));

        // 2. Configuramos el idioma en Laravel para esta petición
        App::setLocale($locale);

        // 3. Continuamos con la petición hacia el controlador
        return $next($request);
    }
}
