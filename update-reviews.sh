#!/usr/bin/env bash
#
# update-reviews.sh — pone el mismo número de reseñas de Google en todo el sitio.
#
# USO:
#   ./update-reviews.sh 62          # actualiza a 62
#   ./update-reviews.sh --check     # solo muestra qué hay ahora, no cambia nada
#
# POR QUÉ EXISTE:
#   El número de reseñas estaba escrito a mano en 17 lugares distintos, con
#   5 cifras diferentes (41/55/58/59/24). Un cliente veía 55 en una página y
#   59 en otra. Este script lo deja parejo en un solo comando.
#
# LO QUE NUNCA TOCA (a propósito):
#   1. "Local Guide · 24 reviews · 7 photos" en services/pre-purchase/
#      → son las reseñas que escribió MICHIKA (la clienta), no las de KPEMM.
#   2. "4.9 from 41 reviews" en index.html
#      → está dentro de un comentario HTML muerto, no se ve en la página.
#
# Creado 2026-07-31.

set -euo pipefail
cd "$(dirname "$0")"

# ---- Los 17 lugares reales, uno por línea: archivo:línea ----
TARGETS=(
  "index.html:869"                                    # schema reviewCount
  "index.html:975"                                    # aria-label hero
  "index.html:976"                                    # aria-label estrellas
  "index.html:977"                                    # texto visible hero
  "our-story/index.html:87"                           # schema reviewCount
  "our-story/index.html:233"                          # texto del párrafo
  "our-story/index.html:242"                          # etiqueta de estadística
  "our-story/index.html:321"                          # badge (NN Reviews)
  "field-reports/index.html:498"                      # badge
  "field-reports/bmw-z3-kelowna-diagnostic/index.html:854"  # badge
  "services/diagnostic/index.html:557"                # badge
  "services/index.html:1032"                          # schema reviewCount
  "services/index.html:1099"                          # texto visible
  "services/index.html:1203"                          # subtítulo sección
  "services/index.html:1394"                          # subtítulo sección
  "services/index.html:1502"                          # texto visible
  "services/pre-purchase/index.html:261"              # texto visible
)

# Encuentra el número de reseñas en una línea, sin confundirse con 4.9 ni con años.
extract_count() {
  printf '%s' "$1" | grep -oE '"reviewCount": *"[0-9]+"|[0-9]+ Google [Rr]eview|Trusted by [0-9]+|from [0-9]+ Google review|\([0-9]+ Review|[0-9]+ review|across [0-9]+ review' \
    | grep -oE '[0-9]+' | head -1
}

# ---- Modo revisión ----
if [[ "${1:-}" == "--check" ]]; then
  echo "Estado actual de los 17 lugares:"
  printf '%-52s %-7s %s\n' "ARCHIVO" "LÍNEA" "NÚMERO"
  for t in "${TARGETS[@]}"; do
    f="${t%:*}"; n="${t##*:}"
    line=$(sed -n "${n}p" "$f")
    printf '%-52s %-7s %s\n' "$f" "$n" "$(extract_count "$line")"
  done
  exit 0
fi

# ---- Validación del argumento ----
NEW="${1:-}"
if ! [[ "$NEW" =~ ^[0-9]+$ ]]; then
  echo "ERROR: falta el número. Ejemplo: ./update-reviews.sh 62" >&2
  exit 1
fi
if (( NEW < 1 || NEW > 100000 )); then
  echo "ERROR: '$NEW' no parece un conteo de reseñas válido." >&2
  exit 1
fi

# ---- Aplicar ----
changed=0
for t in "${TARGETS[@]}"; do
  f="${t%:*}"; n="${t##*:}"
  [[ -f "$f" ]] || { echo "ERROR: no existe $f" >&2; exit 1; }

  line=$(sed -n "${n}p" "$f")
  old=$(extract_count "$line")

  if [[ -z "$old" ]]; then
    echo "AVISO: $f línea $n ya no tiene un número de reseñas — el archivo cambió." >&2
    echo "       Revisa el script antes de seguir. No se modificó nada en este archivo." >&2
    continue
  fi
  if [[ "$old" == "$NEW" ]]; then
    continue
  fi

  # Reemplaza SOLO en esa línea, y solo el número de reseñas (no el 4.9).
  perl -i -pe "if (\$. == $n) { s/\\b\Q$old\E\\b(?=(\\s*Google\\s+[Rr]eview|\\s+[Rr]eview|\\s*\\\"|\\s+Google))/$NEW/g }" "$f"

  new_line=$(sed -n "${n}p" "$f")
  if [[ "$(extract_count "$new_line")" == "$NEW" ]]; then
    echo "  ✓ $f:$n   $old → $NEW"
    changed=$((changed+1))
  else
    echo "  ✗ $f:$n   NO se pudo cambiar ($old). Revisar a mano." >&2
  fi
done

echo
echo "Listo: $changed de ${#TARGETS[@]} lugares actualizados a $NEW."
echo
echo "Siguiente paso:"
echo "  git diff              # revisar línea por línea"
echo "  git add <archivos>    # nunca 'git add .'"
echo "  git commit && push    # Netlify publica solo"
