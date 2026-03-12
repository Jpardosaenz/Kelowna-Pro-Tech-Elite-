# Auditoría CRO de Homepage — Hallazgos Consolidados Desktop + Mobile — 11 Mar 2026

## Objetivo
Dejar constancia completa y trazable de los hallazgos detectados en la auditoría de la homepage, separando el análisis general, desktop y mobile, y consolidando conclusiones y prioridades para todo el proyecto.

## Contexto
Ya quedó cerrada la estructura documental de medición en GA4:
- Conversiones principales reales:
  - `phone_click`
  - `sms_click`
- Microconversión:
  - `service_card_click`
- Evento fantasma:
  - `purchase`

También quedó establecido que:
- Google Business Profile sí genera intención real.
- El cierre humano no parece ser el cuello de botella principal.
- La homepage concentra gran parte de la intención comercial.
- La sospecha principal de fuga está en la homepage.

---

## Cómo usar este documento y dónde encontrar la información relevante

### 1. Si necesitas entender el problema CRO principal
Empieza por este documento.

Aquí quedó consolidado:
- qué falla en la homepage
- qué falla en desktop
- qué falla en mobile
- qué debe corregirse primero

### 2. Si necesitas entender la medición real del proyecto
Revisa:
- `docs/PROJECT_MASTER.md`

Ahí está la estructura oficial de medición:
- conversiones reales: `phone_click`, `sms_click`
- microconversión: `service_card_click`
- evento fantasma a ignorar: `purchase`

### 3. Si necesitas entender las reglas operativas del repositorio
Revisa:
- `docs/agents.md`
- `AGENTS.md`
- `docs/Bitácora del Taller: Sitio Web Pro-Tech .md`

Ahí están las reglas de trabajo:
- no trabajar directamente sobre `main`
- cambios con aprobación
- trazabilidad documental
- flujo correcto de ejecución

### 4. Si necesitas entender el posicionamiento estratégico correcto
Revisa:
- `docs/SCRUM_BREADCRUMBS.md`

Ese documento fija:
- autoridad de ingeniería
- alternativa premium al dealer
- lógica de posicionamiento
- restricciones de compliance

### 5. Si necesitas ubicar los archivos reales de la homepage
Revisa:
- `index.html`
- `estilos-header2.css`
- `service-tiles.css`
- `scripts.js`

Esos archivos contienen:
- estructura de la homepage
- hero
- CTA
- prueba social
- FAQ
- comportamiento móvil

### 6. Si necesitas revisar contexto específico mobile-first
Revisa:
- `docs/MOBILE-MECHANICS-OPTIMIZATION.md`
- este documento, sección `3. Hallazgos específicos mobile`

### 7. Si necesitas revisar continuidad futura del trabajo
Usa este orden:
1. Este documento
2. `docs/PROJECT_MASTER.md`
3. `docs/SCRUM_BREADCRUMBS.md`
4. `docs/agents.md`
5. Archivos reales de homepage (`index.html`, `estilos-header2.css`, `service-tiles.css`, `scripts.js`)

### 8. Si alguien retoma el proceso después
La lectura mínima correcta es:
1. este documento
2. `docs/PROJECT_MASTER.md`
3. `docs/SCRUM_BREADCRUMBS.md`
4. `docs/agents.md`

Con eso debería poder entender:
- qué está fallando
- por qué importa
- dónde está la evidencia
- qué debe hacerse primero

---

## 1. Hallazgos generales de la homepage
1. La homepage comunica más conveniencia que diferenciación premium.
2. La promesa principal no expresa con suficiente fuerza:
   - autoridad de ingeniería
   - alternativa premium al dealer
   - claridad diagnóstica
3. La jerarquía de conversión está fragmentada.
4. Existen demasiados caminos de interacción compitiendo entre sí.
5. Hay inconsistencias de confianza:
   - menú apuntando a secciones ausentes
   - testimonios visibles eliminados
   - prueba social inconsistente
6. El cierre de página es débil.
7. La homepage actual funciona más como página informativa que como embudo concentrado de conversión.

