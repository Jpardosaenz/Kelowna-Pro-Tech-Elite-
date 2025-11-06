# Agents — Contexto del Proyecto

## 1) Identidad y objetivos

- **Proyecto:** Sitio web Kelowna Protech Elite Mobile Mechanic
- **Repositorio (URL):** https://github.com/Jpardosaenz/Kelowna-Pro-Tech-Elite-
- **Propuesta:** Mecanico movil certificado en Kelowna; evita remolques, diagnostico claro el mismo dia.
- **Audience:** Conductores y flotas ligeras en Kelowna/Okanagan que quieren diagnostico, inspeccion pre compra o mantenimiento in situ.

## 2) Arquitectura y stack

- Sitio estatico multipagina (HTML5 + CSS + JS vanilla).
- CSS modular: `estilos-header2.css`, `service-tiles.css`, estilos puntuales en paginas de servicios.
- JS unico `scripts.js`.
- Responsive mobile-first; breakpoints 640px, 768px (tiles), 1024px; usa `prefers-reduced-motion`.
- Carpetas clave: `index.html`, `services/*`, `estilos-header2.css`, `service-tiles.css`, `scripts.js`, `_redirects`, `_headers`, `robots.txt`, `sitemap.xml`, `images/`, `docs/JSONLD_Workflow.md`.

## 3) Componentes y patrones UI

- **Header:** `header.kpem-header-mobile` sticky (logo + menu hamburguesa).
- **Hero:** `section#our-promise` con imagen WebP y mensaje anti-towing.
- **Testimonials:** `section.wrap#client-stories` con tarjetas `.t-card` y `.t-card--hero`.
- **Services:** `#service-tiles` con tarjetas `.tile` y etiqueta “Most Popular”.
- **FAQ:** `section#commercial-faq` con `p.faq-intro`, `dl` y `div.faq-item` (dt+dd en misma tarjeta).
- **CTA flotante:** `.floating-cta-container` (Request Inspection Now + WhatsApp/SMS/Call).
- **Tokens:** Tipografia Inter; colores base `#0f172a`, `#111827`, `#475569`, acento `#2563eb`; radios 20–26px; sombras `0 32px 56px rgba(15,23,42,0.12)`.
- **Naming:** `.kpem-`, `.t-`, `.faq-`, `.cta-`, `.tile`; modificadores `--`.

## 4) Estandares confirmados

- **HTML/A11y:** Uso semantico (`header`, `nav`, `section`, `dl`), `aria-label` en CTA y nav, `aria-labelledby`, `alt` descriptivos.
- **CSS:** Mobile-first, transiciones cortas, `prefers-reduced-motion`; sin inline salvo estilos locales en services.
- **JS:** Menu movil, CTA flotante (scroll >400px, fade por inactividad, focus/hover restablece).
- **Performance:** Imagenes WebP/lazy, preconnect a Google Fonts, sin libs pesadas.
- **SEO:** JSON-LD `AutoRepair` + `FAQPage` en home; paginas de servicios con `Service`, `FAQPage`, `BreadcrumbList`. Canonical/OG/description presentes.

## 5) Build, deploy y automatizacion

- Hosting: Netlify (`_redirects`, `_headers`).
- Flujo: branch feature (ej. `feat/faq-layout-preview`) → PR → merge.
- Commits sugeridos tipo Conventional (`feat: ...`) [TODO revisar historial].
- Build manual (no package.json); servir con Live Server o `python3 -m http.server 5500`.

## 6) Politicas de contenido y CRO

- CTA principal: boton flotante + canales WhatsApp/SMS/tel.
- Prohibido publicar precios (cumplido).
- Copy profesional y directo; resalta experiencia, cero “shop talk”.
- Enlaces internos: nav a anclas, tiles a `/services/...`, redirects aseguran URLs limpias.

## 7) Checklist operativo

- [ ] Revisar visual mobile/desktop (header, hero, services, testimonials, FAQ, CTA flotante).
- [ ] Accesibilidad (tab focus visible, aria, contraste).
- [ ] Performance (imagenes, fuentes).
- [ ] SEO/JSON-LD consistente con copy.
- [ ] Telefonos/CTAs sin spam.
- [ ] CSS sin duplicados ni guion unicode “–”; transitions ok.
- [ ] JS sin errores consola; CTA flotante estable.
- [ ] `_redirects`, `robots.txt`, `sitemap.xml` vigentes.

## 8) Como trabajar aqui

1. Crear branch desde `main`/feature.
2. Definir cambio atomico, localizar (rg/VS Code).
3. Editar solo archivo necesario.
4. Probar localmente (Live Server/http.server) + checklist.
5. `git status`, `git add`, commit claro, push, PR.
6. Verificar produccion tras merge.

## 9) Prompts utiles

- FAQ HTML unificado: `Envuelve cada par <dt> + <dd> en <div class="faq-item"> ...`
- FAQ CSS tarjeta: `Actualiza .faq-item/.faq-wrap para fondo blanco, sombra 0 32px 56px rgba(15,23,42,0.12), border-radius 26px, padding 32px+, hover como .t-card.`
- Guion doble: `Reemplaza guion largo en .t-card–hero por .t-card--hero respetando media queries.`
- JSON-LD sync: `Ajusta FAQPage para reflejar preguntas visibles.`
- Commit seguro: `Revisa diff, usa Conventional Commit, empuja, valida en Netlify.`

