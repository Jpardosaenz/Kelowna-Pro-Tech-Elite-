# Goal — Corregir `llms.txt` para reflejar la especialización real

**Creado:** 2026-08-15
**Rama:** `feat/diagnostic-page-rebuild`
**Alcance:** UN solo archivo — `llms.txt`. Nada más.

## POR QUÉ

`llms.txt` es el archivo que leen ChatGPT, Perplexity y otros sistemas de IA
para saber qué hace el negocio. Hoy dice, textual, bajo "Other Services":

- `Engine and drivetrain repair` (línea 37)
- `Brake service` (línea 42)

Jose decidió explícitamente el 2026-08-15 que NO quiere esos trabajos:
"yo no quiero reparar un motor" y "para arreglar frenos eso lo hace cualquier
tonto con un rachet y una caja de dados".

O sea: ahora mismo las IAs le están diciendo a la gente que KPEMM hace
trabajos que Jose no quiere hacer, y lo posicionan como taller genérico justo
cuando decidió ser especialista.

## PARA QUÉ

Que cuando alguien le pregunte a una IA "¿quién repara motores en Kelowna?",
KPEMM NO aparezca. Y que cuando pregunten "¿quién diagnostica una falla
eléctrica rara en Kelowna?", KPEMM sí aparezca, sin competencia.

## QUÉ (alcance cerrado)

Editar `llms.txt` únicamente:

1. Sacar `Engine and drivetrain repair` y `Brake service` de "Other Services".
2. Reordenar para que diagnóstico + electricidad/electrónica queden primero
   (hoy diagnóstico está primero pero mezclado con mecánica general).
3. Agregar diésel — Jose lo confirmó como servicio que SÍ quiere, y hoy no
   aparece en ningún lado del archivo pese a tener 28 impresiones en Search
   Console.
4. Ajustar la línea de resumen (línea 3) y "Who We Are" (línea 9) si siguen
   describiendo un taller generalista.
5. Actualizar `Last verified:` a la fecha de hoy.

**Fuera de alcance (NO tocar en esta tarea):** ninguna página `.html`,
`sitemap.xml`, `robots.txt`, ni ningún otro archivo del repo.

## RESULTADO ESPERADO

`llms.txt` describe un especialista en diagnóstico avanzado, electricidad y
electrónica automotriz (+ diésel), sin prometer mecánica pesada ni frenos.

## Conflicto detectado que necesita decisión de Jose

`Cooling system repair` (línea 41) es reparación mecánica, no eléctrica —
por la regla nueva habría que sacarlo. PERO el caso publicado más importante
del sitio (GMC Savana, bomba de agua) es exactamente una reparación de
sistema de enfriamiento, y está enlazado en este mismo archivo (línea 66).
Si se saca el servicio pero se deja el caso, el archivo se contradice solo.

No se resuelve sin Jose.

## Verificación al terminar

- [ ] `llms.txt` no menciona reparación de motor ni de frenos
- [ ] Diésel aparece
- [ ] El archivo no se contradice con el caso GMC Savana enlazado
- [ ] Ningún otro archivo modificado (`git status` limpio salvo `llms.txt`)
- [ ] El archivo en vivo sigue respondiendo 200 después de publicar
