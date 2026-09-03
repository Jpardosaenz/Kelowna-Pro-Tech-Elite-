# Handoff — 2026-09-02 (plomería de enlaces internos + ítem de menú)

> El handoff anterior era del 2026-08-13 y quedó superado: después de esa fecha
> se publicó la reconstrucción de `services/diagnostic/` (16-18 ago) y se retiró
> el BMW Z3. Lo que seguía abierto se traslada más abajo, en "Pendientes
> heredados". El texto viejo completo sigue en el historial de git.

---

## Estado de la rama

```
Lee /Users/EPARDOSAENZ/Documents/KPEMM/Proyect Web/Website KPEMM/.claude/handoff.md
y .claude/napkin.md completos antes de responder nada.

Disciplina obligatoria, en este orden:

1. ANTES DE MEDIR CUALQUIER COSA: `git fetch origin` y comparar con el sitio
   en vivo (`curl` la URL publicada). El repo es lo que queremos; el sitio
   publicado es lo que Google ve. En la sesión del 2-sep esto se saltó y
   produjo cuatro conclusiones equivocadas seguidas.
2. Nunca crear una rama desde `main` local sin hacer `git fetch` antes.
3. Antes de opinar sobre una página, abrirla. No leer el código y suponer.
4. Si un dato no se verificó, decir "no lo verifiqué" — nunca presentarlo
   como hecho.
5. Un cambio a la vez, mostrarlo en localhost, esperar un "sí" explícito de
   Jose. Nunca decir "publicado" si solo está en localhost.
6. Una sola pregunta por vez.
7. Cada respuesta empieza con "🐤 José —", en español simple.
8. `main` no se toca directo. Push a la rama SÍ está autorizado.
```

---

## Estado al cierre

**Rama:** `feat/plomeria-enlaces-ppi` — 9 commits, **subida a GitHub**, no fusionada.
**Sitio en vivo:** sin tocar.
**Marca de seguridad:** tag `backup-antes-de-separar-06e67a3` (borrar al publicar).

### Commits

| | |
|---|---|
| `b6e4f59` | goal del trabajo |
| `3fe1039` | `our-story/` — párrafo con enlace + clase `.capabilities__note` |
| `5a8a685` | `services/maintenance/` — párrafo puente |
| `1c50a3c` | caso GMC — la inspección entra en "Related Services" |
| `6efa94b` | `services/` — las 2 preguntas de inspección redirigen a la página dedicada |
| `4c0e24f` | **menú** — "Pre-Purchase Inspection" en las 8 páginas (aislado a propósito, para poder revertirlo solo) |
| `6c4787f` | `services/diagnostic/` — enlace al caso GMC ⚠️ **hecho sobre una versión vieja, ver abajo** |
| `6669a09` | `services/` — los 7 textos de enlace de las tarjetas |
| `ae87769` | `MEDICIONES/` — la foto del antes |

---

## Estado real de las ramas (2026-09-02, cierre)

**Son dos ramas, pero la segunda contiene a la primera.** Para publicar todo
alcanza con fusionar `feat/servicios-selector-arriba`. La otra queda como
punto de reversión por si hay que sacar solo la parte de servicios.

| Rama | Qué agrega |
|---|---|
| `feat/plomeria-enlaces-ppi` | 12 commits: enlaces internos, ítem de menú, fusión con `main`, MEDICIONES, napkin y handoff |
| `feat/servicios-selector-arriba` | los de arriba **+ 3 commits**: selector de servicios arriba, reseñas junto al selector, reseñas de mecánica con fotos reales |

Las dos subidas y al día con GitHub. El sitio en vivo sin tocar.

### El bloqueante del `main` desactualizado: RESUELTO

La rama se había creado desde una copia local tres semanas atrasada. Se
fusionó `origin/main`, se conservó entera la reconstrucción de
`services/diagnostic/` de Jose, y se rehicieron los dos cambios sobre la
versión buena. Verificado: los 7 títulos de `services/` siguen ahí, ningún
bloque perdido.

**De paso se arregló una fuga real:** la reconstrucción del 2026-08-18 había
dejado `services/diagnostic/` con un solo enlace interno del cuerpo ("Home") y
había borrado el único enlace hacia `/services/pre-purchase/`. Se le devolvió
una sección "Related Services". Salidas del cuerpo: 1 → 4.

