# Handoff — 2026-08-15 (sesión larga: auditoría + llms.txt + rebuild de Diagnostic, INTERRUMPIDA a mitad de un ajuste)

## Estado de la rama

`feat/diagnostic-page-rebuild`, creada desde `main` (estaba up to date con
origin al crearla). **Sin commitear nada todavía.** Nada publicado, nada en
producción. Todo reversible con `git checkout -- <archivo>` si hace falta
volver atrás.

**Archivos modificados:**
- `services/diagnostic/index.html` — el único con cambios reales de diseño/
  contenido de página. Reescrito varias veces en la misma sesión (ver abajo).
- `llms.txt` — Tarea 1, **cerrada y aprobada**, sin pendientes.
- `.claude/settings.json`, `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md` — tareas de
  proceso, cerradas.
- 3 fotos nuevas en `images/` (Ford Ranger, ya optimizadas a WebP, 42-220KB).

**Sin commitear:** `.claude/goal-diagnostic-hero-bloque1.md` y
`.claude/goal-llms-txt-especializacion.md` (los goals de las 2 tareas).

`main` sigue en `13a3e96` (merge de `feat/field-reports-cluster`, ya en
producción).

## ⚠️ ESTADO EN EL QUE QUEDÓ CORTADA LA SESIÓN — leer primero

Jose interrumpió a mitad de un cambio con **"eso está muy mal"**, sin decir
qué específicamente. En ese momento se estaba corrigiendo el color de texto
de la sección `.diag-values` (de negro puro `rgb(0,0,0)` a `var(--ink)`,
el mismo tono oficial que usa el resto del sitio) — ese cambio **se aplicó**
pero **nunca se le mostró el resultado a Jose**, la sesión se cortó antes.

**Qué hacer al retomar:** no asumir que "muy mal" ya está resuelto. Mostrar
el estado actual en localhost (mobile primero, regla fija de Jose — ver
abajo) y preguntarle explícitamente qué es lo que seguía mal, con opciones
concretas si hace falta (¿el color?, ¿el fondo?, ¿la estructura general?).

## Cómo llegamos hasta acá — resumen del bloque "Hero de Diagnostic"

Se trabajó en loop con Jose, cambio chico → mostrar → corregir, muchas
iteraciones. Lo que quedó **definitivo y aprobado** hasta el corte:

1. **Sistema visual = el mismo de `pre-purchase`** (`.services-hero`),
   copiado y adaptado — no un diseño nuevo. Full-bleed foto de fondo en
   escritorio, imagen apilada en mobile con degradé de transición (navy
   se funde en el cielo de la foto, no corte duro).
2. **Fondo oscuro = Navy real de marca `#0F172A`**, no el negro genérico
   `#0d0d0b` que tenía copiado de pre-purchase sin pensar. Jose señaló que
   el negro liso "es lo más IA que existe" — corregido con el color real
   de marca (`Base de marca colores etc.md` en Marketing workers).
3. **Reseña de arriba (compacta, "4.9 · 65 Google Reviews"):** grande,
   siempre visible, primera cosa que se ve. Confirmado y aprobado.
4. **H1 corregido dos veces por errores de lógica de negocio, no de
   diseño:**
   - v1 "Certainty Before You Pay" → mal, el diagnóstico se paga por
     adelantado, no hay "certeza antes de pagar".
   - v2 "Certainty Before You Repair" → mejor (certeza antes de pagar la
     REPARACIÓN grande), pero Jose pidió algo más explícito.
   - **v3, la que quedó: "On-Site Car Diagnostic in Kelowna. Know What's
     Wrong, and What It Costs."** — la gente busca información concreta
     (qué le pasa + cuánto cuesta), no un concepto abstracto como
     "certeza". Esta es la vigente.
5. **"No Guessing. No Hidden Bill. No Surprises." — sacado del hero por
   completo.** Jose lo pidió explícito ("eso no importa ahí"), no se debe
   reintroducir sin que él lo pida de nuevo.
6. **Orden final del hero (mobile, de arriba a abajo):** reseña compacta →
   H1 → imagen → (fin del `<header>`). Inmediatamente después, **sin nada
   en el medio**: los 3 valores (ver punto 7). El párrafo largo
   ("Check engine light on...") va DESPUÉS de eso, no compite por la
   primera pantalla.
