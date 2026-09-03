# Goal — Diagnostic: Hero + prueba social + imagen (Bloque 1 del loop)

**Creado:** 2026-08-15
**Rama:** `feat/diagnostic-page-rebuild`
**Archivo único:** `services/diagnostic/index.html`

## Objetivo

Reconstruir la primera pantalla de `services/diagnostic/` (mobile-first) con:
título/meta nuevos, línea compacta de confianza (estrellas + 4.9 + 65 reviews +
frase corta real), H1 nuevo, imagen del Ford Ranger 2020, y justo debajo la
tarjeta completa de la reseña de Jennean Bruner con link real a Google.

## Restricciones (no negociables para este bloque)

1. **Alcance cerrado:** solo hero + trust proof (compacto y completo) +
   imagen. NO se toca FAQ, "what you get", case study de Gabe, schema,
   ni el mid-page CTA. Eso es de otros pasos del loop, todavía no aprobados.
2. **Mobile-first obligatorio:** en la primera pantalla de un celular
   estándar, sin scroll, tienen que entrar: la línea compacta de confianza +
   el H1 + la imagen. Se mide con el navegador real antes de dar por
   terminado — no se asume por el CSS.
3. **Reseña real, verbatim:** el texto de Jennean Bruner se usa tal cual
   aparece en `reviews-gbp-v2.md`, sin editar ni parafrasear.
4. **Sin señales de escritura de IA:** sin rayas largas, sin comillas
   curvas, sin "Mayúscula En Cada Palabra" en título/H1.
5. **Sin precios, sin afirmaciones no verificables.**
6. **Especialidad respetada:** el copy no promete frenos, motor, ni
   mecánica pesada — solo diagnóstico, eléctrico/electrónico, diésel, flota.
7. **Principios de la skill `emil-design-eng` aplicados:** transiciones
   solo en `transform`/`opacity`, `ease-out` en entradas, nada de
   `scale(0)` como estado inicial, botones con `:active` que respondan.
8. **No se toca ningún otro archivo.** El CSS nuevo va en el `<style>`
   inline que ya tiene la página (externalizarlo es el paso 7, todavía no
   aprobado).

## Resultado esperado

Un link de `localhost` funcionando, con el bloque 1 completo, para que Jose
lo evalúe él mismo antes de aprobar el siguiente paso.

## Verificación antes de entregar

- [ ] `git status` — solo `services/diagnostic/index.html` modificado
- [ ] JSON-LD existente sigue siendo válido (no se tocó, pero se verifica
      que no se rompió por accidente)
- [ ] Medido en navegador: compacto + H1 + imagen entran sin scroll en
      viewport móvil estándar (390×844 o similar)
- [ ] Servidor de preview corriendo y respondiendo antes de dar el link