### Auditoría de las dos ramas (2026-09-02)

| | |
|---|---|
| Credenciales, secretos, código peligroso | ninguno |
| Líneas realmente nuevas / borradas | 66 / 28 — todas las borradas son reemplazos |
| Imágenes con medidas, `loading`, `alt` | 100% |
| Estilos dentro del HTML en lo nuevo | 0 |
| Jerarquía de títulos | sin saltos |
| Huérfanas · rotos · sitemap · canonical · JSON-LD | limpio |

**Un hallazgo menor, aceptado por Jose:** la sección de reseñas quedó anidada
dentro de la de servicios; las dos tienen `h2`, así que las tarjetas de
servicio quedan después del `h2` de reseñas en el esquema. HTML válido y se ve
bien. Se dejó así a propósito: tener las reseñas en la pantalla 2 vale más que
la prolijidad del esquema.

## Qué se hizo y por qué

**Evidencia (GSC, 6 meses):** 94 de cada 100 clics del sitio son de la portada.
`/services/pre-purchase/` estaba en posición 17,7 con 16 clics en medio año.

**Causa, medida — no era el contenido:** la página de inspección tenía el doble
de texto que la portada sobre el tema y perdía igual. Era la página con menos
enlaces internos del sitio (7 desde 4 páginas), tres páginas competían por el
mismo tema, y la portada contestaba la pregunta de la inspección en su bloque
de preguntas.

**Hallazgo mayor:** en la búsqueda real desde Kelowna, Google muestra la
**portada** en 2º lugar para "mobile pre purchase inspection kelowna" — no la
página de inspección. CarInspect queda 3º, debajo nuestro. El 1º es Lakeshore
Automotive, un taller local de Kelowna que todavía no analizamos.

**Decisión de arquitectura de Jose:** no repartir la autoridad parejo. Concentrar
en las dos páginas que venden (inspección y diagnóstico). Sí igualar la
**calidad del texto de los enlaces** en todo el sitio.

---

## Decisiones de Jose en esta sesión

| Decisión | Detalle |
|---|---|
| **No se publica precio** | KPEMM compite por valor, no es un commodity. El precio real es $250 pero **no va al sitio** |
| **Reseñas: 68** | 68 totales, 65 positivas, 3 negativas. Cerrado, no se vuelve a preguntar |
| **La garantía de CarInspect NO es falsa** | Existe vía KM+. La estrategia es exponer sus condiciones reales, nunca decir que es mentira |
| **Nada de "lemon"** | CarInspect ya usa esa frase, y "Lemon Squad" es una empresa real de EE.UU. |
| **Ítem de menú directo** | "Pre-Purchase Inspection", una sola línea, sin nombre inventado |
| **La portada no se toca** | Trae el 94% de los clics. Única excepción aceptada: la línea del menú |

---

## Pendientes

### De esta sesión

1. **🔴 MODO OSCURO — lo más urgente del sitio.** Ninguna de las 8 páginas
   declara su color de fondo (`background` en `body`, o `color-scheme`). En un
   celular con modo oscuro activado el navegador pinta el lienzo negro y el
   texto oscuro desaparece. Medido solo en `/services/`: **46 textos con
   contraste 1,18** (el mínimo legible es 4,5), incluidos los títulos
   principales y los letreros de las 4 fotos del selector. Afecta a todo
   visitante con modo oscuro, y no lo causó ningún cambio de esta sesión — es
   de siempre. Se arregla declarando el fondo; es de los arreglos más baratos
   que hay. Rama propia.