---

## 2. Hallazgos específicos desktop
1. En desktop, la homepage deja ver más contenido temprano, pero sigue priorizando conveniencia antes que diferenciación premium.
2. El CTA principal existe, pero compite con demasiados elementos visuales y caminos secundarios.
3. La jerarquía visual sigue fragmentada.
4. La continuidad de confianza está debilitada por:
   - navegación hacia secciones no funcionales o ausentes
   - eliminación de testimonios visibles
   - inconsistencias en datos de reviews
5. El cierre de página en desktop también es débil y no remata con suficiente fuerza la decisión de contacto.
6. Desktop no parece ser hoy el problema más crítico, pero sí hereda problemas estructurales del mensaje y del embudo.

---

## 3. Hallazgos específicos mobile
1. En móvil, la acción principal no está disponible con suficiente inmediatez.
2. Falta un CTA visible y estratégico antes del scroll.
3. No existe hoy un CTA suficientemente dominante en el header móvil o en una zona superior estratégica.
4. El CTA del hero queda empujado hacia abajo.
5. El CTA flotante aparece tarde.
6. El widget rojo está oculto en móvil.
7. La imagen hero aparece antes que la promesa y antes que la acción.
8. El usuario entiende primero:
   - conveniencia
   - mecánico móvil
   - ahorro de tow
   y no entiende con suficiente rapidez:
   - autoridad premium
   - alternativa al dealer
   - diagnóstico claro y confiable
9. La prueba social aparece tarde.
10. El cierre móvil del recorrido es débil.
11. Mobile hoy parece ser el punto de fuga más crítico dentro de la homepage.

---

## 4. Conclusiones consolidadas para todo el proyecto
1. El problema principal no parece estar en Google Business Profile.
2. El problema principal no parece estar en el cierre humano.
3. El problema principal parece estar en cómo la homepage recibe, organiza y convierte la intención que ya llega.
4. El problema más crítico del proyecto hoy está en la experiencia inicial de la homepage, especialmente en móvil.
5. La homepage no está expresando con suficiente fuerza el posicionamiento real del negocio.
6. La secuencia de conversión actual no está optimizada:
   - acción tardía
   - promesa débil
   - confianza tardía
   - cierre débil
7. No parece necesario priorizar más tráfico todavía.
8. La prioridad correcta es cosechar mejor la intención actual.

---

## 5. Problemas prioritarios para corregir
### Prioridad 1
La homepage móvil no ofrece una acción principal inmediata y dominante antes del scroll.

### Prioridad 2
La promesa principal no comunica con suficiente fuerza la autoridad premium y la alternativa al dealer.

### Prioridad 3
La homepage tiene continuidad de confianza rota:
- navegación inconsistente
- testimonios visibles ausentes
- prueba social inconsistente
- cierre final débil

### Prioridad 4
Desktop debe corregirse después de resolver primero la secuencia mobile-first, para no arrastrar la misma estructura débil a ambas versiones.

---

## 6. Orden correcto de trabajo
1. Corregir primero la experiencia mobile-first inicial:
   - CTA inmediato arriba
   - secuencia del hero
   - promesa principal
2. Después reforzar continuidad de confianza en homepage:
   - prueba social
   - navegación real
   - consistencia de mensaje
   - cierre final
3. Luego revisar desktop para alinear estructura y no romper conversión.
4. Después validar continuidad homepage → service pages.

---

## 7. Siguiente paso recomendado
El siguiente paso no es rediseñar toda la homepage completa de una vez.

El siguiente paso correcto es:
1. crear una rama de trabajo nueva,
2. trabajar primero solo el bloque hero + CTA mobile-first,
3. luego revisar la continuidad de confianza,
4. después alinear desktop.

---

## 8. Estado del proyecto tras esta auditoría
- Medición documental de GA4: cerrada
- Hallazgos CRO generales: identificados
- Hallazgos desktop: identificados
- Hallazgos mobile: identificados
- Prioridad principal del proyecto: corregir homepage con foco mobile-first sin perder consistencia desktop
