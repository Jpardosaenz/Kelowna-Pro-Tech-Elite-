# Handoff — 2026-08-05 (sesión cerrada, hub terminado)

## PROMPT PARA ARRANCAR LA PRÓXIMA SESIÓN (pegar tal cual)

```
Lee el handoff en /Users/EPARDOSAENZ/Documents/Proyect Web/Website KPEMM/worktree-field-reports-cluster/.claude/handoff.md
completo antes de responder nada. Antes de leer archivos sueltos, consultá
primero los grafos de graphify de la carpeta correspondiente (raíz KPEMM,
Marketing workers, sitio web) para orientarte gratis y rápido — pero si el
grafo tiene fecha anterior a los archivos que vas a tocar, no confíes en él,
verificá leyendo directo (regla del propio KPEMM/CLAUDE.md).

Trabajá con esta disciplina, que es la que dio buenos resultados y no se
debe perder:

1. Nunca asumas que un archivo "de referencia" está terminado o correcto
   porque otro documento lo dice — abrilo y leelo antes de copiarlo.
2. Un cambio chico a la vez. Mostralo en localhost, esperá un "sí" explícito
   de Jose antes de tocar el archivo — aunque la conversación ya haya
   convergido en un texto o diseño. Nunca digas "publicado" si solo está en
   localhost — aclará siempre que nada salió de tu máquina.
3. Antes de citar una regla de marca, copy o precio como vigente, buscá si
   hay una versión más nueva que la reemplace (jerarquía: dato vivo > archivo
   específico > reporte fechado reciente > histórico). No confíes en la
   primera mención que encuentres.
4. Si preguntás algo, preguntá una sola cosa a la vez — la más importante.
   No ráfagas de preguntas.
5. Para copy o decisiones de negocio, usá datos reales (trazabilidad GBP,
   GSC, casos-reales.md) en vez de inventar o suponer qué funciona. Si algo
   ya funcionó antes (ej. el H1 de la home), calcá esa estructura en vez de
   inventar una nueva desde cero.
6. Antes de mandar un link de localhost, confirmá que el servidor de
   preview sigue corriendo — no asumas que sigue arriba de un turno anterior.
7. Cada respuesta empieza con "🐤 José —", sin excepción, y en español
   simple, sin jerga sin traducir.
8. `main` nunca se toca directo; todo en la rama `feat/field-reports-cluster`
   ya creada. NO hacer merge hasta que las 6 páginas de caso existan (ver
   sección "Decisión: NO merge todavía" en este handoff) — push sí está
   autorizado, merge no.
9. Antes de llamar "exitosa" a una página o copiar su estructura, verificá
   sus CLICS reales en Search Console, no su posición en Google. Una página
   bien posicionada puede tener cero clics.
10. Antes de escribir una regla de copy/diseño en el canon, contrastala
    contra la página que de verdad convierte — no la escribas de memoria.

Después de leer el handoff, empezá directo por "Para arrancar la próxima
sesión" (al final del archivo) — no repitas trabajo ya cerrado.
```

## Qué estábamos haciendo

**Actualizado 2026-08-05: la página hub `/field-reports/` quedó TERMINADA.**

Se construyó, se auditó contra datos reales de Search Console, se corrigió, se
optimizó (peso 726 KB → 384 KB) y se subió a GitHub en 12 commits. Nada
publicado: `main` sin tocar.

Lo que sigue no es el hub, son las **6 páginas de caso individuales**, que
todavía no existen (las tarjetas apuntan a URLs 404 hasta que se construyan,
aceptado por Jose porque nada se publica hasta tener el cluster completo).
Detalle del siguiente paso al final de este documento.

## Decisiones tomadas

- **Cluster final: 6 casos** (no 7). Jose sacó Subaru Outback y metió Jeep
  Cherokee 1998 — criterio real: usar solo casos con foto/copy YA listos
  para adaptar, no casos con más "resultado medido" en abstracto. Los 6:
  GMC Savana 2016, Chrysler 300, Honda Pilot 2004, Jeep Cherokee 1998, VW
  Jetta TDI, Cadillac SRX 2013 (agregado esta sesión, con story recuperada
  de `Posts-GBP/01-Publicaciones-por-caso/2026-08-03_Cadillac-SRX-No-Power/`).
- **BMW Z3 sigue afuera del cluster** — sin resolver cuál de las dos
  historias registradas (avería/refrigerante vs. PPI de Oscar) es la real.
  No tocar hasta que Jose decida.
- **Grid de tarjetas: mobile-first, 3 columnas, foto+título nada más.**
  Tag/meta/"Read case →" solo aparecen en ≥768px. Bug encontrado y
  corregido: una regla vieja de `.case-card__link { display: inline-flex }`
  pisaba el `display:none` de mobile por orden de cascada — se resolvió con
  selectores `.cases-grid .case-card__tag` (más específicos), no reordenando
  el CSS.
