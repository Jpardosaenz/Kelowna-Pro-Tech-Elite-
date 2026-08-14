# Handoff — 2026-08-13 (sesión cerrada, primera página de caso terminada)

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
   de Jose antes de tocar el archivo. Nunca digas "publicado" si solo está
   en localhost.
3. Antes de citar una regla de marca, copy o precio como vigente, buscá si
   hay una versión más nueva que la reemplace (jerarquía: dato vivo > archivo
   específico > reporte fechado reciente > histórico).
4. Si preguntás algo, preguntá una sola cosa a la vez.
5. Para copy o decisiones de negocio, usá datos reales (trazabilidad GBP,
   GSC, casos-reales.md) en vez de inventar o suponer qué funciona.
6. Antes de mandar un link de localhost, confirmá que el servidor de
   preview sigue corriendo — se cae solo entre sesiones, pasó varias veces
   en la sesión del 13-ago.
7. Cada respuesta empieza con "🐤 José —", sin excepción, en español simple.
8. `main` nunca se toca directo. Todo en `feat/field-reports-cluster`.
   Push SÍ está autorizado (Jose lo confirmó explícito 2026-08-13). Merge a
   `main` sigue bloqueado hasta que las 6 páginas de caso existan (ver
   "Decisión: NO merge todavía" más abajo, sigue vigente).
9. Antes de tocar cualquier página del sitio (no solo field-reports), medí
   en el navegador si el bloque que vas a cambiar entra en la primera
   pantalla sin scroll, en mobile Y en escritorio (1024px y 1280px mínimo).
   No asumas por el CSS, medí con JavaScript en el navegador real.
10. Antes de citar un número de reseñas o cualquier dato de negocio,
    verificalo contra `reviews-gbp-v2.md` en Marketing workers, o preguntale
    a Jose. No confíes en lo que diga cualquier página del sitio: estaban
    todas desincronizadas hasta hoy.
11. Cuando edites un CSS externo (no el `<style>` inline de la página), el
    navegador puede servir una versión vieja en caché aunque el archivo en
    disco ya esté actualizado. Si medís y el número no cambió después de
    editar el CSS, sospechá primero de la caché antes de asumir que la
    edición no sirvió.

