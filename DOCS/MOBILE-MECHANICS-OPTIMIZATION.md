# Auditoría y Plan de Optimización: "Your Personal Mobile Mechanics"

**Fecha**: 2026-02-05
**Sección**: Service Tiles (#service-tiles)
**Ubicación**: index.html líneas 335-395
**Tiempo de Permanencia Actual**: ~1 minuto
**Objetivo**: Aumentar conversión y engagement en 25-50%

---

## 📊 Resumen Ejecutivo

La sección "Your Personal Mobile Mechanics" tiene fundamentos técnicos sólidos (imágenes WebP optimizadas, diseño responsive, accesibilidad básica) pero presenta **5 oportunidades críticas** para mejorar conversión:

1. ❌ Sin tracking GA4 de clics en tarjetas
2. ❌ CTAs invisibles (solo flecha sutil)
3. ❌ Badge "Most Popular" subdiseñado
4. ❌ Sin señales de confianza (reviews/ratings)
5. ❌ Problemas técnicos CSS (color H2, focus states)

---

## ✅ Fortalezas Actuales

- **Performance**: Imágenes WebP (84-114 KB), lazy loading, `content-visibility: auto`
- **Responsive**: Mobile-first con 3 breakpoints (mobile/tablet/desktop)
- **Accesibilidad**: ARIA labels, focus states, `prefers-reduced-motion`
- **Copy**: Orientado a beneficios ("Buy with Confidence", "Keep It Running Strong")
- **Social Proof**: Badge "Most Popular" en diagnóstico (aunque puede mejorar)

---

## 🎯 Decisiones Estratégicas Confirmadas

✅ **CTA**: "Consulta con Experto" (abre modal red side widget, NO llamadas directas)
✅ **Badge Color**: Dorado/Gold (#fbbf24)
✅ **Scope**: 3 fases completas (Critical + High-value + Advanced)
✅ **Data Source**: Estimaciones conservadoras ("4.9★ rated", "100+ inspections")

---

## 🔴 FASE 1: Critical Fixes (Alto ROI, Bajo Esfuerzo)

### 1.1 Tracking GA4 para Tarjetas de Servicio

**Archivo**: `scripts.js` (después de línea 641)

```javascript
// Track service card clicks
document.querySelectorAll('#service-tiles .tile').forEach(tile => {
  tile.addEventListener('click', () => {
    const serviceTitle = tile.querySelector('.title')?.textContent || 'Unknown Service';
    const isMostPopular = tile.querySelector('.tag') !== null;

    gtag('event', 'service_card_click', {
      'event_category': 'Engagement',
      'event_label': serviceTitle,
      'service_section': 'service_tiles',
      'is_featured': isMostPopular
    });
  });
});
```

**Resultado**: Medir en GA4 qué servicio genera más interés

---

### 1.2 CTAs Visibles "Consulta con Experto"

**Archivo**: `index.html` (líneas 344-393, en las 3 tarjetas)

**HTML** (añadir antes de cerrar `</a>`):
```html
<div class="tile-footer">
  <button type="button" class="cta-button" data-action="open-diagnostic-modal">
    Consulta con Experto
  </button>
</div>
```

**JavaScript** (scripts.js después de línea 689):
```javascript
// Conectar botones con modal de diagnóstico
document.querySelectorAll('[data-action="open-diagnostic-modal"]').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Abrir modal del red side widget
    const diagnosticModal = document.getElementById('diagnostic-modal');
    if (diagnosticModal) {
      diagnosticModal.classList.add('active');
    }

    // Track en GA4
    const tile = button.closest('.tile');
    const serviceTitle = tile?.querySelector('.title')?.textContent;
    gtag('event', 'consult_expert_click', {
      'event_category': 'Engagement',
      'event_label': serviceTitle,
      'source': 'service_card'
    });
  });
});
```

**CSS** (service-tiles.css al final):
```css
/* CTA Button Styles */
.tile-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
}

.tile .cta-button {
  display: inline-block;
  width: 100%;
  padding: 12px 20px;
  background: var(--brand); /* #111827 */
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  border: none;
  cursor: pointer;
}

.tile .cta-button:hover {
  background: #1f2937;
  transform: translateY(-2px);
}

.tile .cta-button:focus-visible {
  outline: 3px solid rgba(17, 24, 39, 0.5);
  outline-offset: 2px;
}

@media (max-width: 767px) {
  .tile .cta-button {
    padding: 14px 20px;
  }
}
```

---

### 1.3 Badge "Most Popular" con Color Dorado

**Archivo**: `service-tiles.css` (líneas 156-164, reemplazar)

```css
.tile .tag {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #111827;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 12px;
  border: 1px solid #fbbf24;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

/* Destacar toda la tarjeta "Most Popular" */
.tile:has(.tag) {
  border: 2px solid #fbbf24;
  background: linear-gradient(180deg, #fffbeb 0%, #fff 100%);
}

.tile:has(.tag):hover {
  border-color: #f59e0b;
  box-shadow: 0 12px 30px rgba(251, 191, 36, 0.2);
  transform: translateY(-6px);
}
```

---

### 1.4 Focus State para Accesibilidad

**Archivo**: `service-tiles.css` (después de línea 146)

```css
/* Arrow animation con focus */
.tile:focus-visible .cta-arrow {
  color: var(--brand);
  transform: translateX(4px);
}
```

---

### 1.5 Color Explícito en H2

**Archivo**: `service-tiles.css` (líneas 50-53)

```css
#service-tiles h2 {
  color: var(--ink); /* #111827 */
}
```

---

## 🟡 FASE 2: High-Value Enhancements

### 2.1 Micro-Reviews con Estimaciones Conservadoras

**Archivo**: `index.html` (insertar después del `<h3 class="title">` en cada tarjeta)

**Tarjeta 1 - On-Site Diagnostic** (~línea 347):
```html
<div class="proof-mini">
  <span class="rating">★★★★★</span>
  <span class="rating-text">4.9 rated</span>
  <span class="separator">•</span>
  <span class="count">Most requested service</span>
</div>
```

**Tarjeta 2 - Pre-Purchase Inspection** (~línea 366):
```html
<div class="proof-mini">
  <span class="rating">★★★★★</span>
  <span class="rating-text">4.9 rated</span>
  <span class="separator">•</span>
  <span class="count">100+ inspections</span>
</div>
```

**Tarjeta 3 - Preventive Maintenance** (~línea 384):
```html
<div class="proof-mini">
  <span class="rating">★★★★★</span>
  <span class="rating-text">4.9 rated</span>
  <span class="separator">•</span>
  <span class="count">Trusted by locals</span>
</div>
```

**CSS** (service-tiles.css al final):
```css
/* Micro-reviews styling */
.proof-mini {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
  margin-top: 10px;
  margin-bottom: 6px;
}

.proof-mini .rating {
  color: #fbbf24;
  font-size: 14px;
  letter-spacing: -1px;
  line-height: 1;
}

.proof-mini .rating-text {
  color: #6b7280;
  font-weight: 600;
}

.proof-mini .separator {
  color: #d1d5db;
  font-weight: 400;
}

.proof-mini .count {
  color: #9ca3af;
  font-weight: 400;
}

@media (max-width: 767px) {
  .proof-mini {
    font-size: 11px;
  }
  .proof-mini .rating {
    font-size: 13px;
  }
}
```

---

### 2.2 Indicador de Disponibilidad "Available Today"

**Archivo**: `index.html` (solo en tarjeta de diagnóstico, después de `.proof-mini`)

```html
<div class="availability-badge">
  <span class="status-dot"></span>
  <span class="availability-text">Available Today</span>
</div>
```

**CSS** (service-tiles.css):
```css
/* Availability indicator */
.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 4px 10px;
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 12px;
  font-size: 11px;
  color: #059669;
  font-weight: 600;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}
```

---

### 2.3 Optimización Mobile (320-360px)

**Archivo**: `service-tiles.css`

```css
/* Optimización para pantallas muy pequeñas */
@media (max-width: 360px) {
  .tile .image-container {
    height: 140px; /* reducir de 160px */
  }

  .tile .copy {
    padding: 16px; /* reducir de 20px */
  }

  .tile .title {
    font-size: 17px; /* reducir de 18px */
  }

  .tile .hint {
    font-size: 13px; /* reducir de 14px */
  }

  .tile .cta-button {
    padding: 12px 16px;
    font-size: 13px;
  }
}
```

---

## 🟢 FASE 3: Optimizaciones Avanzadas

### 3.1 Hover Premium para Tarjeta "Most Popular"

**Archivo**: `service-tiles.css`

```css
/* Efecto de brillo en hover */
.tile:has(.tag) {
  position: relative;
  overflow: hidden;
}

.tile:has(.tag)::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(251, 191, 36, 0.1) 50%,
    transparent 70%
  );
  transform: translateX(-100%) translateY(-100%);
  transition: transform 0.6s ease;
}

.tile:has(.tag):hover::before {
  transform: translateX(0) translateY(0);
}
```

---

### 3.2 Analytics Avanzado (Hover Time Tracking)

**Archivo**: `scripts.js` (después del tracking básico)

```javascript
// Track hover time en tarjetas (mide interés)
let hoverStartTime = null;

document.querySelectorAll('#service-tiles .tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    hoverStartTime = Date.now();
  });

  tile.addEventListener('mouseleave', () => {
    if (hoverStartTime) {
      const hoverDuration = Date.now() - hoverStartTime;
      const serviceTitle = tile.querySelector('.title')?.textContent;

      // Solo trackear si hover > 1 segundo
      if (hoverDuration > 1000) {
        gtag('event', 'service_card_hover', {
          'event_category': 'Engagement',
          'event_label': serviceTitle,
          'hover_duration_ms': hoverDuration
        });
      }

      hoverStartTime = null;
    }
  });
});

// Track CTA button clicks específicamente
document.querySelectorAll('.tile .cta-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const tile = button.closest('.tile');
    const serviceTitle = tile?.querySelector('.title')?.textContent;

    gtag('event', 'consult_expert_click', {
      'event_category': 'Conversion',
      'event_label': serviceTitle,
      'action_type': 'open_modal',
      'source': 'service_card'
    });
  });
});
```

---

## 📋 Orden de Implementación

### PASO 1: CSS (service-tiles.css)
1. Añadir color a H2 (línea ~50)
2. Añadir focus state para arrow (línea ~146)
3. Reemplazar badge con dorado (líneas 156-164)
4. Añadir `.tile:has(.tag)` styles
5. Añadir `.tile-footer` y `.cta-button` styles
6. Añadir `.proof-mini` styles
7. Añadir `.availability-badge` styles
8. Añadir media query @media (max-width: 360px)
9. Añadir hover premium con ::before

### PASO 2: HTML (index.html)
**Para cada tarjeta (líneas 344-393):**
1. Después de `<h3 class="title">`: añadir `.proof-mini`
2. Para diagnóstico: añadir `.availability-badge`
3. Antes de `</a>`: añadir `.tile-footer` con botón

**Estructura final**:
```
<a class="tile">
  <figure> (imagen) </figure>
  <div class="copy">
    <span class="tag">Most Popular</span> (solo diagnóstico)
    <h3 class="title">...</h3>
    <div class="proof-mini">★★★★★ 4.9 rated • stats</div>
    <div class="availability-badge">...</div> (solo diagnóstico)
    <p class="hint">...</p>
  </div>
  <div class="tile-footer">
    <button class="cta-button">Consulta con Experto</button>
  </div>
</a>
```

### PASO 3: JavaScript (scripts.js)
Después de línea 689 (red side widget):
1. Tracking GA4 para clics en tarjetas
2. Handler para botones "Consulta con Experto"
3. Tracking de hover time (opcional Fase 3)

### PASO 4: Verificación
1. ✅ Mobile (320px, 375px, 414px)
2. ✅ Tablet (768px, 1024px)
3. ✅ Desktop (1280px+)
4. ✅ Teclado (Tab + Enter)
5. ✅ Modal se abre correctamente
6. ✅ Eventos GA4 en consola
7. ✅ Lighthouse >90

---

## 📁 Archivos a Modificar

| Archivo | Líneas | Cambios |
|---------|--------|---------|
| **service-tiles.css** | 50-53 | Color H2 |
| | 146+ | Focus state arrow |
| | 156-164 | Badge dorado |
| | Final | Estilos nuevos (footer, button, proof-mini, etc.) |
| **index.html** | 347-358 | Tarjeta 1: proof-mini + availability + footer |
| | 366-377 | Tarjeta 2: proof-mini + footer |
| | 384-393 | Tarjeta 3: proof-mini + footer |
| **scripts.js** | 689+ | Tracking GA4 + handlers modal |

---

## 📊 Métricas de Éxito

**Baseline Actual**:
- Tiempo permanencia: ~1 minuto
- CTR tarjetas: No medido
- Conversión: Desconocida

**Objetivo**:
- Tiempo permanencia: 1.5-2 minutos (+50%)
- CTR con CTA visible: +25-40%
- Clics "Consulta con Experto": +15-25%
- Conversión embudo: +10-20%

---

## ⚠️ Notas Importantes

- **CRÍTICO**: CTA "Consulta con Experto" abre modal red side widget, NO llama por teléfono
- Seguir guidelines de `agents.md` (branch test)
- Mantener mobile-first
- Respetar WCAG 2.1 AA
- Preservar Lighthouse >90
- Implementar fases incrementalmente si es necesario

---

## 🔗 Referencias

- **Plan original**: `/Users/EPARDOSAENZ/.claude/plans/floofy-weaving-riddle.md`
- **Sección HTML**: `index.html:335-395`
- **Estilos**: `service-tiles.css:1-261`
- **Scripts**: `scripts.js:584-689`
- **Documentación**: `agents.md` (branch test)

---

**Última actualización**: 2026-02-05
**Status**: ✅ Plan aprobado, listo para implementación
