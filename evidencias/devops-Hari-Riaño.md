# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: Permite mantener una rama main con un producto oficial y funcional para presentar a los usuarios a la par que se desarrollan 
nuevas funcionalidades sin afectar lo que se presenta en la versión oficial.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Permite repartir el poder de decición sobre el proyecto, impidiendo que se hagan modificaciones de manera unilateral por parte
de cada programador, haciendo que en vez de esto almenos un programador más deba aceptar los cambios antes de oficializarlos.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Permite aprender sobre la resolución de conflictos en github y las posibles formas de resolverlos con un ejemplo sencillo.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Respuesta: Se podrían automatizar las pruebas, la comprobación del código y la detección de errores cada vez que se haga un push o se abra un Pull Request.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta: Después de superar las comprobaciones, se podría generar la aplicación y desplegarla automáticamente en un entorno de pruebas o producción.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Ejecutar automáticamente las pruebas del proyecto.
2. Comprobar que el código no contiene errores antes de hacer el despliegue.

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida: GitHub Actions

Justificación (2-3 líneas): Está integrado directamente con GitHub y permite ejecutar pruebas automáticamente al realizar un Pull Request. Es una opción sencilla 
y adecuada para un equipo pequeño que ya trabaja con GitHub.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida: Jenkins

Justificación (2-3 líneas): Permite instalar y administrar el servidor de automatización de forma propia. Además, puede conectarse con repositorios y diferentes 
entornos internos mediante pipelines.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría: SonarQube. Comprobaría la calidad del código, detectando errores, vulnerabilidades y problemas 
de mantenibilidad antes del despliegue.