Después de leer el handoff, empezá directo por "Para arrancar la próxima
sesión" (al final del archivo).
```

## Qué se hizo hoy (2026-08-13, sesión larga)

**Se construyó y terminó la primera página de caso del cluster: GMC Savana.**
Existía un borrador sin terminar de una sesión anterior (10 de agosto, sin
documentar en el handoff de ese día — lección aprendida, ver "Errores").
Hoy se llevó de borrador a página lista para publicar, con una revisión
completa de 9 frentes (E-E-A-T, autoridad temática, AEO, SEO, marcas de
IA en el texto, schema/JSON, indexación, UX, peso).

### 1. Copy: de texto genérico a historia real, sin marcas de IA

- Se reescribieron las 4 fases del artículo (contacto → diagnóstico →
  hallazgos → reparación) con datos reales sacados de `casos-reales.md`
  (contacto por texto, la van quedó lista ~7 PM, otros talleres cotizaron
  2 semanas) — no se inventó ningún dato nuevo.
- Se pasó el texto completo por el filtro "humanizer" (detecta señales de
  IA: espejos negativos, grupos de tres forzados, rayas, comillas curvas,
  Mayúscula En Cada Palabra, frases-eslogan huecas). Se hizo una auditoría
  visual completa marcando cada frase sospechosa directo en la página
  (capa temporal amarilla, ya removida) — se encontraron 24 casos, no los
  8 que se habían detectado en la primera pasada. Lección: revisar también
  el texto que uno mismo escribió en la sesión, no solo lo heredado.
- Se sacó la credencial no verificable "15+ Years Engineering Experience"
  del cuerpo de esta página (sigue en el resto del sitio, ver Pendientes).

### 2. Prueba social: de datos susurrados a la pieza más fuerte del negocio

Jose fue explícito: las reseñas son la razón número uno por la que gana
clientes sobre la competencia (caso real: ganó un cliente hoy porque el
competidor, aunque cobraba $50 menos, no tenía ninguna reseña). Se
construyó en base a eso:

- **Tarjeta de confianza** arriba del H1: 4.9 grande + estrellas + "65
  Kelowna drivers reviewed us" + link real a Google. Toda la tarjeta es un
  botón (se toca y va a las reseñas reales). Sin animación de entrada a
  propósito (criterio Emil Kowalski: el movimiento es para dar respuesta,
  no para llamar la atención a algo estático — eso lo hace la jerarquía
  visual). Sí tiene reacción al tocar (`scale(0.985)`).
- **4 diferenciadores reales**, como enunciados cortos y escaneables (no
  descripciones largas — pedido explícito de Jose, "la gente no lee, hay
  que poder escanear"): "Just hand over the keys" · "Honest, straight
  answers" · "Only a few cars a day" · "It all happens in your driveway".
  Los dos primeros están basados en los 8 diferenciadores estructurales
  documentados en `00_MARKETING_CORE_POSITIONING_DO_NOT_FORGET.md`
  (keys-only, precio antes de empezar). "Cupo limitado" es un dato que dio
  Jose en esta sesión, no estaba documentado antes — quedó anotado como
  tal, no como hecho verificado de archivo.
- **Número de reseñas corregido en TODO el sitio: 62 → 65.** El número
  estaba inconsistente en 5 versiones distintas (62 en 7 páginas, 64 en
  esta página, 59 en los archivos de marketing, 41 en un bloque muerto
  comentado en el home con caras de stock de randomuser.me, ya borrado).
  Jose confirmó el número real (65 reseñas, 4.9 promedio) mirando su panel
  de Google el 13-ago. Se actualizó también `reviews-gbp-v2.md` y
  `prueba-social.md` en Marketing workers (fuentes de verdad).
  **Regla nueva, importante:** nunca decir "65 reseñas de cinco estrellas"
  — con promedio 4.9 sobre 65, las de cinco estrellas son ~58-59, no 65.
  Se dice "4.9 de 65 reseñas en Google", que es lo que Google muestra.

### 3. Diseño: mobile-first arreglado + hero dividido en escritorio

- El bloque de etiquetas de arriba se partía en **4 líneas en celular**
  (necesitaba 852px de ancho, había 343px disponibles). Se midió con
  JavaScript en el navegador real, no se asumió por el CSS. Quedó en 1 línea.
- La foto (vertical, 528px de alto en celular) se recortó a 4:3 solo en
  mobile, liberando espacio para que el título y la tarjeta de reseñas
  entren en la primera pantalla de un iPhone Pro Max sin scroll.
- **Nuevo en escritorio: diseño dividido.** Foto a pantalla completa en una
  columna, texto (breadcrumb + tarjeta + título + firma) en la otra, todo
  dentro de la primera pantalla sin scroll. Medido y confirmado en 1024px,
  1280px y 1440px. Implementado con CSS Grid + `display: contents` en el
  `<header>` para no tener que reordenar el HTML — así el mobile (que ya
  estaba aprobado) no se movió ni un píxel.
  **Bug real encontrado y corregido en el camino:** una fila `1fr` sin
  `minmax(0, ...)` hacía que el contenedor se pasara 23px de la pantalla
  aunque tenía una altura fija — el gotcha clásico de CSS Grid con `1fr`.

### 4. Schema / SEO técnico

- Se agregó `AggregateRating` + `Review` (con el texto real de Chris Gaal)
  al nodo `Organization`, que se subió a `LocalBusiness` + `AutoRepair` con
  dirección y horario. Antes no existía nada de esto en esta página.
- Se agregó un nodo `Service` completo — la página de pre-purchase (la que
  mejor rankea en Google AI Overview y ChatGPT) lo tenía y esta no.
- Se agregó una 6ª pregunta al FAQ ("¿es seguro seguir manejando con una
  fuga de refrigerante?") — la que le faltaba para emparejar en cantidad
  con la página que mejor funciona.
- `dateModified` actualizado, título del schema sincronizado con el H1
  visible (estaban distintos: uno en mayúscula normal, el otro en Mayúscula
  En Cada Palabra).
- La página se agregó al `sitemap.xml` (no estaba, a pesar de estar ya
  escrita desde el 10 de agosto).
- `llms.txt` tenía datos viejos y falsos: decía 58 reseñas (dos veces) y
  repetía la credencial "15+ years" que ya se había sacado del sitio. Se
  corrigió y se agregó el caso GMC Savana resumido.

### 5. Limpieza técnica

- Se borraron 6 fotos JPG huérfanas (992 KB) que ya no usaba ninguna
  página — verificado que los originales siguen a salvo en
  `Marketing workers/06-Media/.../GBP-ready/` antes de borrar.
- Se probó comprimir más las 5 fotos que sí se usan y **se decidió no
  hacerlo**: medido con PSNR (métrica objetiva de pérdida de calidad), la
  compresión que ahorraba peso real degradaba justo las fotos que son la
  evidencia del trabajo (bomba de agua). Las fotos ya estaban bien
  comprimidas de antes.

### 6. Otras 5 páginas del sitio, tocadas por decisiones de hoy

- **"Call Expert Mechanic" → "Call Certified Specialist"** en 5 páginas
  (BMW, GMC Savana, diagnostic, pre-purchase, maintenance). Decisión con
  respaldo escrito: `filosofia-negocio.md` cita a Ries & Trout ("el
  especialista vence al generalista"); "expert" no está documentado en
  ningún archivo de estrategia.
- **`services/pre-purchase/` (la página que mejor funciona en Google AI y
  ChatGPT):** se le corrigieron 2 cosas sin tocar lo que ya funciona:
  1. El hero en escritorio se pasaba 181px de la primera pantalla — mismo
     arreglo que en GMC (tipografía y espaciado más compactos, sin tocar
     texto ni foto). Confirmado en 1024 y 1280px.
  2. Limpieza de marcas de IA: 9 rayas (—) sacadas (incluyendo 3 en el
     `<title>`/meta que se ven en Google), comillas curvas → rectas, 3
     títulos en Mayúscula En Cada Palabra corregidos, un emoji ✓ suelto
     sacado de un botón.
  **Sin tocar** (decisión de Jose): el eslogan "No Guessing. No Regret.
  No Surprises." se queda igual aunque tiene el mismo patrón de tres
  negaciones que se sacó en GMC — es una línea de marca establecida.
- Se sincronizó el número de reseñas (65) en `index.html`, `our-story/`,
  `services/index.html`, `services/diagnostic/`, `services/pre-purchase/`,
  `field-reports/index.html`, `field-reports/bmw-z3-kelowna-diagnostic/`.

## Decisión importante: la página del BMW sigue publicada, no se toca

Jose preguntó por qué edité `bmw-z3-kelowna-diagnostic` si "eso no debería
existir". **Se verificó: la página SÍ está publicada en el sitio real ahora
mismo** (`kelownaprotechmobilemech.com`, responde 200) y existe en `main`,
no solo en esta rama. Lo que se descartó el 5 de agosto fue usar el caso
BMW como parte del cluster nuevo de 6 casos — nunca se decidió borrar la
página ya publicada. Jose decidió: **dejarla como está por ahora**, no
tocarla más. Los 2 cambios que se le hicieron hoy (texto del botón, número
de reseñas) quedan solo en esta rama, sin publicar.

## Estado de los archivos (2026-08-13)

Todo verificado: 9 páginas con schema, las 9 validadas con JSON válido.
Consola sin errores en las páginas revisadas. Servidor de preview se cayó
varias veces durante la sesión — siempre se confirmó que respondía antes
de dar un link a Jose.

**Modificados:** `field-reports/bmw-z3-kelowna-diagnostic/index.html`,
`field-reports/index.html`, `index.html`, `llms.txt`, `our-story/index.html`,
`services/diagnostic/index.html`, `services/index.html`,
`services/maintenance/index.html`, `services/pre-purchase/index.html`,
`services/pre-purchase/pre-purchase.css`, `sitemap.xml`.

**Borrados:** 6 JPG huérfanas en `images/` (ver sección 5 arriba).

**Nuevos (sin commitear al empezar la sesión, ya terminados):**
`field-reports/gmc-savana-kelowna-diagnostic/` completo, 5 fotos `.webp`
+ `.jpg` de respaldo del caso GMC en `images/`, `.claude/goal-caso-gmc-savana.md`.

**Fuera del sitio, en Marketing workers** (sin commit de git, otro repo):
`02-Marca-y-Contexto/reviews-gbp-v2.md` y `prueba-social.md` — número de
reseñas actualizado a 65, fecha 13-ago-2026.

## Pendientes (jerarquía por dependencia, no por fecha)

### FASE 2 — la que sigue ahora: replicar la plantilla a los 5 casos restantes

Con GMC Savana aprobado como plantilla, juntar los datos que falten de cada
caso (síntoma exacto, hallazgos, solución, resultado, fecha aproximada)
usando `casos-reales.md` como base, preguntándole a Jose lo que no esté ahí.
Los 5 casos: Chrysler 300, Honda Pilot 2004, Jeep Cherokee 1998, VW Jetta
TDI, Cadillac SRX 2013.

**No inventar el dato de "quedó listo a las X PM"** como se hizo con GMC —
ese dato salió de `casos-reales.md`. Verificar si existe para cada caso
antes de escribirlo; si no está, preguntarle a Jose, no inventarlo.

### FASE 3 — detalle menor, no bloqueante: reseña real de Google por caso

Sin reseña anotada todavía en `casos-reales.md`: Honda Pilot 2004, Jeep
Cherokee 1998, VW Jetta TDI. Se agrega si existe, se omite si no.

### FASE 4 — control de calidad antes de publicar cualquier caso

- Pasar el mismo proceso de hoy con cada caso nuevo: humanizer, mobile-fit
  medido, schema con AggregateRating+Review+Service, revisión contra napkin.
- No repetir "15+ Years" ni ninguna credencial no verificable.

### Decisión pendiente de Jose: "15+ Years" en el resto del sitio

Sigue apareciendo en 8 lugares (botones de encabezado de casi todas las
páginas, insignias del hub y del BMW). Se sacó solo del cuerpo de la
página GMC hoy. Es la credencial que la auditoría E-E-A-T marcó como no
verificable. Falta la decisión de Jose: ¿se saca de todo el sitio, o se
deja?

### Deuda técnica confirmada hoy (agregar al napkin si no está)

- La página GMC sigue con CSS inline en `<style>` (12.8 KB antes, ahora
  más grande con todo lo agregado hoy) — mismo patrón de deuda ya
  documentado para el resto del sitio en el napkin, punto 6 de
  "Repository & Architecture Gotchas". No se resolvió hoy, no era el
  objetivo de la sesión.
- El archivo `pre-purchase.css` tiene hallazgos de diseño automáticos sin
  resolver (borde lateral tipo "side-tab", fuente Inter marcada como
  "sobreusada", una animación de `padding`/`margin` que debería ser de
  `transform`) — preexistentes, no se tocaron hoy, quedan anotados.

### Fuera de alcance por ahora (no iniciar sin que Jose lo pida)

- 🔵 ESTRATÉGICO: `/services/` — subir el bloque de servicios justo debajo
  del hero (pedido 2026-08-05, sigue sin empezar). Detalle completo en el
  handoff anterior si hace falta recuperarlo del historial de git.

## Errores cometidos hoy (no repetir)

- **Un cambio de sesión anterior (10-ago) no quedó documentado en el
  handoff de ese día.** La página GMC Savana ya estaba construida al 90%
  cuando arrancó esta sesión, pero el handoff decía "no existe ni un solo
  ejemplo construido". Se detectó por `git status`, no por el handoff.
  **Regla:** actualizar el handoff SIEMPRE antes de cerrar sesión, aunque
  el trabajo no esté 100% terminado — un handoff desactualizado es peor
  que no tener handoff, porque genera falsa confianza.
- **Primera auditoría de marcas de IA fue superficial:** se revisó el
  cuerpo del artículo y se dieron por buenos los títulos, insignias y pie
  de página, además del texto que yo mismo había escrito en la sesión (di
  por sentado que texto "ya revisado" antes seguía limpio después de
  editarlo de nuevo). Encontré 8 casos, había 24. **Regla:** revisar TODA
  la página, no solo el bloque que se acaba de escribir — y revisar el
  propio texto con la misma sospecha que el heredado.
- **Apliqué el mismo molde de queja "no confían en X" en tres frases
  seguidas sin darme cuenta**, justo mientras corregía ese mismo patrón en
  otras partes. Jose lo señaló. **Regla:** el patrón se repite más fácil
  de lo que parece cuando se está en modo "corregir en lote" — revisar
  cada frase nueva contra la lista de patrones, no solo las viejas.
- **Edité un CSS externo (`pre-purchase.css`) y medí "sin cambios"** —
  el archivo en disco sí tenía el cambio, pero el navegador servía una
  copia en caché. Perdí un ciclo completo de medición hasta darme cuenta.
  **Regla:** si una edición a un CSS externo no se refleja al medir,
  sospechar primero de la caché del navegador (forzar recarga del link
  tag específico) antes de asumir que el CSS está mal.
- **Asumí que "BMW ya no es parte del proyecto" significaba que la página
  ya no estaba publicada**, sin verificarlo. Jose lo cuestionó y tenía
  razón en preguntar. Se verificó con `curl` al dominio real: seguía
  publicada. **Regla:** "descartado del alcance de un proyecto nuevo" no
  es lo mismo que "borrado de producción" — verificar contra el sitio
  real, no asumir por el historial de decisiones.

## Para arrancar la próxima sesión

1. Confirmar que el servidor de preview sigue corriendo (se cae solo
   entre sesiones) antes de mandarle cualquier link a Jose.
2. Este handoff cierra con `git push` hecho a `feat/field-reports-cluster`
   (confirmar que se completó — ver el mensaje de commit en el historial).
3. Arrancar por FASE 2: elegir el segundo caso (sugerido: Chrysler 300,
   porque ya tiene reseña real confirmada de TL C., según el handoff del
   5 de agosto) y juntar sus datos completos de `casos-reales.md` antes
   de escribir una sola línea.
4. Recordarle a Jose la decisión pendiente de "15+ Years" si no se resolvió.
