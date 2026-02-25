# 🧶 KPEMM: Scrum Breadcrumbs (Technical & Strategic Handover)

Esta guía sirve para que cualquier futura IA o desarrollador entienda el **"Sistema de Conversión de Ingeniería"** que hemos construido para Kelowna Protech Elite.

## 🏁 Contexto Actual (Feb 2026)
Hemos transformado las páginas de servicios de simples "listas de tareas" en **Máquinas de Ventas de Alta Autoridad**.
*   **Filosofía:** Marketing de Respuesta Directa (Alex Hormozi) + Posicionamiento de Diseño (Chris Do).
*   **Estado:** Todas las páginas optimizadas y en compliance legal. Auditoría SEO/GEO completa ejecutada el 2026-02-25. Próxima prioridad: GBP posts y aumento de reseñas.

## 🧠 Lógica Estratégica
Si vas a continuar este trabajo, debes respetar estos pilares:
1.  **Comparar HACIA ARRIBA:** No nos comparamos con "mecánicos de patio". Nos posicionamos como la **Alternativa Premium al Dealer**.
2.  **Grand Slam Offers:** Cada servicio debe ser un "ofertón" donde el valor supere por 10x al precio. (Ej: PPI de $250 que ayuda a negociar $2,000-5,000+ de descuento).
3.  **Autoridad de Ingeniería:** No usamos "Red Seal" (por petición del cliente). Usamos **"Mechanical Engineering Background"** y **"Analytical Precision"**.
4.  **Social Proof Real:** Solo usamos reseñas reales (Gabe C., Oscar B., etc.). Cada reseña debe contar una historia de **ROI o Ahorro**.

## ⚖️ Reglas de Compliance (BC Business Practices Act) — INAMOVIBLES
Estas reglas protegen al negocio legalmente. Cualquier IA o persona que trabaje aquí debe respetarlas sin excepción:

- **PROHIBIDO publicar:** plazos de garantía específicos, crédito de diagnóstico hacia reparación, claims de seguro, "Master Mechanic", "AI Analysis".
- **PERMITIDO:** "Warranty included — we stand behind our work" (sin plazos ni condiciones). Esta frase está aprobada y en uso.
- **Velocidad de respuesta:** "Same day in most cases" — este es el diferenciador real y verificado. Úsalo en FAQ, meta tags y copy.
- **Testimoniales:** Solo hechos verificables. Nunca incluir políticas comerciales en boca de clientes (ej: "he credited the diagnostic fee" fue eliminado en PR #34).
- **Social proof verificado:** 36 reseñas (4.9★), 100+ inspecciones, Certified Mechanical Engineer (15+ años).

## 📋 Historial de Compliance — Cambios Aplicados

| Fecha | Qué se eliminó / cambió | Por qué | Archivo |
|-------|--------------------------|---------|---------|
| 2026-02-25 | FAQ "paying twice / diagnostic credited" | Política no verificable | index.html |
| 2026-02-25 | Testimonial Gabe Carter: "credited the diagnostic fee toward labor" | Afirmación falsa en HTML indexado | services/diagnostic/index.html |
| 2026-02-25 | "Warranty-compliant" (8 instancias) | Compromiso legal sin respaldo | services/maintenance/index.html |
| 2026-02-25 | FAQ "Will this keep my warranty?" | Reemplazado por "Do you stand behind your work?" | services/maintenance/index.html |

## 🛠️ Guía de Revisión Técnica
### 1. Header & Menú (Mobile-First)
*   **Estructura:** Asegúrate de que existe el botón `.kpem-menu-trigger` y el botón de cierre dentro del nav.
*   **Consistencia:** El header debe tener el CTA dinámico (ej: "Book Your PPI Now").

### 2. Widgets Críticos
*   **AI Diagnostic Modal:** Debe estar presente al final de cada página de servicio.
*   **Side Widget:** El botón rojo "Ask a Mechanic" es el lead-magnet principal. No lo elimines.

### 3. SEO & E-E-A-T
*   **Schema.org:** Cada página tiene JSON-LD de `Service` y `FAQPage`.
*   **Contenido:** Buscamos >1,500 palabras por página para dominar el ranking de "Mobile Mechanic Kelowna".

## 🚀 Cómo continuar (Prompt sugerido para la siguiente IA)
> "Estoy trabajando en el sitio de KPEMM. Revisa `SCRUM_BREADCRUMBS.md` para entender el tono de autoridad de ingeniería y la lógica de 'Grand Slam Offer' de Hormozi. Mi objetivo es aplicar esta misma estrategia a la página de [Servicio X], asegurando que el Social Proof sea real y el posicionamiento sea contra los Dealers."

## 🔍 Estado SEO/GEO — Auditoría 2026-02-25

**Resultado: ✅ APROBADO — Sin inconsistencias activas**

| Elemento | Estado | Nota |
|----------|--------|------|
| FAQ visible ↔ JSON-LD FAQPage (homepage) | ✅ 7/7 sincronizados | Verificado post PR #34 |
| meta description = og:description = twitter:description | ✅ Idénticos | Ángulo: "Same-day mobile mechanic in Kelowna" |
| Canonical URLs | ✅ Todas las páginas | Sin www, sin trailing slash |
| Breadcrumb JSON-LD | ✅ En las 3 páginas de servicio | |
| Imágenes OG | ✅ Existen los 3 .jpg | diagnostic-og.jpg, pre-purchase-og.jpg, maintenance-og.jpg |
| GA4 tracking | ✅ En todas las páginas | G-1GDM77733G |
| Claims falsos en HTML indexado | ✅ Eliminados | Ver tabla de compliance arriba |

**Próxima auditoría recomendada:** Antes del siguiente sprint de contenido.

---
*Documento actualizado 2026-02-25 por Claude Sonnet 4.6. Auditoría SEO/GEO + compliance PR #34.*
