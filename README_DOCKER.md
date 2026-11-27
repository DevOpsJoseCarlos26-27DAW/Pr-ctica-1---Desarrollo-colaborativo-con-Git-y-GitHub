# Despliegue Docker del gestor de tareas

**Equipo:** Mesa 2(No somos muy creativos)
**Integrantes:** Adrian Alamo Diaz, Hari Sebastian Riaño Almeida, Jesús Cotera Rodríguez
**Repositorio de GitHub:** https://github.com/DevOpsJoseCarlos26-27DAW/Pr-ctica-1---Desarrollo-colaborativo-con-Git-y-GitHub.git

## Requisitos

- TODO: requisitos necesarios en el ordenador.
-Docker instalado en el equipo.

## Ejecutar la aplicación
En el mismo directorio en el que este el compose
```bash
    docker compose up -d
```

**URL de acceso:** TODO

## Detener y eliminar los contenedores
Detener contenedores.
```bash
docker compose stop
```
Para detener y eliminar.
```bash
docker compose down
```

## Arquitectura

- **web**: imagen gestor-tareas2.0
- **proxy**: nginx:stable-alpine
- **Comunicación entre servicios**: Para comprobarlo:
```bash
docker exec -it <contenedor_a> ping -c 3 <contenedor_b>.
```


## Posibles problemas
    En caso de tener una vpn activa descativela antes de ejecutar los contenedores.
