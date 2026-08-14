# META — Página de caso individual: GMC Savana

Esta es la primera de las 6 páginas de caso que le faltan al hub `/field-reports/`.
Sirve como plantilla: si esta pasa la receta, las otras 5 se calcan de esta.
Vara de medida completa en `.claude/goal.md` (la del hub) — esto es específico
de esta página, no la repite.

## Por qué existe esta página

El hub ya está terminado pero sus 6 tarjetas apuntan a URLs que hoy dan 404.
No se puede mergear a `main` hasta que las 6 existan y funcionen (ver
`handoff.md`, sección "Decisión: NO merge todavía"). Esta página destraba
esa regla para el primer caso.

## Meta de esta página, en simple

No repetir el error del único caso que existe hoy (`bmw-z3`): la mejor
posición de Google del sitio (3.0) con cero clics. Esta página tiene que
poder ganar clics, no solo existir. Eso significa aplicar la receta de 9
pasos medida el 5 de agosto (`DOCS/COPY-INTENT-TRUST-PLAYBOOK.md` § 2.6),
no la fórmula vieja que ya sabemos que falló.

## Checklist de aceptación (los 9 pasos de la receta, aplicados a este caso)

- [x] 1. Búsqueda real: el patrón "mobile mechanic kelowna + varado + resuelto
      hoy" (69 clics medidos), no una keyword inventada de "water pump repair".
- [x] 2. Título nunca abre con marca/modelo del vehículo (aprobado por Jose).
- [x] 3. Descripción abre con la situación del cliente, no con el auto.
- [x] 4. Prueba de confianza (estrellas + reseña real de Chris Gaal) arriba
      de todo, antes del H1.
- [x] 5. Proceso en 3 pasos (Text / Diagnose / Fix), igual que el home.
- [x] 6. Contenido concreto: los 5 párrafos fijos del comando de field reports,
      con foto y texto explicando cada foto (pedido explícito de Jose).
- [x] 7. Preguntas y respuestas marcadas con schema `FAQPage` (5 preguntas).
- [x] 8. Enlaces internos: al hub y a `/services/diagnostic/`.
- [x] 9. CTA repetido en cada tramo (barra móvil, botón en medio del artículo,
      bloque final), mismo teléfono siempre.

## Reglas de privacidad aplicadas (no estaban en la receta de 9 pasos, pero
## son mandatorias igual)

- [x] Placa del vehículo difuminada en la foto de portada.
- [x] Logo de la empresa del cliente recortado fuera de cuadro (aparecía sin
      querer en una de las fotos de la carpeta de evidencia).

## Cómo se verifica que quedó bien

1. Servidor de prueba local corriendo, página abierta y revisada a ojo
   (desktop y mobile).
2. Sin errores en consola del navegador.
3. Las 5 fotos cargan, ninguna muestra placa ni logo de terceros.
4. El botón de llamar/textear funciona y aparece en cada tramo de scroll.
5. Nada de esto sale de `localhost` hasta que Jose lo apruebe explícito.

## Qué NO mide esta página todavía

Search Console no puede medir clics de una página que no existe en
producción. Esta meta se revisa con datos reales recién después de publicar
(cuando el cluster de 6 esté completo y Jose apruebe el merge), no antes.