7. **La reseña de abajo (la tarjeta completa con nombre, cita, link) se
   sacó por completo.** Jose: "ya la pusiste arriba, no la repitas
   debajo". En su lugar van **3 valores fuertes** (ejemplo textual de
   Jose: honestidad en la puerta de tu casa, ahorro de dinero, certeza
   rápida sin facturas extra). Quedaron redactados así:
   - **See it yourself.** Your car doesn't need to disappear into a shop
     for you to know what's actually wrong with it.
   - **No empty promises.** You watch the real work happen, in your own
     driveway, not behind a counter.
   - **One number, upfront.** What it costs is what you pay. No added
     charges after the fact.
8. **Sin cajas, en ningún lado.** Regla repetida varias veces por Jose
   ("no hagas cajoncitos", "sigues insistiendo con los boxes"). Los 3
   valores usan el mismo patrón ya probado en el sitio (línea dorada al
   costado, `border-left: 3px solid var(--premium-gold)`, sin fondo, sin
   sombra, sin `border-radius`) — no una tarjeta nueva.
9. **Fondo blanco explícito después de la imagen** — Jose pidió esto
   último porque después de la imagen se estaba viendo oscuro. Se agregó
   `background: #fff` explícito a `.diag-values` y `.diag-followup-text`
   (antes dependían de herencia implícita, que en algunos entornos de
   revisión se pintaba oscura).
10. **Color de texto de los 3 valores** — corregido de `#334155` (inventado)
    a `var(--ink)` (`#111827`, el mismo que usa "What you get" debajo).
    **Este es el cambio que estaba recién aplicado, sin mostrar, cuando
    Jose cortó la sesión.**

## Reglas de proceso reforzadas hoy (no repetir los errores)

- **Mobile-first significa que el panel de vista por defecto es mobile,
  siempre.** Jose corrigió esto dos veces en la misma sesión porque quedé
  el panel en escritorio después de verificar algo y le di ese link.
  **Regla:** después de cualquier verificación en escritorio, volver a
  poner el panel en mobile antes de terminar el turno.
- **No repetir contenido ya usado más arriba en la misma página** (la
  reseña de Jennean apareció arriba Y abajo — error).
- **"No cajones" es una regla de fondo del proyecto ahora, no un capricho
  de una vez.** Antes de agregar cualquier bloque nuevo con fondo +
  bordes redondeados + sombra, preguntarse si existe ya el patrón "línea
  de acento, sin caja" en el sitio y usar ese en cambio.
- **Herramienta de captura de pantalla tuvo fallas today, diagnosticadas
  y descartadas como bug real:** un parpadeo oscuro al hacer scroll
  automático resultó ser el botón flotante compartido del sitio
  (`scripts.js` líneas 48-90, `.floating-cta-container`) agarrado a
  mitad de su transición de 0.3s por el scroll instantáneo por código
  (no gesto real). Confirmado leyendo el código fuente, no es algo para
  arreglar — un usuario real nunca lo ve congelado.

## Plan de prioridades (sigue vigente, sin cambios)

1. **Datos base sitewide** (teléfono, dirección, nombre, `@id` de schema) —
   tarea separada, rama separada todavía sin crear.
2. **Diagnostic** — esta rama, el hero está en su iteración final pero
   **sin aprobación de cierre** (ver el corte arriba). Faltan: FAQ, "qué
   incluye", schema técnico completo, limpieza de CSS.
3. Replicar reseña verificable a home, maintenance, services/index.
4. Limpieza general (imágenes huérfanas, noindex 404, etc.)

## Para arrancar la próxima sesión — en este orden exacto

1. **Leer este handoff completo antes de tocar nada.**
2. Abrir `services/diagnostic/index.html` en localhost, **panel en mobile
   por default**, mostrarle a Jose el estado actual tal cual quedó.
3. Preguntarle directo: "¿qué específicamente seguía mal cuando cortaste?"
   — no asumir que ya se resolvió solo porque el último cambio (color de
   texto) apunta en la dirección correcta.
4. Solo después de que Jose confirme que el hero está bien, avanzar al
   siguiente bloque del loop (FAQ / qué incluye), con el mismo patrón:
   goal chico, aprobación antes de cada cambio, mobile primero.
5. `llms.txt` — Tarea 1, verificado hoy con `grep`: "Engine and drivetrain
   repair" ya NO aparece en el archivo. Confirmado cerrado, sin pendientes.
