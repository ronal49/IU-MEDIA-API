# Portada

**Título:** Despliegue de Aplicación Web en Plataformas Cloud (Backend y Frontend)
**Estudiante:** [Nombre del Estudiante]
**Materia:** [Nombre de la Materia]
**Fecha:** [Fecha Actual]

---

# Introducción

El presente documento detalla el proceso paso a paso para el despliegue de una aplicación web completa, separada en un Backend y un Frontend, en plataformas en la nube. Este tipo de arquitectura permite una mayor escalabilidad y un mejor mantenimiento. Para este proyecto, hemos optado por desplegar el Backend en [Elegir: Heroku / Railway / Render] y el Frontend en **Netlify**. A lo largo de este manual, se explicarán las configuraciones necesarias y los pasos realizados para poner el sistema en producción, incluyendo la captura de pantallas como evidencia del procedimiento.

---

# URLs de la Aplicación Desplegada

*   **URL del Frontend (Netlify):** `[INSERTAR_URL_NETLIFY]`
*   **URL del Backend:** `[INSERTAR_URL_BACKEND]`

---

# Paso a Paso: Despliegue del Backend

Para el despliegue del Backend (API REST desarrollada en Node.js, Express y SQLite), el proyecto ha sido configurado para montarse en plataformas como Render, Heroku o Railway.

1.  **Preparación del Código:**
    *   Nos aseguramos de que el archivo `package.json` tenga definido el script de inicio: `"start": "node src/server.js"`.
    *   Verificamos que el puerto se asigne dinámicamente mediante la variable de entorno: `process.env.PORT || 3000` en el servidor.

2.  **Subida del Código a GitHub:**
    *   Inicializamos el repositorio Git en la carpeta de nuestro proyecto y hacemos commit de los cambios.
    *   Subimos el proyecto a un repositorio remoto en GitHub para poder enlazarlo a los servicios de despliegue.
    *   *(Captura de pantalla: Proyecto subido a la cuenta de GitHub)*
    > `[Insertar captura de pantalla de GitHub aquí]`

3.  **Configuración en la Plataforma Cloud (Ej. Render / Railway):**
    *   Nos dirigimos al dashboard de la plataforma y seleccionamos la opción de crear un nuevo "Web Service" o servicio web.
    *   Conectamos nuestra cuenta de GitHub y seleccionamos el repositorio correspondiente al Backend.
    *   Configuramos el Build Command (Ej. `npm install`) y el Start Command (`npm start`).
    *   *(Captura de pantalla: Formulario de configuración del proyecto en la plataforma Cloud)*
    > `[Insertar captura de pantalla de la plataforma Cloud aquí]`

4.  **Confirmación del Despliegue:**
    *   Esperamos a que finalice el proceso de compilación y despliegue del servidor.
    *   Accedemos a la URL pública proporcionada por la plataforma para asegurar que la API responde y levantó el servicio de BD de la manera adecuada sin errores.
    *   *(Captura de pantalla: Logs del servidor corriendo con éxito o el navegador mostrando la URL de respuesta de la API)*
    > `[Insertar captura de pantalla del Backend desplegado aquí]`

---

# Paso a Paso: Despliegue del Frontend

Para el Frontend (desarrollado con React y Vite), utilizaremos **Netlify**, garantizando una distribución de alto rendimiento.

1.  **Configuración de Variables de Entorno y Enrutamiento:**
    *   Configuramos Axios usando un archivo `api.js` centralizado que consume la variable de entorno `VITE_API_URL`. Esto nos permite direccionar las peticiones a la URL del Backend (que generamos en el paso anterior) sin tener la URL quemada en el código.
    *   Añadimos un archivo `public/_redirects` en nuestro código con el contenido `/* /index.html 200` para garantizar que el enrutamiento y las sub-páginas de React Router funcionen correctamente en servidores estáticos como los de Netlify tras recargar la página.

2.  **Conexión y Despliegue en Netlify:**
    *   Iniciamos sesión en Netlify y en la sección de Sitios (Sites) seleccionamos "Add new site" > "Import an existing project".
    *   Conectamos nuestro repositorio de GitHub y ubicamos los ajustes de la carpeta del frontend.
    *   Ajustamos las configuraciones de compilación:
        *   **Base directory:** `frontend` (ya que el código frontend no está en la raíz).
        *   **Build command:** `npm run build`
        *   **Publish directory:** `frontend/dist`
    *   En la sección de parámetros o "Environment variables", agregamos la clave `VITE_API_URL` y le asignamos la URL final del Backend (`[INSERTAR_URL_BACKEND]`).
    *   *(Captura de pantalla: Configuración de Build, Base Directory y variables de Entorno en Netlify)*
    > `[Insertar captura de pantalla de Netlify aquí]`

3.  **Validación del Despliegue Frontend:**
    *   Hacemos clic en "Deploy site" y esperamos la generación de archivos estáticos por parte de Vite en el servidor de Netlify.
    *   Al finalizar, accedemos a la URL final generada (ejemplo: `https://...netlify.app`). Revisamos que nuestro diseño, estilos y navegación operen en conjunto con el Backend de la nube.
    *   *(Captura de pantalla: Aplicación web funcionando completamente en producción consumiendo el backend)*
    > `[Insertar captura de pantalla de la app Frontend aquí]`

---

# Conclusión

El proceso de despliegue en la nube es un paso crítico en la gestión del ciclo de vida del software. Ha permitido transformar una aplicación local en una solución disponible globalmente a través de internet, unificando tecnologías modernas: un frontend estático en Netlify y un API escalable backend en la nube. Durante el proceso, aprendimos la vital importancia de emplear variables de entorno (como VITE_API_URL para no exponer puertos locales ciegamente) y la necesidad de rutinas específicas de la plataforma (como \`_redirects\`) para asegurar un correcto funcionamiento del enrutamiento. Todo esto concluye en un entorno preparado e idóneo para su futuro mantenimiento o actualización por otros desarrolladores o equipos.
