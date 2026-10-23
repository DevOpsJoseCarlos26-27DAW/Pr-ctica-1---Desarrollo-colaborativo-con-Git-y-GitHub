# Evidencias grupales · Práctica 2 Docker

**Equipo:** TODO  
**Integrantes:** TODO  
**Fecha:** TODO

> No hace falta una captura por comando. Bastan resultados breves y explicaciones comprensibles. Las evidencias son del **equipo**.

## 1. Primeros contenedores

- [ ] `docker --version` / `docker compose version` comprobados.
- [ ] `hello-world` ejecutado.
- [ ] Nginx accesible en `http://localhost:8081`.
- [ ] Se ha detenido, iniciado y eliminado el contenedor.

**Comandos utilizados y resultado:** TODO

**¿Qué significa `8081:80`?** TODO

## 2. Nuestra imagen

- [ ] Imagen construida con `docker build`.
- [ ] Aplicación accesible en `http://localhost:8080`.
- [ ] Cambio visual comprobado tras reconstruir y recrear el contenedor.

**Comandos y resultados:** TODO

**¿Por qué el contenedor antiguo no cambia al reconstruir la imagen?** TODO

## 3. Persistencia de datos

- [ ] Volumen creado.
- [ ] Un contenedor escribe un archivo en el volumen.
- [ ] Otro contenedor recupera el archivo tras eliminar el primero.

**Comandos y resultado:** TODO

**¿Qué relación tiene esto con las bases de datos?** TODO

## 4. Docker Compose

- [ ] Servicios `web` y `proxy` iniciados.
- [ ] La aplicación funciona en `http://localhost:8080`.
- [ ] Se ha consultado `docker compose ps`.
- [ ] Se ha probado la comunicación `proxy` → `web`.

**Comandos y resultado:** TODO

**¿Por qué el proxy se conecta a `web` por su nombre?** TODO

## 5. Incidencias

**Incidencia 1 - Puerto ocupado:** qué ocurrió / cómo lo resolvisteis: TODO

**Incidencia 2 - Imagen no actualizada:** qué ocurrió / cómo lo resolvisteis: TODO

**Incidencia 3 - Servicio incorrecto en Nginx:** qué ocurrió / cómo lo resolvisteis: TODO

## 6. Conclusión del equipo

**Dos cosas que hemos aprendido:** TODO

**Una duda o dificultad que hemos tenido:** TODO

## 7. Colaboración

**Enlaces a Pull Requests relevantes:** TODO
