# Goal — Plomería de enlaces internos hacia la página de inspección pre-compra

**Creado:** 2026-09-02
**Rama:** `feat/plomeria-enlaces-ppi` (creada desde `main`, limpia)
**Alcance:** enlaces internos y canibalización. NO se toca contenido de venta,
NO se toca la portada, NO se tocan títulos ni direcciones.

---

## POR QUÉ

Medido en Search Console, 6 meses (2026-03-01 → 2026-08-31):

| Página | Clics | Apariciones | Posición |
|---|---:|---:|---:|
| Portada (3 versiones) | **369** | 11.818 | 5,1 – 12,6 |
| `/services/pre-purchase/` | 16 | 1.114 | **17,7** |
| `/services/diagnostic/` | 7 | 663 | 11,5 |
| `/our-story/` | 2 | 304 | 6,8 |
| Resto | 0 | 184 | — |
| **TOTAL SITIO** | **394** | 14.085 | |

**94 de cada 100 clics del sitio son de la portada.** Siete páginas juntas
trajeron 25 clics en medio año.

La página de inspección **no es invisible** — apareció 1.114 veces. El problema
es que aparece en el puesto 17,7, o sea página 2 de Google, donde llega menos
del 1% de la gente.

### La causa no es el contenido

| | Palabras | Dice "pre-purchase" | Posición |
|---|---:|---:|---:|
| Portada | 845 | 3 | 2º (SERP real, Kelowna, 2026-09-02) |
| Inspección pre-compra | 1.723 | 9 | 17,7 |

La página de inspección tiene el doble de texto y habla tres veces más del tema.
Y pierde. El contenido no es el freno.

### Las tres causas reales, medidas

**1. Es la página con menos enlaces internos de todo el sitio.**

Censo sobre `main` (el primer conteo se hizo por error sobre la rama
`feat/diagnostic-page-rebuild`; estos son los números buenos):

| Página destino | Enlaces recibidos | Desde cuántas páginas |
|---|---:|---:|
| `/services/diagnostic/` | 12 | 5 |
| `/field-reports/` | 12 | 8 |
| `/our-story/` | 9 | 8 |
| `/services/maintenance/` | 7 | 5 |
| **`/services/pre-purchase/`** | **7** | **4** |

Las 3 páginas que NO le enlazan:
`services/maintenance/`, `our-story/`,
`field-reports/gmc-savana-kelowna-diagnostic/`.
(`services/diagnostic/` sí le enlaza en `main`, con buen texto de enlace.)

**2. Tres páginas compiten por el mismo tema.**

| Página | "pre-purchase" | "inspection" |
|---|---:|---:|
| Portada | 3 | 5 |
| **`/services/`** | **9** | **13** |
| `/services/pre-purchase/` | 9 | 28 |

`services/index.html` habla casi tanto de inspección como la página dedicada.
Cuando varias páginas propias dicen lo mismo, Google no suma: elige una.

**3. La portada le contesta la pregunta.**
Su bloque de preguntas incluye *"How do I avoid buying the wrong used car?"* —
la pregunta central de una inspección pre-compra. Google usa justo esa respuesta
como texto de resultado (verificado en SERP real el 2026-09-02).

---

## PARA QUÉ

Que `/services/pre-purchase/` suba de la página 2 a la página 1 de Google para
"pre purchase inspection kelowna" y variantes, **sin perder el 2º puesto que hoy
tiene la portada** para "mobile pre purchase inspection kelowna".

Objetivo medible a 21-30 días de publicar:
- Posición de `/services/pre-purchase/`: de 17,7 a **menos de 12**.
- Posición de la portada: **igual o mejor** que hoy. Si baja, se revierte.

---

## QUÉ (alcance cerrado)

### Sí se hace

1. **Agregar enlaces contextuales** hacia `/services/pre-purchase/` desde las 4
   páginas que hoy no le enlazan. Dentro del texto, donde tenga sentido para el
   lector — no una lista de enlaces al pie.

2. **Corregir el texto de los enlaces existentes.** Hoy uno de los 6 dice
   *"Inspection Details"*, que no le dice nada a Google. El texto del enlace es
   lo que le explica de qué trata la página de destino.

3. **Bajar la canibalización de `services/index.html`.** Que resuma la
   inspección en pocas líneas y mande a la página dedicada, en lugar de tratar
   de contestar por su cuenta. **No se borra la sección** — se acorta y se
   redirige.

### NO se hace en esta rama

- **La portada no se toca.** Ni una coma. Trae el 94% de los clics.
- No se tocan títulos, H1, direcciones de página ni descripciones de ningún archivo.
- No se borra ningún texto de `/services/pre-purchase/`.
- No se colapsan ni esconden secciones.
- No entra la tabla comparativa ni los 4 valores faltantes — eso es la fase
  siguiente, con su propio goal.