- **Fotos de las tarjetas — regla real aplicada:** Jose pidió específicamente
  fotos con mecánico visible cuando existen. Se reemplazaron Cadillac, Jeep
  Cherokee (ambas ahora con mecánico) y Chrysler 300 (no existe ninguna foto
  con mecánico en esa carpeta — se dejó la mejor disponible: auto + camioneta
  de trabajo). Honda Pilot y VW Jetta quedaron con la foto original,
  confirmadas por Jose.
- **Regla de marca corregida — "the best" SÍ se puede decir.** Había dos
  reglas contradictorias: `01_BRAND_WEBSITE_PLAYBOOK_KPEMM.md` (vieja, decía
  "no digas que somos los mejores") vs. `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md`
  §2.5 "Posicionamiento superior explícito" (nueva, dice que SÍ se debe usar
  "the best"/"premium" de forma natural, conectado a servicio+lugar+audiencia
  +evidencia real). Jose confirmó que la vigente es la nueva. **Ya se editó
  la regla vieja** en `02-Marca-y-Contexto/01_BRAND_WEBSITE_PLAYBOOK_KPEMM.md`
  línea ~164 para que diga lo mismo que la nueva — no volver a citar la
  versión anterior.
- **Terminología: nunca usar "mobile" en copy nuevo — usar "on-site".** Jose
  fue explícito. Revisar cualquier copy nuevo por esta palabra antes de
  publicar (los usos de `.mobile-cta-bar`, clases CSS, y el nombre oficial
  del negocio "Kelowna Protech Elite **Mobile** Mechanic" NO se tocan — es
  el nombre propio de la empresa, no una elección de copy).
- **H1 final aprobado** (después de ~6 iteraciones, formato calcado del H1
  de la home que es la página con mejor desempeño real de GSC — no un
  ejemplo inventado):
  > "Your Car Fixed On-Site. Your Answers Documented Photo by Photo.
  > Kelowna Protech, the Best On-Site Mechanic in Kelowna."
- **Subtítulo final aprobado** (responde directo qué hay en la página, para
  AEO, con los 3 servicios reales en negrita + link interno cada uno):
  > "Below, you will find real repair cases from Kelowna Protech:
  > **specialized diagnostics and automotive electrical work**,
  > **pre-purchase inspections**, and **preventive maintenance**, each one
  > documented on-site with real photos and a clear outcome."
  (Los 3 términos en negrita enlazan a `/services/diagnostic/`,
  `/services/pre-purchase/`, `/services/maintenance/` respectivamente.)
- **Regla de copy sin rayas (—) confirmada y aplicada** en todo el hub —
  se reemplazaron por comas o dos puntos.
- **Nunca publicar sin aprobación explícita** — Jose corrigió que asumí
  demasiado rápido en un punto de la sesión; aclarado que nada se sube a
  Netlify/producción, todo vive en `localhost` (servidor de prueba local),
  y cada cambio de archivo espera un "sí" antes de tocarse.

## Pendientes

> **Jerarquía (2026-08-05):** Jose pidió reordenar esto por dependencia real,
> no por fecha en que se anotó. Cada fase abajo bloquea la siguiente — no
> saltar una fase sin terminar la anterior. Antes de "reseña de Google" (un
> detalle chico) va TODA la arquitectura de la página de caso, porque hoy
> no existe ni un solo ejemplo construido.

- ✅ **EL HUB (`/field-reports/`) ESTÁ TERMINADO Y SUBIDO A GITHUB.**
  12 commits en la rama `feat/field-reports-cluster`, ya con `push` hecho.
  **Sin merge a `main`, sin publicar.** El sitio en vivo no cambió.
  Los 7 commits del 2026-08-05, en orden:
  `194656c` napkin (deuda técnica del sitio) · `7670f7d` playbook (2 reglas
  corregidas + verificación externa) · `ce52289` goal · `4677e4b` fotos WebP ·
  `7bfe3c4` CSS a archivo propio · `7f0827a` título y descripción ·
  `bf5ab83` prueba social arriba + contenido AEO + FAQ + schema.

  El hub pasó los 9 puntos de la receta (playbook §2.6). Peso: 726 KB → 384 KB.

- ~~BMW Z3~~ — descartado por Jose (2026-08-05): no es parte de este
  proyecto, no se vuelve a mencionar.

- 📌 **Deuda técnica de TODO el sitio: está en `.claude/napkin.md`**, sección
  "Repository & Architecture Gotchas", puntos 4, 5 y 6 (CSS duplicado en 6
  páginas, fotos JPG sin optimizar, CSS pegado dentro del HTML). Va ahí y no
  acá porque el napkin es permanente y este handoff se reescribe. **No
  re-auditar: los números ya están medidos ahí.**

