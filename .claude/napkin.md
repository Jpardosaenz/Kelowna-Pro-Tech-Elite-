# Napkin Runbook — Website KPEMM (kelownaprotechmobilemech.com)

## Curation Rules
- Re-prioritize on every read. Solo alto valor recurrente. Max 10 por categoría. Cada item: fecha + "Do instead".
- **NO duplicar aquí filosofía ni datos del negocio.** Viven en los punteros; el napkin solo guarda tareas/gotchas/directivas del SITIO.

## Punteros (la verdad vive aquí, no se copia)
- Reglas del sitio → su propio `AGENTS.md` (leer antes de tocar nada).
- Filosofía, datos canónicos (Joseph, zona, Red Seal, reviews, horario), voz, casos, ICP → `/Users/EPARDOSAENZ/Documents/KPEMM/Mobile Mechanic KPEMM /Marketing workers /02-Marca-y-Contexto/` (filosofia-negocio.md, competencia.md, casos-reales.md, icp.md).

## Directivas de trabajo
1. **[2026-06-16] Leer antes de actuar. No inventar dato (reviews/horario/zona) — alinear con la fuente de Marketing, no con lo viejo del sitio.**
2. **[2026-06-16] Diseño + copy juntos:** premium (frontend-design + emil) + copy que FILTRA al cazador de precio (filosofía). No solo estética.

## Stack
1. **[2026-06-16] Estático HTML/CSS/JS en Netlify. NO React/Next/shadcn.**
   Do instead: skills aplicables = `frontend-design` (oficial) + `emil-design-eng`. Ignorar skills de React/shadcn/Next.

## Directiva de auditoría
- **[2026-06-19] SIEMPRE auditar por ambiente (mobile vs desktop) en sitio mobile-first.**
  Error cometido: flaggear `sms:` en header-cta como bug sin verificar que ese elemento es EXCLUSIVO de desktop (≥1024px). Mobile usa `.mobile-cta-bar` separado con SMS+tel correcto. Do instead: antes de marcar cualquier CTA/protocolo como bug, confirmar qué breakpoint lo muestra.

## Tareas clasificadas por prioridad
### ESTRATÉGICO
1. **[2026-07-05] GBP sin dirección fija — afecta ranking por proximidad/relevancia local.**
   Jose confirma que el perfil de Google Business Profile no tiene address configurada. Para negocios 100% móviles (SAB), Google permite ocultar la dirección pero necesita tener una base interna para calcular proximidad — sin ninguna, el ranking local pierde señal de relevancia. GBP API está rota (403, API no habilitada en Cloud Console) así que no pude verificar el estado actual vía API. Do instead: (1) Jose revisa en GBP dashboard si hay address guardada aunque esté oculta; (2) si no hay ninguna, cargar una (aunque sea oculta al público) para recuperar la señal de proximidad; (3) una vez resuelto en GBP, alinear schema LocalBusiness del sitio (areaServed/geo) para que coincida.
2. **[2026-06-21] `/services/index.html` branch `fix/ppi-h1` — 7 commits, NO pushed aún.**
   Hero ATF: Red Seal + Chris Gaal quote, servicios en `<strong>`, dual CTA (tel+SMS), 3-step bar (squares grid, full-bleed desktop). Desktop eyebrow fix aplicado (era bug: todo concatenado en mono box). Mobile 3-step stacks en columna. Pendiente: push + PR.
   Do instead: no regressar CSS al `<style>` inline — split intencionado LCP. Al retomar: `git push origin fix/ppi-h1` → PR a main.

### IMPORTANTE
1. **[2026-06-19] Desktop header CTA usa `sms:` — no funciona en PC/Mac.**
   `index.html` línea 884: `.header-cta` solo visible en ≥1024px. `sms:` no tiene cliente nativo en desktop. Fix: cambiar a `href="tel:+12508595467"`. Mobile no afectado — usa `.mobile-cta-bar` (SMS primario + tel secundario, correcto).

## Bugs activos conocidos (no tocar sin branch)
1. **[2026-07-05] `estilos-header2.css` tiene `.hero-intro`/`.hero-support-text` duplicados — la segunda definición gana y rompe la jerarquía tipográfica.**
   Línea ~367 define `.hero-intro` como eyebrow chico (13px, uppercase). Línea ~2312 lo redefine a 1.15rem/700/uppercase — gana por orden de cascada (misma especificidad). Mismo problema en `.hero-support-text` (1.125rem en la primera definición vs 1.5rem en la segunda, línea ~2304). Afecta cualquier página que use estas clases con texto más largo que una headline corta — hoy hace que el hero no quepa en una pantalla mobile. Parché con override local en `services/pre-purchase/index.html`, no toqué el archivo compartido. Do instead: eliminar la definición duplicada (la de línea ~2304-2320) en una sesión dedicada, verificando el impacto en home y demás páginas antes de borrar.
