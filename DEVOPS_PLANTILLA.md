# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Permite desarrollar una funcionalidad de forma aislada sin poner en riesgo las ramas compartidas. Así cada cambio puede revisarse y probarse antes de integrarlo en `develop`.

### b) Abrir un Pull Request y que otro compañero lo revise

El Pull Request permite explicar los cambios y comprobarlos antes de fusionarlos. La revisión de otro compañero ayuda a detectar errores, mejorar la solución y mantener la calidad del código.

### c) Resolver un conflicto de README.md entre varios cambios

Obliga a comparar los cambios realizados por las distintas ramas y decidir conjuntamente qué contenido debe conservarse. Resolverlo correctamente evita perder información y deja el archivo en un estado coherente para todo el equipo.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Podrían ejecutarse automáticamente la instalación de dependencias, las pruebas funcionales, la comprobación de sintaxis y un análisis de calidad del código. El resultado se mostraría en el Pull Request para impedir la integración de cambios que fallen.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Después de superar las comprobaciones, el proyecto podría y publicarse automáticamente en un entorno de pruebas. Si se cumplen las condiciones de aprobación, también podría desplegarse en producción.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Ejecutar pruebas para comprobar que añadir, eliminar, completar y filtrar tareas funcionan según los criterios de aceptación.
2. Verificar que el proyecto mantiene una estructura y unos archivos válidos, y que la rama o Pull Request cumple las comprobaciones antes de fusionarse.

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida:

GitHub Actions

Justificación (2-3 líneas):

Está integrada en GitHub y permite ejecutar workflows automáticamente cuando se hace `push` o se abre un Pull Request. Es adecuada para un equipo pequeño porque no requiere administrar un servidor independiente y permite definir las tareas mediante archivos del repositorio.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida:

Jenkins

Justificación (2-3 líneas):

Jenkins permite instalar y administrar el servidor de automatización dentro de la infraestructura de la empresa. También puede conectarse a repositorios, herramientas y entornos internos mediante plugins y pipelines configurables.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría:

Añadiría SonarQube para analizar automáticamente la calidad y mantenibilidad del código, detectar errores potenciales, duplicidades y vulnerabilidades. Como comprobación de seguridad complementaria, OWASP ZAP podría analizar la aplicación web en ejecución para localizar vulnerabilidades habituales.