### FASE 1 — LA QUE SIGUE AHORA: arquitectura de la página de caso individual

**No existe todavía ni un solo ejemplo construido.** Sin esto, nada de lo de
abajo se puede hacer (no hay dónde poner reseñas, fotos ni preguntas).
Estructura fija según `cmd-field-report.md` (Marketing workers):

1. Título + URL slug por caso.
2. **5 párrafos fijos:** situación del cliente → proceso de diagnóstico →
   hallazgos adicionales → resolución y resultado → CTA del caso.
3. **Fotos con texto explicativo** — cada foto va después de un párrafo
   específico, con alt text (esto es lo que Jose pidió hoy: "más texto para
   explicar qué es lo que hay en estas imágenes").
4. **Sección de preguntas y respuestas (FAQ), 3–5 por caso** — esto es lo
   que Jose llamó "las preguntas que van en cada una de las imágenes".
5. Schema JSON-LD (`Article` + `FAQPage`).

**Plan de esta fase:** construir UN caso de muestra primero (candidato:
**GMC Savana**, porque ya tiene todos los datos confirmados — cliente,
diagnóstico, resultado, reseña real de Chris G.) para que Jose lo apruebe
como plantilla. Recién después se replica a los otros 5. `cmd-field-report.md`
exige presentar primero el plan (caso, dolor, promesa, transformación,
evidencia, keyword, estructura, CTA, fotos exactas) y esperar aprobación
antes de redactar — no escribir la página directo.

### FASE 2 — después de aprobar la plantilla: completar datos por caso

Con la plantilla ya aprobada, juntar lo que falta de cada caso (síntoma
exacto del cliente, hallazgos, solución, resultado cuantificado, fecha
aproximada) para los 5 restantes, usando `casos-reales.md` como base y
preguntándole a Jose lo que no esté ahí.

### FASE 3 — detalle menor, no bloqueante: reseña real de Google por caso

Según el propio `cmd-field-report.md`, el testimonio del cliente es
**"ideal", no obligatorio** para publicar. Se agrega si existe, se omite si
no — no debe frenar las Fases 1 y 2.

- Sin reseña anotada todavía en `casos-reales.md`: **Honda Pilot 2004, Jeep
  Cherokee 1998, VW Jetta TDI**.
- Ya confirmados: GMC Savana → Chris G. (5★), Chrysler 300 → TL C.

### FASE 4 — control de calidad antes de publicar cualquier caso

- E-E-A-T audit marcó como CRÍTICO el título "Certified Mechanical
  Engineer / 15+ Years" sin respaldo verificable; no repetir esa credencial
  en las páginas de caso nuevas sin autorización de Jose.
- Pasar `cmd-brand-review.md` antes de entregar cualquier borrador.

### Fuera de alcance por ahora (no iniciar sin que Jose lo pida)

- 🔵 aplicar la misma revisión "the best" + "sin mobile" + "sin rayas" al
  resto del sitio.
- 🔵 ESTRATÉGICO (tarea nueva pedida por Jose 2026-08-05, **NO empezar hasta
  terminar el cluster de field reports**): **`/services/` — subir el bloque de
  servicios justo debajo del hero.**
  - **Problema según Jose:** el cliente entra a buscar los servicios y quedan
    enterrados muy abajo; si no los encuentra, no los puede clickear.
  - **Evidencia medida** (localhost, ventana 1100×900, `services/index.html`):
    el bloque de servicios (`.svc-section`, línea ~1244) arranca a **2383px
    del tope = 2.6 pantallas de scroll**. El hero termina a los 904px.
  - **Orden actual de secciones:** hero (1094) → "How it works"
    `.hiw-section` (1139) → "Why us" `.why-section` (1201) → **servicios
    `.svc-section` (1244)** → testimonios → FAQ → CTA → related links → mapa.
  - **Lo que pide Jose:** que `.svc-section` pase a ser la primera sección
    después del hero, moviendo `.hiw-section` y `.why-section` más abajo.
  - **Antes de ejecutar:** confirmar con datos reales (GA4 scroll/eventos,
    GSC) y validar con Jose el orden nuevo exacto de las secciones que quedan
    debajo; no reordenar a ojo.

## Errores cometidos (no repetir)

- **Dije "publicaste" cuando no publiqué nada** — Jose se alarmó pensando
  que había subido algo a producción. Nunca pasó de `localhost`. Aclarar
  siempre, explícito, que un cambio en el worktree local no es una
  publicación — y no tocar el archivo de nuevo sin un "sí" nuevo y
  explícito, aunque la conversación ya haya convergido en un texto.
- **Corté el servidor de preview y le di el link a Jose igual** (dos veces
  seguidas) — antes de mandar un link de `localhost`, confirmar que el
  servidor sigue corriendo, no asumir que sigue arriba de un turno anterior.
- **Cité una regla de marca vieja como si fuera la vigente** ("no digas que
  somos los mejores") sin haber comparado contra el archivo más nuevo
  (`COPY-INTENT-TRUST-PLAYBOOK.md`). Jose la cuestionó y tenía razón — antes
  de citar una regla de marca como definitiva, buscar si hay una versión más
  nueva que la reemplace, no confiar en la primera que aparezca.
- **Path del launch.json:** el servidor real que usa el tool de preview vive
  en `/Users/EPARDOSAENZ/Documents/KPEMM/.claude/launch.json` (raíz de
  KPEMM), NO en el `.claude/launch.json` del worktree — confundir los dos
  hizo perder tiempo pensando que el servidor apuntaba mal.
- Ya documentado en handoff anterior, sigue vigente: no asumir que
  `services/pre-purchase/` y `services/diagnostic/` están al mismo nivel de
  terminado sin leer el código real primero.
- **[2026-08-05] Propuse copiar la página del BMW Z3 como modelo porque está
  en posición 3 de Google, sin mirar que tiene CERO clics.** Jose lo detectó
  y fijó la regla: **manda el clic, no la posición.** Antes de llamar
  "exitosa" a una página, mirar sus clics reales en Search Console.
- **[2026-08-05] Escribí una regla ("un solo CTA por página") sin verificarla
  contra los datos, y casi la aplico.** `pre-purchase`, que sí convierte,
  tiene 9 botones de llamar/textear. Antes de escribir una regla en el canon,
  contrastarla contra la página que ya funciona.
- **[2026-08-05] Afirmé que ciertas búsquedas entran por ciertas páginas sin
  poder comprobarlo.** Search Console entrega búsquedas y páginas por
  separado y las herramientas conectadas no permiten cruzarlas. Todo hallazgo
  se apoya en datos por página; una afirmación búsqueda→página es suposición.

## Estado de los archivos (2026-08-05, todo commiteado y en GitHub)

Nada pendiente sin guardar. `git status` limpio. 12 commits en la rama, todos
subidos con `push`. **`main` sin tocar, nada publicado en el sitio en vivo.**

Archivos nuevos creados hoy:
- `field-reports/field-reports.css` — el CSS que antes estaba dentro del HTML.
- `images/*.webp` (6) — fotos optimizadas. Los `.jpg` originales siguen ahí
  como respaldo, no se borraron.

**Fuera del sitio, en Marketing workers** (sin commit de git, esa carpeta no
es el repo del sitio):
- `02-Marca-y-Contexto/01_BRAND_WEBSITE_PLAYBOOK_KPEMM.md` — regla "the best"
  corregida para no contradecir `COPY-INTENT-TRUST-PLAYBOOK.md`.

## Decisión: NO merge todavía (2026-08-05, verificado)

Jose preguntó si hacer merge a `main` ahora que el hub está listo. Se verificó
en disco, no se asumió: las 6 URLs a las que apuntan las tarjetas del hub
**no existen** (`404` las 6):
`gmc-savana-kelowna-diagnostic`, `chrysler-300-kelowna-diagnostic`,
`honda-pilot-kelowna-diagnostic`, `jeep-cherokee-kelowna-diagnostic`,
`vw-jetta-tdi-kelowna-diagnostic`, `cadillac-srx-kelowna-diagnostic`.

**Regla fijada: no se mergea a `main` hasta que las 6 páginas de caso existan
y funcionen.** Publicar el hub solo, con 6 links rotos, sería peor que no
publicar: le rompe la experiencia justo al cliente con más intención de
llamar, y Google/las IA penalizan/desconfían de páginas con links muertos.
Volver a verificar los 6 archivos antes de considerar el merge, no confiar en
que "ya deben estar listos".

## Para arrancar la próxima sesión

**El hub está terminado. Lo que sigue es construir la PRIMERA página de caso
individual, como plantilla.**

1. Abrir el worktree en la rama `feat/field-reports-cluster` (ya tiene todo).
2. Leer `.claude/goal.md` (la vara de medida) y la sección 2.6 del playbook
   `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md` (la receta de 9 pasos, ya medida).
3. Caso candidato: **GMC Savana**, es el único con todos los datos confirmados
   (cliente, diagnóstico, resultado y reseña real de Chris G.).
4. **`cmd-field-report.md` exige presentar el plan y esperar aprobación de
   Jose ANTES de escribir una línea.** No saltarse ese paso.
5. Recién con esa página aprobada, replicar a los otros 5 casos.

Servidor de prueba: "Field Reports Preview (rama de prueba)" en el
`launch.json` de la **raíz de KPEMM**, no el del worktree. Confirmar que está
corriendo antes de mandarle un link a Jose.