## 10) Pendientes y riesgos

- **TODO:** Reemplazar guion unicode en media queries `.t-card–hero` (estilos-header2.css ~913, ~926).
- **Riesgos:** `index.html` carga `styles.css` inexistente; CTA flotante no respeta `prefers-reduced-motion` totalmente; guiones largos en comentarios/alt; verificar que idle CTA no oculte boton cuando se necesita.

## 11) Quick Start — 10 minutos

1. `git clone https://github.com/Jpardosaenz/Kelowna-Pro-Tech-Elite-.git && cd Kelowna-Pro-Tech-Elite-`
2. `python3 -m http.server 5500` o Live Server para vista local; confirmar que `http://localhost:5500/index.html` carga sin errores.
3. `git checkout -b feat/<slug-corto>` (o `fix/` si corresponde); sincroniza `main` antes de ramificar (`git pull origin main`).
4. Corre la checklist operativa (sección 7) en mobile/desktop; anota hallazgos en la rama.
5. Tras los cambios: `git status` → `git add` archivos tocados → `git commit -m "feat: <resumen>"`; haz push y abre PR con checklist marcada.

## 12) Fuente de verdad de ramas y PR

- Rama base: siempre `main` actualizado. Usa `git fetch --all` + `git pull origin main` antes de crear una feature.
- Naming obligatorio: `feat/<feature>`, `fix/<bug>`, `chore/<mantenimiento>`. Usa kebab-case corto y descriptivo.
- Antes de abrir PR: adjunta capturas antes/después, resultados de validaciones (SEO/Schema, a11y, performance) y lista de cambios resumida.
- PR checklist mínima: checklist operativa completa (sección 7), verificación en mobile/desktop, linterna de riesgos revisada, enlaces internos probados.
- No merges directos a `main`. Usa squash merge salvo que se indique lo contrario.

## 13) Rollback y contingencias

1. **Netlify:** si el deploy actual rompe producción, entra en Deploys → selecciona el último deploy estable → `Rollback deploy`.
2. **Repositorio:** identifica el commit/merge culpable (`git log --oneline`). Ejecuta `git revert <commit>` o revierte el merge en una rama `fix/rollback-<fecha>`.
3. Abre PR con el revert, marca la checklist y especifica el incidente en la descripción.
4. Una vez mergeado, confirma que Netlify reconstruye y valida el sitio (Smoke test + Rich Results + checklist a11y).

## 14) Do / Don't de marca y contenido

**Do**
- Usar la marca escrita: `Kelowna Protech Elite Mobile Mechanic` o `Kelowna Protech Elite` (sin guion ni siglas).
- Mantener tono profesional y directo, resaltando experiencia y beneficio inmediato.
- Sincronizar siempre el contenido visible con JSON-LD/metadata antes de publicar.

**Don't**
- No publicar precios ni tarifas estimadas.
- No introducir jerga técnica compleja o “shop talk” sin explicación.
- No lanzar CTAs nuevos sin confirmar canales permitidos (WhatsApp, SMS, llamada, formulario).

## 15) Validación SEO/Schema paso a paso

1. Seguir `docs/JSONLD_Workflow.md` para generar/actualizar bloques estructurados.
2. Comparar preguntas/respuestas del FAQ visible vs JSON-LD (`FAQPage`). Deben coincidir al carácter; reportar diferencias.
3. Ejecutar Google Rich Results Test con URL local (usando ngrok) o deploy previo; guardar captura de resultados.
4. Revisar metadatos esenciales: `title`, `meta description`, `og:*`, `canonical`, `robots`, `sitemap`.
5. Documentar en la PR cualquier excepción (ej. pregunta omitida) y justificación.

## 16) Accesibilidad y motion QA

- Navegar todo el sitio con teclado (Tab/Shift+Tab). Confirmar foco visible en header, CTA flotante y cards.
- Validar contraste con herramienta rápida (Lighthouse, Stark, devtools). Mínimo AA en texto/acciones primarias.
- Revisar `prefers-reduced-motion`: en macOS (System Settings → Accessibility → Display → Reduce motion) o Windows (Settings → Accessibility → Motion). Con la preferencia activada, verificar que animaciones/CTA flotante reduzcan transición y respeten visibilidad.
- Correr auditoría Lighthouse Accessibility en desktop y mobile; registrar hallazgos en la PR.

## 17) Risk log (vivo)

| ID   | Descripción                                                                 | Estado  | Rama/PR | Fecha |
|------|------------------------------------------------------------------------------|---------|---------|-------|
| R-001 | Reemplazar guion unicode en `.t-card–hero` por doble guion estándar.        | Abierto | —       | TBD   |
| R-002 | `index.html` referencia `styles.css` inexistente (riesgo de consola 404).   | Abierto | —       | TBD   |
| R-003 | CTA flotante no respeta por completo `prefers-reduced-motion`.              | Abierto | —       | TBD   |
| R-004 | Idle de CTA podría ocultar botón cuando el usuario lo necesita.            | Abierto | —       | TBD   |
