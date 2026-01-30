# 🤖 MuniBot Chascomús

**MuniBot** es un Asistente Virtual Progresivo (PWA) desarrollado para la **Municipalidad de Chascomús**. Su objetivo es facilitar al vecino el acceso rápido a información sobre servicios, salud, trámites, seguridad y turismo desde su teléfono móvil, funcionando como una App nativa.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=white) ![PWA](https://img.shields.io/badge/PWA-Mobile-blueviolet?style=for-the-badge)

## 🚀 Características Principales

* **📱 PWA (Progressive Web App):** Se puede instalar en el celular (Android/iOS) y funciona offline.
* **🏥 Salud Pública:**
    * Geolocalización de **CAPS** (Centros de Atención Primaria) con enlaces directos a Google Maps.
    * Listado completo de **Farmacias** y botón a farmacias de turno.
    * Información de **Vacunación** y **Zoonosis** (Quirófano Móvil).
    * Turnos hospitalarios vía WhatsApp.
* **🛡️ Seguridad Integral:**
    * Acceso directo a **PAMUV** (Asistencia a la Víctima).
    * Botón de emergencia para **Defensa Civil (103)**.
    * Descarga de **Basapp** y Alertas.
* **🤝 Desarrollo Social:** Información sobre el programa CAM, entrega de semillas y Unidades Descentralizadas (UDA).
* **🏭 Producción:** Oficina de empleo, PUPAAs y Chascomús Emprende.
* **🚧 Atención al Vecino 147:** Formulario de reclamos, chat y guía de autogestión web.
* **📞 Contacto Directo:** Botones para llamar al conmutador o chatear con un operador humano.

## 📂 Estructura del Proyecto

El proyecto consta de 4 archivos esenciales:

1.  **`index.html`**: Contiene toda la estructura, el diseño (CSS) y la lógica del chatbot (Base de datos `MENUS` y `RES`).
2.  **`sw.js`**: Service Worker. Gestiona la caché para que la app funcione rápido y offline. **Clave para las actualizaciones.**
3.  **`manifest.json`**: Archivo de configuración que permite instalar la web como App (define nombre, iconos y colores).
4.  **`logo.png`**: El ícono de la aplicación (debe ser cuadrado, idealmente 512x512px).

## 🛠️ Instalación y Despliegue

Para poner en marcha el bot:

1.  Coloca los 4 archivos en una carpeta en tu servidor web (o hosting como GitHub Pages / Vercel).
2.  Asegúrate de que el archivo de imagen se llame exactamente `logo.png`.
3.  Accede desde el navegador.

## ⚙️ Mantenimiento y Actualizaciones (¡Importante!)

Cada vez que se modifique información en el `index.html` (ej: cambiar un teléfono o una dirección), se debe **forzar la actualización** en los celulares de los usuarios.

**Pasos para actualizar:**

1.  Editar el código en `index.html`.
2.  Abrir el archivo `sw.js`.
3.  Cambiar el número de versión en la primera línea:
    ```javascript
    // Antes
    const CACHE_NAME = 'muni-chascomus-v8';

    // Después (Subir un número)
    const CACHE_NAME = 'muni-chascomus-v9';
    ```
4.  Guardar ambos archivos. El celular del usuario detectará el cambio y descargará la nueva versión automáticamente.

## 👨‍💻 Créditos

Desarrollado por **Federico de Sistemas** para la **Municipalidad de Chascomús**.

---
*Última actualización: Enero 2024*
