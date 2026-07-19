# Napkin Runbook — Website KPEMM (kelownaprotechmobilemech.com)
**Curado:** 2026-07-14 — cada item de abajo fue verificado contra el código/git real ese día, no copiado de sesiones anteriores.
**Corrección 2026-07-14 (misma sesión):** Reviews reales = **58** (verificado en `index.html`, `services/index.html` reviewCount/copy visible), confirmado por Jose. El "57" de auditoría E-E-A-T del 07-13 quedó desactualizado un día después — subió 1 reseña. Actualizar cualquier "57" restante en DOCS/ a 58.

## Curation Rules
- Re-prioritize on every read. Solo alto valor recurrente. Max 10 por categoría. Cada item: fecha + "Do instead".
- **NO duplicar aquí filosofía ni datos del negocio.** Viven en los punteros; el napkin solo guarda tareas/gotchas/directivas del SITIO.

## Punteros (la verdad vive aquí, no se copia)
- Reglas del sitio → su propio `AGENTS.md` (leer antes de tocar nada).
- Filosofía, datos canónicos (Joseph, zona, Red Seal, reviews, horario), voz, casos, ICP → `/Users/EPARDOSAENZ/Documents/KPEMM/Mobile Mechanic KPEMM /Marketing workers /02-Marca-y-Contexto/` (filosofia-negocio.md, competencia.md, casos-reales.md, icp.md, estilo-voz.md, reviews-gbp-v2.md).
- Auditoría E-E-A-T completa (55/100, base de la mayoría de pendientes de abajo) → `AUDITORIAS-LOCALES/2026-07-13_Auditoria-EEAT-Autoridad-Tematica.md`.

## Directivas de trabajo
1. **[2026-07-19] Una tarea usa una branch y un worktree exclusivos; nadie puede reutilizarlos para otra tarea.**
   Do instead: antes de editar, confirmar branch, status, commits y archivos; si existe trabajo de otra tarea, detenerse y crear una branch y un worktree limpios.
