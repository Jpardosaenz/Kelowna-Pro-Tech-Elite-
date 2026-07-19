# Handoff — 2026-07-19 09:04 PDT

## Qué estábamos haciendo
Terminamos y aprobamos el nuevo copy BOFU de la tarjeta de mantenimiento del homepage. La implementación móvil conserva la imagen y el CTA, comunica servicio, ubicación, audiencia, tres servicios y miedo económico, y quedó registrada en el commit `ba00168` de la branch `fix/maintenance-certified-technician`.

## Decisiones tomadas
- Reducir pogo-sticking es un objetivo fundamental aunque ninguna herramienta lo mida directamente como una métrica única.
- Retener significa confirmar relevancia, comunicar transformación, aportar evidencia, permitir profundizar y conducir a una acción; no alargar artificialmente el texto.
- KPEMM usará `we` como voz empresarial para acciones, estándares y compromisos reales de la marca.
- La tarjeta de mantenimiento del home es una superficie BOFU que debe convertir y abrir el silo de mantenimiento.
- La regla de tres es obligatoria y distinta de la tripleta semántica: contexto, oferta, venta, diferencia y confianza se construyen en grupos funcionales de tres.
- El copy debe comunicar un estándar superior, pero ninguna palabra es obligatoria por sí sola. `The best`, `premium`, `professional`, `quality` y `specialized` se eligen según el contexto y se respaldan con servicios, resultados y evidencia.
- `humanizer` solo elimina señales de IA. No puede cambiar contexto, posicionamiento, servicios, prueba, CTA ni fuerza comercial.
- El copy público no usa emojis, rayas o guiones decorativos. No se aplicarán correcciones masivas.
- La barra azul sticky permanece, pero la tarjeta de mantenimiento también debe incluir su CTA específico. El CTA interno no se elimina para ganar espacio.
- El cuerpo de esta tarjeta debe ser corrido y seguir la ruta `we + qué hacemos + dónde + para quién`. Los detalles del servicio y la prueba social se desarrollan en la página de mantenimiento.
- La misma imagen de mantenimiento se conserva con una altura móvil compacta y un recorte controlado.
- El conocimiento durable de copy vive en `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md`; las reglas recurrentes viven en `.claude/napkin.md`; el estado de continuidad vive en `.claude/handoff.md`.
- Después de cada actividad representativa se debe actualizar el handoff.
- Copy aprobado: `We bring the best car maintenance to Kelowna drivers at home or work. Our Certified Mechanic handles specialized oil changes, professional brake repair, and seasonal inspections because missed maintenance can turn a small issue into a major repair bill.`
- Título aprobado: `Your Car Deserves the Best Maintenance at Your Location. Discover the Difference`.
- CTA aprobado: `Book Maintenance at Your Location`.
- La prueba social no se muestra en esta tarjeta; se desarrollará en la página profunda de mantenimiento.
- La tarjeta puede ocupar uno o dos renglones adicionales cuando eso permita expresar con suficiente fuerza el problema, la pérdida económica y la solución.

## Pendientes
- 🔴 URGENTE: Ningún bloqueo activo.
- 🟡 IMPORTANTE: El commit `ba00168` existe localmente y la branch está un commit por delante del remoto; falta push únicamente si Jose lo autoriza.
- 🟡 IMPORTANTE: Los cambios documentales y archivos locales pendientes no fueron incluidos en `ba00168`; revisar su alcance antes de crear otro commit.
- 🔵 ESTRATÉGICO: Desarrollar en la página profunda de mantenimiento la diferenciación, la evidencia y la prueba social que se retiraron de la tarjeta compacta.

## Errores cometidos (no repetir)
- Dar demasiado protagonismo a si la duración aparece en Search Console o GA4 → mantener la precisión técnica, pero responder primero a la decisión estratégica: reducir insatisfacción y evitar el regreso al buscador.
- Tratar `we` principalmente como una hipótesis de conversión → usarlo como decisión de branding empresarial de KPEMM, respaldado por acciones y evidencia reales.
- Dejar el conocimiento importante solo en la conversación → archivarlo en playbook, napkin y handoff según su función.
- Aplicar `humanizer` reescribiendo el mensaje → conservar el copy aprobado y retirar únicamente la señal de IA detectada.
- Tratar la regla de tres como una señal de IA → en KPEMM es arquitectura comercial obligatoria cuando cada elemento cumple una función real.
- Eliminar el CTA interno porque ya existe una barra sticky → la tarjeta también necesita su CTA específico.
- Cargar la tarjeta con demasiados productos, detalles y prueba social → priorizar `we + servicio + ubicación + audiencia`, tres servicios relevantes, miedo económico y CTA; profundizar el resto en la página de destino.
- Convertir cinco renglones en un límite rígido → el tamaño es una guía; se aceptan uno o dos renglones adicionales cuando fortalecen el dolor y la venta sin ocultar el CTA.
- Convertir `the best` en la única expresión obligatoria de superioridad → comunicar un estándar superior usando naturalmente `the best`, `premium`, `professional`, `quality`, `specialized` u otra expresión adecuada al contexto.
- Suavizar el miedo a `to prevent costly repairs` → expresar la pérdida de forma concreta: el mantenimiento omitido puede convertir un problema pequeño en una factura de reparación grande.

## Archivos modificados
- `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md`
- `DOCS/SITE-BACKLOG-2026-07-18.md`
- `.claude/napkin.md`
- `.claude/handoff.md`
- `CLAUDE.md`
- `index.html`
- `service-tiles.css`
- Commit de producción: `ba00168 feat: strengthen maintenance service card`.
- Los dos archivos anteriores están incluidos en el commit.
- Permanecen sin commit: `.claude/napkin.md`, `.claude/handoff.md`, `CLAUDE.md`, `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md` y `DOCS/SITE-BACKLOG-2026-07-18.md`.
- `/Users/EPARDOSAENZ/.agents/skills/protech-content/SKILL.md`

## Para arrancar la próxima sesión
Leer `.claude/handoff.md`, `.claude/napkin.md` y `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md`; después verificar `git status` y pedir a Jose si desea hacer push de `ba00168` o preparar primero un commit separado para la documentación pendiente.