- No se corrigen los números de reseñas (hoy `4.9` / `65` en 5 páginas; el real
  es **4,8 / 68** según la ficha de Google). Es una decisión aparte de Jose.

---

## RIESGOS Y CÓMO SE CONTROLAN

| Riesgo | Control |
|---|---|
| Google decide mostrar la página de inspección **en lugar de** la portada, y al principio rankea peor | Se mide a 21 días. Si la portada baja, se revierte con `git revert`. Por eso la portada no se toca: se le da fuerza a la otra sin quitarle nada a esta |
| Se rompe algo visual al insertar enlaces | Vista previa de Netlify, revisada por Jose en celular antes de publicar |
| No pasa nada y perdimos el tiempo | Es el peor caso realista. Los enlaces internos no penalizan. El costo es tiempo, no posición |

---

## CÓMO SE MIDE

**Antes de publicar** se guarda la foto del estado actual (ya está en este
documento: posición 17,7, 16 clics, 1.114 apariciones en 6 meses).

**A los 21 días** de publicar se compara en Search Console:
- `/services/pre-purchase/` — posición y apariciones
- Portada — posición y clics (el número que no puede bajar)

Nada de conclusiones antes de los 21 días: Google tarda en digerir los cambios.

---

## PROCEDIMIENTO

1. Rama `feat/plomeria-enlaces-ppi` desde `main` limpio. ✅ hecha
2. Cambios solo en: `services/diagnostic/`, `services/maintenance/`,
   `our-story/`, `field-reports/gmc-savana-kelowna-diagnostic/`, `services/index.html`.
3. Vista previa de Netlify → Jose la revisa en celular.
4. Con el OK de Jose, se une a `main` y se publica.
5. Se anota la fecha de publicación para contar los 21 días.

---

## NOTA DE DATOS

- El informe BMW Z3 aparece en la medición de 6 meses (115 apariciones,
  posición 3,1) pero **fue retirado** en `main` (commit `9c2c693`). No cuenta
  para la comparación futura.
- La rama vieja `feat/ppi-top-position` existe pero está muy desactualizada
  respecto de `main`. No se usa.

---

## RESULTADO DE LA EJECUCIÓN — 2026-09-02

### Enlaces internos hacia `/services/pre-purchase/`

| | Antes | Después |
|---|---:|---:|
| Enlaces totales | 7 | **12** |
| Páginas que le enlazan | 4 | **7** |

De ser el destino con menos apoyo del sitio a estar entre los primeros.

### Cambios hechos (6 archivos)

1. `our-story/index.html` — párrafo nuevo bajo la barra de capacidades, con
   enlace de texto *"pre-purchase car inspection in Kelowna"*.
2. `our-story/our-story.css` — clase nueva `.capabilities__note` (texto claro,
   enlace dorado) para que se lea sobre el fondo oscuro.
3. `services/maintenance/index.html` — párrafo puente nuevo, mismo patrón que
   ya usa la página de diagnóstico.
4. `field-reports/gmc-savana-kelowna-diagnostic/index.html` — la inspección se
   suma al párrafo de "Related Services", que ya existía.
5. `services/index.html`:
   - texto del enlace de la tarjeta: *"Inspection Details"* → *"Pre-Purchase
     Inspection Details"*.
   - respuesta *"What does a pre-purchase inspection include?"* acortada y
     redirigida a la página dedicada (visible + datos estructurados).
   - respuesta *"How much does a pre-purchase inspection cost?"* con enlace
     nuevo al final (visible + datos estructurados).
   - **arreglo extra:** los datos estructurados de esa respuesta no incluían
     *"What we can tell you:"*, que sí estaba en el texto visible. Defecto
     previo, corregido de paso.

### Verificaciones

- Datos estructurados (JSON-LD) válidos en las 8 páginas del sitio.
- Enlaces internos rotos: **0**.
- Las 9 preguntas de `/services/` coinciden palabra por palabra entre lo
  visible y los datos estructurados.
- Revisión visual en celular (375×812) de las 4 páginas tocadas: sin roturas.
- Errores de consola: solo el aviso preexistente de `X-Frame-Options` en
  `<meta>`, que ya estaba y no viene de estos cambios.

### Lo que NO se tocó, como estaba pactado

- La portada. Ni una coma.
- Títulos, H1, direcciones de página, descripciones.
- Contenido de `/services/pre-purchase/`.
- Los números de reseñas (siguen en `4.9` / `65` en 5 páginas).