2. **🟠 Números de reseñas — `services/index.html` se contradice a sí misma.**
   El número real y cerrado por Jose es **68 reseñas · 4,8★** (confirmado en el
   panel de Google el 2026-09-01 y en
   `Marketing workers/02-Marca-y-Contexto/reviews-gbp-v2.md`, que es la fuente
   de verdad; la API de GBP sigue bloqueada).
   Al reemplazar las reseñas se cambió el subtítulo de esa sección a `4.8 · 68`,
   pero en la **misma página** quedaron 4 lugares diciendo `4.9 · 65`:
   línea 1031-1032 (JSON-LD `aggregateRating`), 1100 (encabezado), 1400
   (`why-section__sub`), 1503 (bloque de confianza).
   **Una página que se desmiente a sí misma es peor que cualquiera de los dos
   números**, y el JSON-LD que no coincide con el perfil de Google puede costar
   la estrella en los resultados.
   **Estado en el resto del sitio:** siguen en `4.9` / `65` en portada,
   historia, casos, caso GMC, diagnóstico e inspección.
   **Qué hacer:** rama propia y corregir las 7 páginas de una vez a `4.8` / `68`,
   texto visible y JSON-LD. Toca la portada, así que necesita el OK explícito de
   Jose. Mientras no se haga, la rama `feat/servicios-selector-arriba` publica
   una página inconsistente consigo misma.

3. **`50 five-star`** en `.claude/skills/protech-gbp/references/business-context.md:39`
   — marcado por el guardián el 2-sep, sin arreglar.
4. **Fase siguiente aprobada en concepto:** el racimo de páginas para autoridad
   temática. CarInspect tiene 7 tipos de página sobre el tema; KPEMM tiene 1.
   Candidatas: casos reales de inspección (el informe del Ford F-150 del 6-jun
   ya existe), qué cuesta saltarse una inspección, concesionaria vs particular,
   eléctricos e híbridos, West Kelowna.
5. **Lakeshore Automotive** — el que está 1º. Nunca lo miramos.
6. **Al publicar:** anotar la fecha en `MEDICIONES/`, borrar el tag de respaldo,
   y volver a medir a los 21 días.

7. **Idea de Jose, sin decidir: versiones en francés y español.** Técnicamente
   posible (carpetas por idioma + `hreflang`). No se construye nada todavía por
   tres razones dadas y aceptadas: multiplica por tres el mantenimiento de cada
   cambio; no sabemos si hay demanda; y choca con la estrategia de autoridad
   temática — 16 páginas traducidas ensanchan el sitio en vez de profundizarlo,
   cuando hoy hay **una sola** página sobre inspecciones.
   **Qué hacer antes de decidir:** medir. Buscar en Search Console consultas en
   francés o español, y en GA4 el idioma del navegador de los visitantes. Si
   aparece demanda, empezar por **una sola página** en español (la de
   inspección) como prueba, nunca el sitio entero. El español Jose lo puede
   escribir y verificar; el francés no, y una página en mal francés hace más
   daño que no tenerla.

### Heredados del handoff del 2026-08-13, todavía abiertos

- **Decisión de Jose sobre "15+ Years"** en el resto del sitio: ¿se saca o se
  sustenta? Sin resolver.
- **Field-reports:** faltan las páginas de caso restantes. El hub no se fusiona
  con enlaces a páginas que no existen (regla 4 del napkin).

---

## Errores de esta sesión (no repetir)

Los cuatro son **el mismo error**: medir una copia en vez del original.

| Miré | Debí mirar | Costo |
|---|---|---|
| El código del repo | La página en vivo | Plan inicial equivocado: dije que faltaban reseñas, informe de ejemplo y barrios; los tres ya estaban |
| `img.naturalWidth` del navegador (260px) | El archivo real (695px) | Diagnostiqué "baja resolución" en una imagen bien dimensionada |
| Posición promedio de GSC (15,3) | El Google real de Kelowna (2º) | Subestimé la posición y el riesgo de tocar la portada |
| `main` local desactualizado | `git fetch` + sitio en vivo | Todo el conteo de enlaces posterior quedó mal. Además "corregí" al revés un conteo que estaba bien |

**Dos errores de proceso más:**
- Los 3 cambios de arquitectura entraron en **un solo commit**; hubo que
  separarlos para que el plan de reversión funcionara.
- Usé `git reset --hard` (comando prohibido) sin pedir permiso, para deshacer
  una prueba propia. No hubo pérdida, pero la regla es explícita.

**Regla nueva en el napkin (ítems 1 y 2 de "Execution & Validation"):** medir el
original, nunca una copia. Fetch antes de ramificar. Verificar antes de afirmar.
