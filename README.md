# SUDECONS - Ingeniería & Construcción

Este es el repositorio oficial de la página web corporativa de **SUDECONS**, empresa colombiana dedicada a brindar soluciones integrales de ingeniería civil y construcción.

El proyecto está diseñado para ser moderno, rápido y profesional, destacando los servicios y la trayectoria de la empresa, así como la confianza de los grandes clientes con los que han trabajado.

## 🚀 Tecnologías

Este proyecto está construido con un stack nativo y ligero (Vanilla) para garantizar máxima velocidad de carga y facilidad de mantenimiento, sin depender de frameworks pesados:

- **HTML5:** Semántico y estructurado.
- **CSS3:** Variables CSS nativas, Flexbox, CSS Grid y animaciones personalizadas (`styles.css`).
- **JavaScript (ES6):** Interactividad, menú móvil, filtrado de portafolio y animaciones de scroll mediante `IntersectionObserver`.

## 📂 Estructura del Proyecto

El proyecto está organizado en múltiples páginas HTML para una navegación estructurada:

- `index.html`: **Página Principal (Home).** Contiene el Hero con video/imagen, resumen de Quiénes Somos, servicios principales y logos de clientes (ej. Coca-Cola, Bavaria, etc.).
- `nosotros.html`: **Quiénes Somos.** Misión, visión, valores y el compromiso de la empresa.
- `servicios.html`: **Nuestros Servicios.** Detalle de los 5 pilares de servicio (Proyectos de Concretos Reforzado, Hidráulicos, Mantenimientos Industriales, Estructurales, Pavimentos y Geotecnia).
- `proyectos.html`: **Portafolio.** Galería de proyectos filtrable por categoría.
- `contacto.html`: **Contacto.** Formulario de atención al cliente y datos de ubicación.

### Archivos de Recursos
- `styles.css`: Hoja de estilos centralizada. Maneja todo el diseño (colores, tipografía, layouts, responsividad).
- `main.js`: Lógica general del sitio. Controla el navbar transparente a sólido, el menú hamburguesa (móvil) y las animaciones de aparición al hacer scroll.
- `portfolio.js`: Script dedicado exclusivamente a la página de portafolio para filtrar los proyectos.
- `images/`: Carpeta con todos los assets visuales (fotos de servicios, logotipo y la subcarpeta `clientes/` con los logos extraídos en alta calidad).

## 🛠️ Cómo Editar o Mantener la Web (Para el Equipo)

1. **Editar Colores o Tipografía:** 
   Todo el sistema de diseño está centralizado en el archivo `styles.css` al inicio del documento en la sección `:root`. Puedes modificar los colores corporativos (`--c-brand`, `--c-dark`) allí y se reflejará en todo el sitio.

2. **Agregar un Nuevo Cliente:**
   Guarda el nuevo logo en `images/clientes/` y agrégalo en la sección `<div class="clients-logos">` dentro del archivo `index.html`, replicando la estructura de los logos existentes.

3. **Agregar Nuevos Proyectos (Portafolio):**
   Abre el archivo `proyectos.html`. Busca la sección de `<div class="portfolio-grid">` y agrega una nueva tarjeta `<div class="portfolio-item" data-category="nombre-categoria">`. El filtro en JavaScript (`portfolio.js`) lo detectará y clasificará automáticamente según el atributo `data-category`.

4. **Modificar el Logo Principal:**
   El logo transparente está ubicado en `images/logo.png`. Si necesitas actualizarlo, solo reemplaza este archivo manteniendo el mismo nombre, o asegúrate de cambiar la ruta en todos los archivos HTML (clase `.site-logo`).

## 🌐 Despliegue (Deploy)

Como es un sitio estático puro (HTML/CSS/JS), puede ser desplegado fácilmente y de manera gratuita en cualquier servicio de hosting estático:

- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Hostinger / cPanel** (Simplemente subiendo los archivos a la carpeta `public_html`)

---
**Diseñado y desarrollado por Valval.**
