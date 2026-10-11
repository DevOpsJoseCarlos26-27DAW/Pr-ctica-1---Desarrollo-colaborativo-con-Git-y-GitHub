# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta:
Me deja hacer mis cambios sin tocar la rama principal, así que si algo sale mal no rompo lo que ya funciona. Asi cada uno del equipo puede ir a lo suyo a la vez sin pisarse.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta:
Sirve para que otra persona mire mi código antes de que se junte con el resto, y así se pillan fallos que yo no he visto. También queda todo comentado y se aprende de lo que dice el compañero.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta:
Te obliga a sentarte a ver qué ha cambiado cada uno y decidir qué se queda, para no perder el trabajo de nadie. Te enseña a coordinarte cuando varias personas tocan el mismo fichero.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Respuesta:
Cada vez que alguien hace push o abre un Pull Request se podría compilar el proyecto, pasar las pruebas, revisar el estilo del código con un linter y hacer un análisis de calidad o seguridad. Así los errores salen rápido y quien revisa ya recibe algo comprobado.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta:
Si todo pasa bien, se podría crear el paquete o la imagen de la aplicación y desplegarla sola en un entorno de pruebas o en producción. En la entrega continua suele haber que aprobar el último paso a mano, y en el despliegue continuo va todo automático.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Comprobar que el Pull Request no tiene conflictos con la rama principal y que el README.md tiene buen formato (con un linter de Markdown, por ejemplo).
2. Lanzar las pruebas en cada push o Pull Request y no dejar fusionar si alguna falla.

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida:

Justificación (2-3 líneas):
Ya viene integrada en GitHub, así que no hay que montar ni mantener ningún servidor. Se configura con un fichero YAML en el propio repositorio y se activa sola con push o pull_request, lo que le viene muy bien a un equipo pequeño.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida:

Justificación (2-3 líneas):
Es un servidor que la propia empresa instala y controla, así que tiene el control total de la infraestructura y la seguridad. Y con sus plugins se puede conectar con casi cualquier repositorio o entorno interno.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría:
Añadiría SonarQube para analizar el código antes de fusionar el Pull Request y detectar errores, código duplicado, malas prácticas y vulnerabilidades. OWASP ZAP lo dejaría para más adelante, para probar la aplicación ya desplegada en un entorno de pruebas.
