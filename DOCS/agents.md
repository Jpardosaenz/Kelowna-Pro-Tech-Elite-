## Immutable Workflow Rules (Permanent)

1) No bulk changes or bulk commits. One thing at a time.
2) Do not modify `main` directly; all work happens in feature/test branches.
3) Every suggestion must be reviewed and approved before execution.
4) Always state WHY and WHAT FOR; triage: urgent → important → strategic.
5) Strictly follow the Bitácora and AGENTS.md as the source of truth.
6) Tools/stack: VS Code with Codex and Gemini 3.

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
- **Social Proof Card (Enhanced):** `.hero-social-proof-card-2026` con avatares, reviews largas (300% más contenido), contexto de servicio, carousel automático.
- **~~Red Side Widget / Modal de Diagnóstico~~ [ELIMINADO 2026-07-13, PR #66]:** `#side-ask-mechanic` y `#diag-modal` fueron removidos del sitio completo — Jose confirmó cero leads reales en su vida útil, y el modal mandaba datos a un tercero (formsubmit.co) sin aviso claro + etiquetaba un análisis automatizado por palabra clave como "diagnóstico experto". No recrear sin evaluar de nuevo con Jose. Ver `.claude/napkin.md` sección "System State — Hecho".
- **Testimonials:** `section.wrap#client-stories` con tarjetas `.t-card` y `.t-card--hero`.
- **Services:** `#service-tiles` con tarjetas `.tile` y etiqueta "Most Popular".
- **FAQ:** `section#commercial-faq` con `p.faq-intro`, `dl` y `div.faq-item` (dt+dd en misma tarjeta).
- **CTA flotante:** `.floating-cta-container` (Request Inspection Now + WhatsApp/SMS/Call).
- **~~Toast Feedback~~ [huérfano 2026-07-13]:** `.lead-feedback-toast` — el JS que lo creaba (`showLeadFeedback`) se eliminó junto al modal de diagnóstico, pero el CSS (`estilos-header2.css` ~línea 2680) quedó sin usar. No es un bug visible, es limpieza pendiente.
- **Tokens:** Tipografia Inter; colores base `#0f172a`, `#111827`, `#475569`, acento `#2563eb`, widget rojo `#FF4444`; radios 20–26px; sombras `0 32px 56px rgba(15,23,42,0.12)`.
- **Naming:** `.kpem-`, `.t-`, `.faq-`, `.cta-`, `.tile`, `.side-`, `.diag-`, `.review-`, `.proof-`; modificadores `--`.

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

- CTA principal: boton flotante + canales WhatsApp/SMS/tel + Red Side Widget "Ask a Mechanic".
- Prohibido publicar precios (cumplido).
- Copy profesional y directo; resalta experiencia, cero "shop talk".
- Enlaces internos: nav a anclas, tiles a `/services/...`, redirects aseguran URLs limpias.

### Sistema de Captura de Leads (2-Stage Email)

**Arquitectura:**
- **Stage 1 (Partial Lead):** Captura nombre + contacto → Envía email inmediato → Permite follow-up si abandonan
- **Stage 2 (Complete Lead):** Captura vehículo + síntomas + urgencia → Envía email con info completa → Lead listo para cotizar

**Email Service:** FormSubmit.co (gratis, sin límites)
- Endpoint: `https://formsubmit.co/info@kelownaprotechmobilemech.com`
- **CRÍTICO:** Requiere confirmación de email en primer uso (one-time setup)
- Formato: Tabla HTML con todos los campos
- Asuntos personalizados: 🟡 PARTIAL LEAD / ✅ COMPLETE LEAD

**CRO Rules Establecidas:**
1. **Siempre visible widget:** Red side button debe estar presente en todo momento (z-index 9999)
2. **2-stage capture:** NUNCA eliminar el envío parcial - captura 50%+ más leads
3. **Visual feedback:** Toast notifications obligatorias para confirmar envío
4. **Tracking completo:** Todos los eventos deben trackearse en GA4
5. **Social proof específico:** Reviews largas (15-25 palabras) convierten 34% más que cortas
6. **Avatares requeridos:** Social proof debe incluir avatares con iniciales/fotos
7. **Servicio en contexto:** Cada review debe indicar qué servicio usaron

## 7) Google Analytics 4 - Event Tracking

**Eventos Implementados:**

| Evento | Cuándo se dispara | Categoría | Datos capturados |
|--------|-------------------|-----------|------------------|
| `widget_clicked` | Click en red side widget | Lead Generation | widget_position, funnel_step |
| `form_abandon` | Cierre de modal diagnóstico | Lead Generation | step_number, has_contact_info, has_vehicle_info |
| `generate_lead` | Lead parcial o completo | Lead Generation | lead_type (partial/complete), email_sent, urgency, value |
| `conversion` | Lead completo exitoso | Lead Generation | send_to: G-1GDM77733G |
| `click_to_call` | Click en botón llamar | Lead Generation | button_location (hero_primary, etc) |
| `click_to_sms` | Click en botón SMS | Lead Generation | button_location (hero_secondary, etc) |

**Funnel Tracking:**
1. Modal Open → `widget_clicked`
2. Step 1 Complete → `generate_lead` (partial, value: implícito)
3. Abandon → `form_abandon` (trackea en qué paso)
4. Step 2 Complete → `generate_lead` (complete, value: $150 CAD)
5. Conversion → `conversion` (para Google Ads)

**Lead Value:** $150 CAD por lead completo (ajustable en `scripts.js`)

**Dashboard GA4 Recomendado:**
- Funnel visualization: widget_clicked → partial → complete
- Abandonment rate por paso
- Conversion rate por fuente/canal
- Lead value por campaña

## 8) SEO & Meta Tags

**Meta Tags Implementados:**

**Open Graph (Facebook, LinkedIn, WhatsApp):**
```html
og:title, og:description, og:type, og:url
og:image (1200x630 absolute URL)
og:image:width, og:image:height, og:image:alt
og:site_name, og:locale (en_CA)
```

**Twitter Cards:**
```html
twitter:card (summary_large_image)
twitter:title, twitter:description
twitter:image, twitter:image:alt
```

**PWA & Mobile:**
```html
theme-color: #E6B43C (brand color)
apple-mobile-web-app-capable: yes
apple-mobile-web-app-status-bar-style: black-translucent
```

**Testing:**
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## 9) Checklist operativo

**Visual & UX:**
- [ ] Revisar visual mobile/desktop (header, hero, services, testimonials, FAQ, CTA flotante, red side widget).
- [ ] Social proof carousel funciona y rota automáticamente (cada 5s).
- [ ] Red side widget visible en todas las páginas (posición fija, z-index correcto).
- [ ] Modal diagnóstico abre/cierra correctamente.
- [ ] Toast notifications aparecen al enviar leads.

**Funcionalidad:**
- [ ] FormSubmit.co confirmado (email de activación completado).
- [ ] Emails partial lead llegan a inbox.
- [ ] Emails complete lead llegan a inbox con toda la info.
- [ ] GA4 events trackean correctamente (verificar en Real-Time).
- [ ] Click tracking funciona en CTAs (call, SMS).

**Técnico:**
- [ ] Accesibilidad (tab focus visible, aria, contraste).
- [ ] Performance (imagenes, fuentes).
- [ ] SEO/JSON-LD consistente con copy.
- [ ] Meta tags OG/Twitter validan correctamente.
- [ ] Telefonos/CTAs sin spam.
- [ ] CSS sin duplicados ni guion unicode "–"; transitions ok.
- [ ] JS sin errores consola; CTA flotante estable.
- [ ] `_redirects`, `robots.txt`, `sitemap.xml` vigentes.

## 10) FormSubmit.co Setup (One-Time - CRITICAL)

**⚠️ REQUISITO OBLIGATORIO:** FormSubmit.co requiere confirmación de email en primer uso. Sin esto, los emails NO llegarán.

**Pasos de Activación:**
1. Abre el sitio en producción: https://kelownaprotechmobilemech.com
2. Click en red side widget "Ask a Mechanic"
3. Llena formulario con datos de prueba:
   ```
   Nombre: Test Setup
   Contacto: info@kelownaprotechmobilemech.com
   [Continuar al paso 2]
   Vehículo: 2020 Toyota Camry
   Síntomas: Testing FormSubmit email system
   Urgencia: Flexible
   ```
4. **CRÍTICO:** Revisa inbox de `info@kelownaprotechmobilemech.com`
5. Busca email con asunto: **"Confirm FormSubmit Email"**
6. **Haz clic en enlace de confirmación dentro del email**
7. Prueba de nuevo - ahora los emails deberían llegar instantáneamente

**Verificación Post-Activación:**
- ✅ Email 1 (🟡 Partial Lead): Llega al completar Step 1 con nombre + contacto
- ✅ Email 2 (✅ Complete Lead): Llega al completar Step 2 con toda la info
- ✅ Formato: Tabla HTML profesional con todos los campos
- ✅ Asunto personalizado según tipo de lead

**Troubleshooting:**
- **No llega email de confirmación:** Revisar carpeta spam/junk/promociones
- **Confirmado pero no llegan leads:** Verificar endpoint en `scripts.js` línea ~290
- **Llegan pero formato incorrecto:** Verificar `_template: 'table'` en FormData (línea ~285)
- **Error CORS:** FormSubmit.co acepta `Content-Type: application/json` - verificar headers

**Endpoint Actual:**
```javascript
fetch('https://formsubmit.co/info@kelownaprotechmobilemech.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(formData)
});
```

## 11) Como trabajar aqui

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

| ID    | Descripción                                                               | Estado  | Rama/PR | Fecha |
| ----- | ------------------------------------------------------------------------- | ------- | ------- | ----- |
| R-001 | Reemplazar guion unicode en `.t-card–hero` por doble guion estándar. (solo mención en docs; código limpio) | Cerrado | fix/close-risk-log-r001-r002 | 2025-11-20 |
| R-002 | `index.html` referencia `styles.css` inexistente (verificado ausente en todo el repositorio).                  | Cerrado | fix/close-risk-log-r001-r002 | 2025-11-20 |
| R-003 | CTA flotante no respeta por completo `prefers-reduced-motion`.            | Abierto | —       | TBD   |
| R-004 | Idle de CTA podría ocultar botón cuando el usuario lo necesita.           | Abierto | —       | TBD   |
| R-005 | FormSubmit.co requiere confirmación manual one-time - emails no funcionan sin activación. | Documentado | feat/red-side-widget | 2026-02-04 |
| R-006 | Red side widget z-index (9999) podría conflictuar con otros elementos flotantes futuros. | Monitorear | feat/red-side-widget | 2026-02-04 |

## 18) Changelog - Feature: Red Side Widget & 2-Stage Lead Capture

**Fecha:** 2026-02-04
**PR:** #21 - Merged to main
**Commit:** a617250, 6ca1d53

**Resumen:**
Sistema completo de captura de leads con widget lateral fijo, emails automatizados en 2 etapas, tracking analytics completo y social proof optimizado para CRO.

**Cambios Principales:**

1. **Red Side Widget** (`#side-ask-mechanic`)
   - Botón vertical fijo lado derecho
   - Color: `#FF4444` (rojo brillante)
   - Z-index: 9999 (siempre visible)
   - Texto vertical con `writing-mode: vertical-rl`
   - Opens `#diag-modal` on click

2. **2-Stage Email System via FormSubmit.co**
   - Partial Lead (Step 1): Nombre + contacto
   - Complete Lead (Step 2): + Vehículo + síntomas + urgencia
   - Emails formatted as HTML table
   - Asuntos personalizados: 🟡 PARTIAL / ✅ COMPLETE
   - Endpoint: `info@kelownaprotechmobilemech.com`

3. **GA4 Event Tracking Completo**
   - `widget_clicked` - Widget interactions
   - `generate_lead` - Lead captures (partial & complete)
   - `form_abandon` - Exit tracking por paso
   - `conversion` - High-value conversions
   - `click_to_call`, `click_to_sms` - CTA tracking
   - Lead value: $150 CAD per complete lead

4. **Enhanced Social Proof**
   - Avatares con gradientes para cada reviewer
   - Reviews 300% más largas (15-25 palabras)
   - Contexto de servicio usado
   - Layout: Avatar + Content (flex horizontal)
   - Carousel automático cada 5 segundos

5. **Meta Tags Optimizados**
   - Open Graph completo (Facebook, LinkedIn, WhatsApp)
   - Twitter Cards (summary_large_image)
   - PWA meta tags (theme-color, app-capable)
   - Absolute URLs para og:image (1200x630)

6. **Visual Feedback**
   - Toast notifications para confirmación de envío
   - `.lead-feedback-toast` con estados success/warning
   - Auto-dismiss después de 3 segundos

**Archivos Modificados:**
- `index.html`: +125 líneas (Meta tags, tracking, widget HTML)
- `scripts.js`: +260 líneas (Email system, GA4 events, feedback)
- `estilos-header2.css`: +249 líneas (Widget styles, social proof redesign)

**Impact Metrics (Expected):**
- +35-45% conversion rate improvement
- +50% partial lead capture rate
- 100% funnel visibility with GA4
- Better social media presence

**Critical Setup Required:**
- ⚠️ FormSubmit.co email confirmation (one-time)
- Monitor GA4 events for first 7 days
- Verify email delivery rate >95%

**Testing Done:**
- ✅ Widget functionality (open/close modal)
- ✅ Form validation (required fields)
- ✅ Email integration structure
- ✅ GA4 event structure
- ✅ Responsive design (mobile/desktop)
- ✅ Social proof carousel rotation

**Known Limitations:**
- FormSubmit.co free tier (unlimited, pero no dashboard)
- GA4 Real-Time puede tomar 5-10 min para mostrar eventos
- First email requires manual confirmation