2. **[2026-06-16] Leer antes de actuar. No inventar dato (reviews/horario/zona) — alinear con la fuente de Marketing, no con lo viejo del sitio.**
3. **[2026-06-16] Diseño + copy juntos:** premium (frontend-design + emil) + copy que FILTRA al cazador de precio (filosofía). No solo estética.
4. **[2026-07-13] Rol > nombre en copy de conversión.** "Certified Mechanic", nunca "Joseph"/"Jose" en CTAs, botones, headlines. Regla canónica en `estilo-voz.md`. Aplicado sitewide (PR #66/#67) + en llms.txt (branch `feat/ppi-top-position`, sin mergear aún, 2026-07-14).

## Stack
1. **[2026-06-16] Estático HTML/CSS/JS en Netlify. NO React/Next/shadcn.**
   Do instead: skills aplicables = `frontend-design` (oficial) + `emil-design-eng`. Ignorar skills de React/shadcn/Next.
2. **[2026-07-13] CSS del mobile-cta-bar vive DUPLICADO por página** (inline `<style>` en 6 páginas + `our-story.css` + `pre-purchase.css`). Si se retoca el diseño del bar, repetir el cambio página por página, verificando cada una (no bulk). Ver Sync rules en `.claude/rules/shared-components.md`.

## Directiva de auditoría
1. **[2026-07-13] SIEMPRE auditar por ambiente (mobile vs desktop) en sitio mobile-first.**
   Do instead: antes de marcar cualquier CTA/protocolo como bug, confirmar qué breakpoint lo muestra.
2. **[2026-07-13] Verificar SIEMPRE contra el código/git real antes de repetir un dato de sesiones previas.**
   Do instead: `git branch --merged origin/main`, `git log`, `grep` directo — nunca dar un estado por cierto solo porque memoria/napkin lo dice.
3. **[2026-07-13] Verificar en vivo con scroll real, no solo screenshot estático, para bugs de offset/layout.**
   Do instead: `window.scrollTo` + `getBoundingClientRect()` antes de dar un fix visual por verificado.
4. **[2026-07-14] El capturador de screenshot de este entorno puede devolver pantalla en blanco al hacer scroll real (no es bug del sitio).**
   Do instead: si un screenshot sale en blanco después de scroll, confirmar con `getBoundingClientRect()`/`getComputedStyle()`/texto del DOM antes de reportarlo como bug visual real.

## System State — Hecho (no rehacer)
1. **[2026-07-14 ✓ mergeado a main] Perf PageSpeed mobile: avatares testimonios comprimidos + LCP/CLS** (PR #69). 3 avatares (vic-campbell, growit-trucking, matt-sankey) 2048x2048 PNG (~2.5-2.9MB c/u) → 96px webp (~1.5KB c/u), ahorro ~10.8MB. Jorge ya tenía webp desde antes, solo faltaba apuntar `index.html` a él. + `fetchpriority="high"` en preload hero + `width/height` explícitos en logo header (cierra CLS). Subió score PageSpeed mobile a ~90. Do instead: si se repite auditoría PSI, estos 3 puntos ya están resueltos — no reabrir.
2. **[2026-07-13 ✓ mergeado a main] Reviews 57 sincronizadas sitewide + llms.txt** (PR #65). Fuente de verdad: `reviews-gbp-v2.md`.
3. **[2026-07-13 ✓ mergeado a main] Formulario de diagnóstico "AI" eliminado del sitio completo** (PR #66). Resolvía 2 CRÍTICOS de la auditoría E-E-A-T (privacidad + "diagnóstico experto" engañoso).
4. **[2026-07-13 ✓ mergeado a main] "Certified Mechanical Engineer" → "Certified Mechanic" sitewide** (PR #66).
5. **[2026-07-14 ✓ mergeado a main] CTA bar sticky mobile: rediseño dorado + offset correcto en las 8 páginas** (PR #65 home, #67 el resto).
6. **[2026-07-14 ✓ confirmado por Jose] GBP/proximidad como SAB — resuelto. NO volver a flaggear** como pendiente de dirección/proximidad.
7. **[2026-07-14 — en branch, NO mergeado] `feat/ppi-top-position`, commit `0575290`, pusheado a origin, sin PR abierto todavía.**
   Contenido: title/H1/meta/OG/schema/breadcrumb de pre-purchase con "car" (antes invisible para esa query, pos 47); 4 links internos nuevos (home×2, diagnostic, field-reports) apuntando directo a `/services/pre-purchase/`; checklist con sub-puntos reales por categoría (100+ puntos ahora con contenido, no solo badge); caso Oscar/BMW reemplazado por review real y verificada de Michika Hatano (con foto recortada de `Visual-final-Michika-PPI-Review.png`, movida a justo después del hero); tarjeta riesgo/costo simplificada (se sacó el stat confuso "<1% & ~1 hr"); fix de hero/paneles full-bleed que cortaba la cabeza del mecánico a pantallas anchas; llms.txt reescrito (sin "2010 and newer", sin precios, sin nombres propios, PPI en Key Pages).
   Do instead: no dar este trabajo por "live" hasta confirmar merge a main (`git branch --merged origin/main`).

## Pendientes prioritarios — verificados 2026-07-14 (auditoría E-E-A-T 2026-07-13, 55/100 + auditoría full 2026-06-19)

### CRÍTICO — pendiente decisión/dato de Jose, no ejecutable solo
1. **Política de privacidad inexistente.** Sin política pública enlazada en ningún lado del sitio. Do instead: Jose define qué publicar antes de recolectar cualquier dato de nuevo.
2. **Credencial de Joseph sin verificación pública.** Dice "Certified Mechanic" pero sin apellido/institución/número/link. Do instead: Jose confirma la credencial exacta y si autoriza publicar el detalle.
3. **BMW Z3 case study: error técnico, aún sin corregir.** Dice que una "cracked vacuum line" causaba fuga de coolant — una línea de vacío no lleva refrigerante. Do instead: Jose pasa la orden de trabajo/fotos original para corregir el componente.
4. **3 casos PPI nuevos que Jose mencionó tener — aún no enviados.** Necesita: fotos + historia + desenlace por caso.
5. **Garantía PPI no definida.** CarInspect (competencia directa) la usa como diferenciador #1; KPEMM no tiene nada escrito. Necesita: duración + cobertura + exclusiones de Jose.

### ALTO — ejecutable sin depender de Jose
1. **`logo.webp` 404 real, referenciado en LocalBusiness de pre-purchase.** Verificado 2026-07-14: el archivo no existe en `/images/`. Homepage usa `logo-kelowna-protech-eliteV1.webp` (sí existe). Do instead: apuntar pre-purchase al mismo archivo que homepage.
2. **Organization `@id` fragmentado, confirmado en 3 páginas distintas:** homepage=`#organization`, our-story=`#business`, field-reports=`#org`. Do instead: estandarizar todos a `#organization`.
3. **`areaServed` distinto en las 3 páginas verificadas:** homepage (5 zonas, sin Vernon), pre-purchase (6, con Vernon), our-story (7, agrega Peachland/Penticton/Okanagan Valley). Do instead: decidir lista canónica única y aplicarla en los 3 JSON-LD.
4. **`additionalType: MobileService` sigue en homepage LocalBusiness** (`index.html:862`, no es un tipo válido de Schema.org). Do instead: eliminar la propiedad.
5. **`estilos-header2.css` bloquea render síncrono en 5 de 6 subpáginas** (diagnostic, maintenance, our-story, field-reports×2). Pre-purchase ya usa el patrón deferred (`media="print" onload`) desde el rebuild de julio. Do instead: replicar el mismo patrón deferred en las 5 restantes.
6. **No existe footer NAP en homepage** (`grep site-nap index.html` = 0 resultados). Pre-purchase sí lo tiene completo. Do instead: copiar el patrón `<footer class="site-nap">` a homepage.
7. **"Red Seal" no aparece en ninguna página HTML** (confirmado por grep, 2026-07-14) — si es la credencial real de Joseph. Do instead: agregar al trust bar una vez confirmada la credencial exacta (ver CRÍTICO #2).
8. **Casos sin trazabilidad suficiente: Gabe (diagnostic) y Sarah (maintenance/services) siguen sin fecha/fuente/autorización visible.** Oscar ya se sacó de pre-purchase (branch `feat/ppi-top-position`, sin mergear). Do instead: mismo tratamiento para Gabe y Sarah — usar solo casos autorizados, anonimizar donde falte permiso.
9. **Sitemap `lastmod` desactualizado — corrección del dato anterior:** ya NO son todas 2026-04-13. Verificado 2026-07-14: solo 2 fechas distintas en todo el sitemap (2026-04-20 y 2026-07-02), ninguna refleja los cambios reales más recientes. Do instead: actualizar lastmod real en cada deploy.
10. **CSS huérfano en `estilos-header2.css`: `.lead-feedback-toast` (4 ocurrencias, confirmado 2026-07-14).** El JS que lo usaba se eliminó con el formulario de diagnóstico (PR #66). Do instead: borrar en la próxima sesión de limpieza de CSS.

### MEDIO
1. **Faltan páginas de servicio de alto volumen** (`/services/brakes/`, `/services/no-start/`, `/services/battery-starter-alternator/`). **No crear sin casos reales propios** — la auditoría advierte que contenido sin evidencia empeora el problema de confianza.
2. **Field reports hub — 1 caso vs 100+ reclamados.** Ratio 1:100 es gap de credibilidad. Do instead: escribir 4-5 casos adicionales usando `casos-reales.md`.
3. **[mitigado 2026-07-14] Homepage hero section sin CTA propio** — la barra sticky dorada ya cubre la acción inmediata mobile. El `<section id="hero">` en sí sigue sin botón propio; evaluar si aún hace falta tras medir conversión del bar.
4. **BMW Z3 case study no tiene resolución** (aparte del error técnico de CRÍTICO #3) — termina sin decir qué decidió el dueño.
5. **Homepage abre sin párrafo citable por AI** — falta párrafo de 60 palabras post-hero nombrando negocio/técnico/ciudad/servicio/credencial.

## Pendiente — próxima sesión perf
1. **[2026-07-14] `hero-fold::before` es 0.046 de 0.05 CLS total (index.html).** Overlay oscuro `position:absolute;inset:0` sobre `.hero-fold` — causa no evidente aún, no investigado a fondo. Do instead: inspeccionar por qué un overlay full-inset shiftea layout antes de tocar (puede ser animación del `h1` o el propio ::before, confirmar con Performance/Layout Shift panel antes de asumir).
2. **[2026-07-14] Jose acepta 90/100 PageSpeed mobile como aceptable por ahora**, no bloquea más trabajo esperando 100. Do instead: no reabrir optimización de imágenes/LCP salvo que Jose lo pida explícito.

## Historial de PRs (trazabilidad)
- **#65** (2026-07-13, mergeado): reviews 57 sitewide + CTA bar home.
- **#66** (2026-07-13, mergeado): fix título "Mechanical Engineer" + eliminación formulario diagnóstico.
- **#67** (2026-07-14, mergeado): CTA bar rediseño + offset fix en las 8 páginas.
- **#69** (2026-07-14, mergeado): perf avatares + LCP/CLS homepage — PageSpeed mobile 55→90.
- **`feat/ppi-top-position`** (2026-07-14, commit `0575290`, pusheado, **sin PR abierto todavía**): ver System State #6 arriba.
