FROM php:8.2-fpm-alpine

# Instalar extensiones necesarias para Laravel y Postgres
RUN apk add --no-cache nginx supervisor curl libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# 1º Nos situamos en la raíz del contenedor
WORKDIR /var/www/html

# 2º Copiamos TODO el monorepo (Frontend y Backend)
COPY . .

# 3º ¡EL TRUCO! Nos movemos dentro de la carpeta backend antes de ejecutar Laravel
WORKDIR /var/www/html/backend

# 4º Ahora Composer SÍ encontrará el composer.json en este directorio
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

# Configurar permisos para Laravel en la ruta correcta
RUN chown -R www-data:www-data /var/www/html/backend/storage /var/www/html/backend/bootstrap/cache

# Puerto que usa Render
EXPOSE 80

# Comando de arranque apuntando a la carpeta correcta
CMD php artisan serve --host=0.0.0.0 --port=80
