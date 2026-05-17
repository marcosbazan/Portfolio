FROM php:8.2-fpm-alpine

# Instalar extensiones necesarias para Laravel y Postgres
RUN apk add --no-cache nginx supervisor curl libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# 1º Nos situamos en la raíz del contenedor
WORKDIR /var/www/html

# 2º Copiamos los archivos (como Render ya filtra la carpeta backend, copiamos lo que nos da)
COPY . .

# 3º Instalamos Composer y las dependencias directamente aquí
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

# Configurar permisos para Laravel en la raíz del contenedor
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Puerto que usa Render
EXPOSE 80

# Comando de arranque definitivo
CMD php artisan serve --host=0.0.0.0 --port=80
