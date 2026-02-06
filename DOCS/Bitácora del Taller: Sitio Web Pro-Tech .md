Bitácora del Taller: Sitio Web Pro-Tech ElitePropietario: 
José Edwin Pardo SaenzProyecto: 
Construcción del sitio web oficial para Kelowna Pro-Tech Elite Mobile Mechanic.
Filosofía: Código limpio, separado (HTML, CSS, JS) y construido con total autonomía.
1. Compromiso de Calidad y Durabilidad(Principios de ingeniería que rigen todo el proyecto, definidos el 27 de julio, 2025)
HTML5 Semántico: Usar etiquetas correctas para el trabajo correcto.CSS3 
Moderno: Usar Flexbox y Grid para layouts.JavaScript Moderno (ES6+):
 Usar las últimas especificaciones seguras del lenguaje.Compatibilidad: Diseñar para los 3 grandes motores de navegadores (Blink, WebKit, Gecko).Separación Estricta: HTML, CSS, y JS siempre vivirán en sus propios archivos.Código Limpio y Etiquetado: Todo el código será comentado y organizado para su fácil mantenimiento.No Atajos: Se seguirá siempre el procedimiento profesional, priorizando la calidad sobre la velocidad.2. Estrategia General y Fases del ProyectoFilosofía de Conversión: El sitio se construirá siguiendo los principios de marketing directo (Alex Hormozi, Neil Patel) para maximizar la conversión.Fase 1: Construcción del Vehículo Funcional (MVP)Objetivo: Lanzar un sitio web 100% funcional y profesional.Pasos:Finalizar Header (Menú funcional con JS) - COMPLETADOImplementar CTA Flotante (con opciones múltiples) - COMPLETADOEN PROGRESO: Construir todas las secciones de contenido estático (Our Promise/Hero, Client Stories, etc.).Construir Footer.Fase 2: Instalación de Mejoras de Alto RendimientoObjetivo: Mejorar el sitio con herramientas interactivas.Pasos:Desarrollar herramienta de diagnóstico por IA.Desarrollar checklist de inspección de pre-compra.3. Puesta en Producción (Despliegue)Dominio: kelownaprotechmobilemech.com (Propiedad del cliente en Bluehost).Hosting: Se ha tomado la decisión estratégica de usar Netlify para el alojamiento del sitio web debido a su superior rendimiento, seguridad y proceso de despliegue automatizado para sitios estáticos. Los servicios de email y dominio se mantienen en Bluehost.Estado: El sitio ha sido desplegado exitosamente en Netlify. Los servidores de nombres (nameservers) han sido actualizados en Bluehost. Actualmente, estamos en el período de propagación del DNS y a la espera de la provisión automática del certificado SSL/HTTPS por parte de Netlify.4. Componentes EnsambladosComponente 1: Encabezado Principal (Header)Estado: COMPLETADO Y AUDITADO.Código HTML (index.html):<header class="kpem-header-mobile" role="banner">
  <div class="contenedor-logo">
    <a href="#" aria-label="Go to homepage">
      <img src="LOGO.png" alt="Kelowna Pro-Tech Elite Logo" loading="eager" decoding="async"/>
    </a>
  </div>
  <button class="menu-trigger" aria-label="Open menu" aria-controls="mobile-navigation" aria-expanded="false">
    &#9776;
  </button>
  <nav id="mobile-navigation" class="mobile-menu">
    <button class="menu-close-button" aria-label="Close menu">&times;</button>
    <ul>
      <li><a href="#client-stories">Client Stories</a></li>
      <li><a href="#why-us">Why Us</a></li>
      <li><a href="#coverage">Coverage</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
Código CSS (estilos-v2.css):body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* ... (código completo del header y menú desplegable) ... */
Código JS (scripts.js):document.addEventListener('DOMContentLoaded', () => {
  // ... (lógica completa para abrir/cerrar menú) ...
});
Componente 2: Botón Flotante con Opciones (Floating CTA)Estado: COMPLETADO Y FUNCIONAL. (La lógica JS no se incluye aquí por brevedad, pero está en scripts.js).Código HTML (index.html):<div class="floating-cta-container">
  <div class="cta-options">
    <a href="https://wa.me/12505550199" class="cta-option" target="_blank">WhatsApp</a>
    <a href="sms:+12505550199" class="cta-option">SMS</a>
    <a href="tel:+12505550199" class="cta-option">Call Now</a>
  </div>
  <button id="main-cta-button" class="main-cta-button">Contact Us</button>
</div>
Componente 3: Sección Hero ("Our Promise")Estado: EN PROGRESO. La estructura HTML ha sido añadida. El siguiente paso es añadir los estilos CSS.Código HTML (index.html):<main>
  <section id="our-promise" class="hero-section">
    <div class="hero-content">
      <h1 class="hero-headline">Minimize Your Downtime. Maximize Your Profit.</h1>
      <p class="hero-subheadline">
        Expert on-site repair for heavy-duty equipment and commercial fleets in Kelowna. We get your machinery back to work, fast.
      </p>
      <a href="tel:+12505550199" class="hero-cta-button">Request On-Site Service</a>
    </div>
  </section>
</main>
