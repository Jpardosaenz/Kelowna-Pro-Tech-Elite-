# Handoff — 2026-08-04 18:30

## PROMPT PARA ARRANCAR LA PRÓXIMA SESIÓN (pegar tal cual)

```
Lee el handoff en /Users/EPARDOSAENZ/Documents/Proyect Web/Website KPEMM/worktree-field-reports-cluster/.claude/handoff.md
completo antes de responder nada. Antes de leer archivos sueltos, consultá
primero los grafos de graphify de la carpeta correspondiente (raíz KPEMM,
Marketing workers, sitio web) para orientarte gratis y rápido — solo abrí
archivos completos cuando el grafo no alcance.

Trabajá con esta disciplina, que es la que dio buenos resultados en la
sesión anterior y no se debe perder:

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
   ya creada, y no se hace push ni se publica sin aprobación explícita.

Después de leer el handoff, empezá directo por el primer punto de
"Pendientes" — no repitas trabajo ya cerrado ahí.
```

## Qué estábamos haciendo

Construyendo la página hub `/field-reports/index.html` del cluster de field
reports (KPEMM). El hero (badge + H1 + subtítulo) ya quedó cerrado y
aprobado por Jose tras varias rondas de ajuste. Sesión cortada justo después
de un ajuste de espaciado mobile, con el hero final sin commitear todavía.

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

- 🔴 URGENTE: **Commitear el hero final** (H1, subtítulo, ajuste de
  espaciado mobile) — quedó aprobado por Jose pero sin commit al cortarse
  la sesión. Diff vive en `field-reports/index.html`, sin commitear.
- 🔴 URGENTE: Jose debe confirmar la reseña real de cada uno de estos casos
  sin match exacto encontrado: Honda Pilot 2004, Jeep Cherokee 1998, VW
  Jetta TDI. (Subaru ya no aplica, se sacó del cluster.) GMC Savana → Chris
  Gaal y Chrysler 300 → TL C ya están confirmados.
- 🔴 URGENTE: BMW Z3 — sigue sin resolver cuál historia es la real (ver
  arriba). No forma parte de este cluster hasta que Jose decida.
- 🟡 IMPORTANTE: Falta construir el resto de la página hub — FAQ, mapa,
  NAP footer y CTA final ya existían del hub viejo (no revisados a fondo
  esta sesión, probablemente necesiten el mismo tratamiento "sin mobile,
  con the best, sin rayas" que se aplicó al hero).
- 🟡 IMPORTANTE: Falta el recibo de lectura + plan completo por
  `cmd-field-report.md` (título, URL slug, estructura, FAQ, fotos exactas,
  schema) para las **6 páginas de caso individuales** — cero HTML nuevo
  escrito para esas páginas todavía, solo la tarjeta en el hub que apunta
  a URLs que aún no existen (404 por ahora, aceptado por Jose porque nada
  se publica hasta tener el cluster completo).
- 🟡 IMPORTANTE: E-E-A-T audit marcó como CRÍTICO el título "Certified
  Mechanical Engineer / 15+ Years" sin respaldo verificable; no repetir esa
  credencial en las páginas de caso nuevas sin autorización de Jose.
- 🔵 ESTRATÉGICO: aplicar la misma revisión "the best" + "sin mobile" + "sin
  rayas" al resto del sitio en algún momento futuro (fuera de alcance de
  esta tarea, no iniciar sin que Jose lo pida).
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

## Archivos modificados (sin commitear al cortarse la sesión)

- `field-reports/index.html` — hero (H1, subtítulo, badge, espaciado mobile)
- `.claude/handoff.md` (este archivo)

**Ya commiteado en sesiones previas de esta misma rama** (`feat/field-reports-cluster`):
- `c13b6aa` — schema LocalBusiness + ItemList (5 casos)
- `f738cff` — 6 tarjetas del grid con fotos reales + CSS mobile-first

**Fuera del sitio, en Marketing workers:**
- `02-Marca-y-Contexto/01_BRAND_WEBSITE_PLAYBOOK_KPEMM.md` — regla "the best"
  corregida para no contradecir `COPY-INTENT-TRUST-PLAYBOOK.md` (sin commit
  de git ahí, esa carpeta no es el repo del sitio).

## Para arrancar la próxima sesión

Abrir el worktree `/Users/EPARDOSAENZ/Documents/Proyect Web/Website KPEMM/worktree-field-reports-cluster`
en la rama `feat/field-reports-cluster`, mostrarle a Jose el hero final en
`localhost` (arrancar el server "Field Reports Preview (rama de prueba)" del
`launch.json` de la raíz de KPEMM), y si aprueba, commitear antes de seguir
con el resto del hub (FAQ, mapa, CTA) o las 6 páginas individuales.
