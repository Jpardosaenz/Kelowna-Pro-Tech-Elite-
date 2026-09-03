# ANTES — Plomería de enlaces internos + ítem de menú

**Medido:** 2026-09-02
**Rama:** `feat/plomeria-enlaces-ppi`
**Publicado:** ⬜ pendiente — anotar la fecha exacta acá al publicar
**Volver a medir:** 21 días después de esa fecha

---

## 1 · Google Search Console — últimos 28 días (2026-08-05 → 2026-09-01)

Esta es la foto que más importa: lo más reciente antes de tocar nada.

| Página | Clics | Apariciones | Posición |
|---|---:|---:|---:|
| Portada `/` | 32 | 824 | 11,1 |
| Portada (llegando desde Google Maps) | 25 | 827 | 4,8 |
| **`/services/pre-purchase/`** | **3** | **304** | **20,2** |
| `/our-story/` | 1 | 54 | 12,8 |
| `/services/diagnostic/` | 1 | 103 | 17,2 |
| `/field-reports/` | 0 | 60 | 27,9 |
| `/field-reports/gmc-savana-kelowna-diagnostic/` | 0 | 3 | 29,0 |
| `/services/` | 0 | 1 | 10,0 |

## 2 · Google Search Console — 6 meses (2026-03-01 → 2026-08-31)

| Página | Clics | Apariciones | Posición |
|---|---:|---:|---:|
| Portada (sumando sus 3 versiones) | 369 | 11.818 | 5,1 – 12,6 |
| `/services/pre-purchase/` | 16 | 1.114 | 17,7 |
| `/services/diagnostic/` | 7 | 663 | 11,5 |
| `/our-story/` | 2 | 304 | 6,8 |
| Resto | 0 | 184 | — |
| **TOTAL DEL SITIO** | **394** | **14.085** | |

**94 de cada 100 clics del sitio son de la portada.**

## 3 · ⚠️ La tendencia venía BAJANDO

Comparando el promedio de 6 meses contra los últimos 28 días:

| Página | 6 meses | Últimos 28 días | |
|---|---:|---:|---|
| Inspección pre-compra | 17,7 | **20,2** | empeoró |
| Diagnóstico | 11,5 | **17,2** | empeoró |

**Esto es importante para juzgar el resultado.** Si en 21 días la inspección
queda igual que hoy, no es un empate — es haber frenado una caída. Y si
mejora poco, mejoró contra una tendencia en contra.

## 4 · Búsquedas de inspección pre-compra — últimos 28 días

| Búsqueda | Clics | Apariciones | Posición |
|---|---:|---:|---:|
| mobile pre purchase inspection | 1 | 6 | 8,3 |
| mechanical inspection cost | 0 | 1 | 4,0 |
| car check up cost | 0 | 1 | 6,0 |
| independent ppi | 0 | 1 | 10,0 |
| mobile inspection | 0 | 1 | 42,0 |
| car inspection kelowna | 0 | 5 | 43,4 |
| car mechanic pre purchase inspection | 0 | 1 | 50,0 |
| auto pre purchase inspection | 0 | 3 | 64,3 |

## 5 · Lo que se ve de verdad en Google desde Kelowna

Verificado el 2026-09-02 por Jose, en ventana de incógnito, buscando
**"mobile pre purchase inspection kelowna"**.

**Resultados normales:**

| | |
|---|---|
| 1º | Lakeshore Automotive |
| **2º** | **Kelowna Protech** — pero con la **PORTADA**, no con la página de inspección |
| 3º | CarInspect |
| 4º | InstaMek |

**Bloque de Empresas (mapa):**

| | | |
|---|---|---|
| 1º | Motor Werke · 4,9 (842) | **es anuncio pago** |
| **2º** | **Kelowna Protech · 4,8 (68)** | *"Ofrece: Pre-Purchase Inspection (on-site)"* |
| 3º | Mobile Auto Services · 4,5 (8) | |
| 4º | Kelowna Mobile Mechanics · 3,8 (328) | |

**Dos cosas que salieron de acá:**

1. **Google muestra la portada, no la página de inspección.** El título del
   resultado es *"Mobile Mechanic Kelowna — Stranded? Fixed Today, No Tow"*,
   que es el de la portada.
