# JSON-LD Workflow — Kelowna Protech Elite Mobile Mechanic

## Objetivo
Cambios atómicos, verificación inmediata y publicación segura para SEO/AI (Google, AI Overviews).
- Localizar con precisión
- Cambiar una sola cosa con respaldo
- Validar sintaxis del bloque JSON-LD
- Verificar en producción con curl|rg
- Publicar por PR y revalidar
- Rollback instantáneo con .bak

## Principios universales (sirve para JSON-LD, HTML, CSS, JS)
1) Localiza exactamente lo que vas a tocar (rg/Buscar de VS Code).
2) Cambia 1 cosa con respaldo (.bak). No mezcles ediciones.
3) Valida:
   - JSON-LD: python3 -m json.tool
   - HTML: Formatear en VS Code (Option+Shift+F) + vista local en http.server
   - CSS: VS Code Problems (⌘⇧M) + recarga en navegador
   - JS: VS Code Problems + abrir consola del navegador para errores
4) Publica por PR.
5) Verifica en producción (curl|rg o navegador) lo que acabas de cambiar.
6) Si algo falla, usa el .bak para volver inmediatamente.

## Checklists rápidos por tipo de archivo

### HTML
- Formatear en VS Code (Option+Shift+F)
- Servir local: `python3 -m http.server 5500` y abrir `http://localhost:5500/`
- Validar estructura: 1 solo `<h1>` por página; metas `og:title`, `og:description`, `og:image`

### CSS
- Revisar panel Problems (⌘⇧M)
- Probar en móvil (Responsive Mode del navegador)
- Evitar `!important`; deduplicar reglas; Mobile-First

### JS
- Abrir consola (⌥⌘J) y corregir errores
- Probar CTA principal: click → opciones (Text/Call/Email)
- Usar `addEventListener(DOMContentLoaded, ...)` para inicializar sin bloquear

## Comandos de verificación rápidos

### JSON-LD (local)
perl -0777 -ne 'print $1 if /<script[^>]*ld\+json[^>]*>(.*?)<\/script>/is' RUTA/archivo.html | python3 -m json.tool && echo "✅ OK" || echo "❌ FAIL"

### Producción (buscar un campo concreto)
curl -sL https://tusitio.com/ruta/ | rg -n '\"@type\"\s*:\s*\"HowTo\"'

### Servir local para ver HTML/CSS/JS
echo "Abrir http://localhost:5500/"; python3 -m http.server 5500
