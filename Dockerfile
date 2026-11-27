# Práctica 2 - Imagen para la aplicación del equipo
FROM nginx:stable-alpine

COPY . /usr/share/nginx/html/

EXPOSE 80