2. **La ficha de Google dice 4,8 con 68 reseñas.** El sitio dice 4,9 con 65
   en 5 páginas. Sin corregir todavía — decisión pendiente de Jose.

**Search Console decía posición 15,3 para esa búsqueda. La captura real dice
2º.** Search Console promedia todas las ubicaciones y dispositivos, así que
para saber dónde estamos parados **en Kelowna**, la captura vale y el
promedio no.

## 6 · Arquitectura interna — antes y después

> **Corregido el 2026-09-02, después de fusionar `main`.** Los números de
> "antes" que había acá primero se midieron contra una copia local
> desactualizada del proyecto, tres semanas atrasada respecto de la
> reconstrucción publicada de `services/diagnostic/`. Estos son los buenos,
> medidos contra el `main` real.

| | Antes (real) | Después |
|---|---:|---:|
| Enlaces hacia `/services/pre-purchase/` | **6** | **19** |
| Páginas que la enlazan | **3** | **7** |
| Enlaces hacia el caso GMC | 1 | **2** |
| Salidas del cuerpo en `/services/diagnostic/` | **1** (solo "Home") | **4** |
| Textos de enlace genéricos (*"Diagnostic Details"*) | 6 | **0** |
| Páginas huérfanas | 0 | 0 |
| Enlaces rotos | 0 | 0 |

Reparto completo después del cambio:

| Página | Enlaces | Desde N páginas |
|---|---:|---:|
| Portada | 29 | 7 |
| **Inspección pre-compra** | **19** | 7 |
| Diagnóstico | 12 | 5 |
| Casos reales | 11 | 7 |
| Mantenimiento | 8 | 6 |
| Historia | 8 | 7 |
| Servicios | 8 | 7 |
| Caso GMC | 2 | 2 |

### Lo que se arregló de paso

La reconstrucción de `services/diagnostic/` del 2026-08-18 había dejado esa
página **sin ningún enlace interno del cuerpo salvo "Home"**, y de paso borró
el único enlace que existía hacia la página de inspección. Llevaba dos semanas
así. Se le devolvió una sección "Related Services" con los tres enlaces:
inspección, caso GMC y mantenimiento.

---

## 7 · Qué se cambió

1. Goal del trabajo
2. `our-story/` — párrafo con enlace bajo la barra de capacidades
3. `services/maintenance/` — párrafo puente
4. Caso GMC — la inspección entra en "Related Services"
5. `services/` — las 2 preguntas de inspección se redirigen a la página dedicada
6. **Menú** — "Pre-Purchase Inspection" como ítem propio en las 8 páginas
7. `services/` — los 7 textos de enlace de las tarjetas, descriptivos
8. Documentación: napkin y handoff
9. **Fusión con el `main` real** — la rama se había creado desde una copia
   desactualizada. Se conservó entera la reconstrucción de diagnóstico de Jose
10. `services/diagnostic/` — sección "Related Services" nueva, que devuelve el
    enlace a la inspección perdido el 18-ago y saca al caso GMC del aislamiento

**Lo que NO se tocó:** el cuerpo de la portada, ningún título, ningún H1,
ninguna dirección de página, ninguna descripción, y nada del contenido de la
página de inspección.

---

## 8 · Qué hay que mirar a los 21 días

**El número que no puede bajar:**
- Portada — clics y posición. Si bajó, se revierte el commit del menú
  (está aislado justamente para eso).

**El número que queremos que suba:**
- `/services/pre-purchase/` — de posición 20,2 a menos de 12.

**Y una pregunta que se responde sola con el tiempo:**
- ¿Google empezó a mostrar la página de inspección en lugar de la portada
  para "pre purchase inspection kelowna"? Se ve repitiendo la búsqueda en
  incógnito desde Kelowna, igual que el 2026-09-02.

---

## 9 · DESPUÉS — completar a los 21 días

*(dejar en blanco hasta la fecha)*

**Medido el:** ⬜

| Página | Clics | Apariciones | Posición | vs. antes |
|---|---|---|---|---|
| Portada | | | | |
| `/services/pre-purchase/` | | | | |
| `/services/diagnostic/` | | | | |

**Búsqueda real en Kelowna, incógnito:** ⬜

**Conclusión:** ⬜