2. **[2026-06-19] `estilos-header2.css` bloquea render en TODAS las subpáginas.**
   Homepage usa `media="print" onload="this.media='all'"` (correcto). Subpáginas lo cargan síncronamente (incorrecto). Do instead: aplicar patrón deferred de homepage en pre-purchase, our-story, field-reports, diagnostic, maintenance.
2. **[2026-06-19] llms.txt dice "45 reviews" — sitio dice 55.**
   Do instead: actualizar llms.txt a 55. También agregar `/services/pre-purchase/` y `/services/diagnostic/` a Key Pages en llms.txt.
3. **[2026-07-04] `.mobile-cta-bar` con offset `top` mal en `our-story.css` y `services/index.html`.**
   Ambos usan un solo breakpoint (`max-width:767px`, `top:68px`), pero el header real mide 92px en pantallas ≤767px (el patrón correcto, ya en `index.html`, usa dos breakpoints: 68px hasta 1023px, 92px override bajo 767px). Sin el override, la barra tapa contenido en celulares chicos. Ya arreglado en `services/pre-purchase/index.html`. Do instead: aplicar el mismo override de 92px en esas 2 páginas.

## Schema gotchas críticos
1. **[2026-06-19] Organization @id fragmentado sitewide.**
   Homepage=`#organization`, Our Story=`#business`, Field Reports=`#org`. Do instead: estandarizar TODOS a `#organization`. Sin esto Google ve 3 entidades distintas.
2. **[2026-06-19] `areaServed` diferente en cada página.**
   Homepage schema: {Kelowna, West Kelowna, Lake Country, East Kelowna, South Kelowna}. Our Story schema: agrega Vernon, Peachland, Penticton. Pre-purchase omite Vernon. Do instead: decidir lista canónica única y aplicar en todos los JSON-LD.
3. **[2026-06-19] `additionalType: "https://schema.org/MobileService"` no existe en Schema.org.**
   Do instead: eliminar esta propiedad de homepage LocalBusiness. También eliminar `serviceType: "Mobile Mechanic"` del bloque LocalBusiness (pertenece a Service nodes, no a LocalBusiness).
4. **[2026-06-19] Logo image path inconsistente entre páginas.**
   Homepage LocalBusiness: `/images/logo-kelowna-protech-eliteV1.webp`. Pre-purchase LocalBusiness: `/images/logo.webp`. Do instead: verificar cuál existe, usar solo ese en todas las páginas.
5. **[2026-06-19] Sitemap lastmod fechas stale (todas en 2026-04-13).**
   BMW Z3 tiene dateModified: 2026-06-17 en JSON-LD pero sitemap dice 2026-04-13. Do instead: actualizar sitemap en cada deploy.

## Pendientes confirmados — auditoría full 2026-06-19
1. **CRÍTICO: Faltan 3 páginas de servicio de alto volumen.**
   `/services/brakes/` ("brake repair Kelowna" — 0 presencia SERP, 8 competidores), `/services/no-start/`, `/services/battery-starter-alternator/`.
2. **CRÍTICO: Pre-purchase page no rankea para su query principal.**
   Competidores tienen checklists de 100+ puntos visibles en HTML. Protech tiene badge "75+ puntos" sin listar nada. Do instead: publicar checklist completo como lista HTML visible + expandir FAQ a 8-10 preguntas de 100+ palabras.
3. **ALTO: "Red Seal" nunca aparece en ninguna página HTML.**
   La credencial más reconocida en oficios canadienses no está en homepage ni service pages. Do instead: agregar "Red Seal" (o la credencial exacta de Joseph) al trust bar y al primer párrafo de la homepage.
4. **ALTO: Homepage no tiene CTA dentro del hero section.**
   `<section id="hero">` no tiene botón, tel: link ni form. Do instead: agregar `<a href="tel:+12508595467">` button directamente dentro del hero.
5. **ALTO: No existe footer NAP en homepage.**
   Pre-purchase tiene `<footer class="site-nap">` completo. Homepage no tiene nada. Do instead: copiar patrón site-nap de pre-purchase a homepage.
6. **ALTO: Field reports hub — 1 caso vs 100+ reclamados.**
   Ratio 1:100 es un gap de credibilidad crítico. Do instead: escribir 4-5 casos adicionales (frenos, no-start, falla eléctrica, flota, mantenimiento) usando casos-reales.md.
7. **MEDIO: Pre-purchase FAQ usa `<details>` colapsados con respuestas de 11 palabras.**
   AI crawlers pueden no expandir acordeones. Do instead: convertir a párrafos visibles, expandir cada respuesta a 90-130 palabras.
8. **MEDIO: BMW Z3 case study no tiene resolución.**
   Termina sin decir qué decidió el dueño. Do instead: agregar párrafo de cierre con desenlace.
9. **MEDIO: Homepage abre sin párrafo citable por AI.**
   Do instead: agregar párrafo de 60 palabras después del hero nombrando: negocio, técnico, ciudad, servicio, credencial.
10. **BAJO: Review count hardcodeado en 4+ archivos.**
    Riesgo de desync cuando suban las reseñas. Anotar para centralizar cuando escale.
