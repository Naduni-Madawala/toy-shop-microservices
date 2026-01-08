FROM php:8.2-apache

RUN docker-php-ext-install pdo pdo_mysql

COPY status.conf /etc/apache2/conf-enabled/status.conf
COPY html/ /var/www/html/

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
