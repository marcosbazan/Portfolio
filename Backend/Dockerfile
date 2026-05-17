FROM php:8.2-fpm-alpine

# Instalar extensiones necesarias para Laravel y Postgres
RUN apk add --no-cache nginx supervisor curl libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Configurar directorio de trabajo
WORKDIR /var/www/html
COPY . .

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

# Configurar permisos para Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Puerto que usa Render
EXPOSE 80

# Comando de arranque definitivo
CMD php artisan serve --host=0.0.0.0 --port=80
