# FASE 1 - TESTING GUIDE
## Tracking de Conversiones: Phone & SMS Clicks

**Fecha:** 2 febrero 2026
**Branch:** `feature/fase1-tracking-setup`
**Objetivo:** Verificar que todos los clicks en tel: y sms: se trackean correctamente en GA4

---

## 📋 PRE-REQUISITOS

- ✅ Servidor local corriendo en `http://localhost:8000`
- ✅ Navegador con DevTools (Chrome, Firefox, Safari)
- ✅ Google Analytics 4 configurado (tag debe estar presente en el sitio)

---

## 🧪 TEST 1: Verificar Inicialización del Tracking

**Pasos:**

1. Abre tu navegador y navega a: `http://localhost:8000`

2. Abre la Consola de Desarrollador:
   - **Mac:** `Cmd + Option + I`
   - **Windows/Linux:** `F12` o `Ctrl + Shift + I`

3. Ve a la pestaña "Console"

4. Busca el mensaje:
   ```
   🎯 CONVERSION TRACKING INITIALIZED
     Phone links tracked: 5
     SMS links tracked: 3
     Events will be sent to GA4 on click
   ```

**✅ RESULTADO ESPERADO:**
- Debes ver el mensaje de inicialización
- Conteo debe ser: **5 phone links** y **3 SMS links** en homepage

**❌ SI FALLA:**
- Verifica que `scripts.js` se cargó correctamente
- Revisa errores en la consola
- Asegúrate de que estás en `http://localhost:8000` (no `file://`)

---

## 🧪 TEST 2: Click en Botón de Teléfono (Hero Section)

**Pasos:**

1. En `http://localhost:8000`, localiza el botón amarillo grande:
   **"Fix My Car Today — (250) 859-5467"**

2. **NO hagas click aún** - primero limpia la consola (botón 🚫 o `Cmd+K`)

3. Haz click en el botón amarillo

4. Observa la consola inmediatamente

**✅ RESULTADO ESPERADO:**
```
📞 PHONE CLICK TRACKED
  Number: tel:+12508595467
  Link Text: Fix My Car Today — (250) 859-5467
  Page: /
  Class: hero-cta-button-premium hero-cta-call
```

**Además, en GA4 (si está configurado):**
- Evento: `phone_click`
- Event Category: `conversion`
- Event Label: "Fix My Car Today — (250) 859-5467"
- Phone Number: `tel:+12508595467`

---

## 🧪 TEST 3: Click en Botón de SMS (Hero Section)

**Pasos:**

1. En `http://localhost:8000`, localiza el botón blanco:
   **"Text Us"**

2. Limpia la consola

3. Haz click en el botón "Text Us"

4. Observa la consola

**✅ RESULTADO ESPERADO:**
```
💬 SMS CLICK TRACKED
  Number: sms:+12508595467
  Link Text: Text Us
  Page: /
  Class: hero-cta-button-secondary hero-cta-sms
```

**Además, en GA4 (si está configurado):**
- Evento: `sms_click`
- Event Category: `conversion`
- Event Label: "Text Us"
- Phone Number: `sms:+12508595467`

---

## 🧪 TEST 4: Click en Floating CTA

**Pasos:**

1. En `http://localhost:8000`, scrollea hacia abajo **más de 300px**
   (el floating CTA aparece después del hero)

2. Espera 2 segundos (para que el CTA aparezca)

3. Localiza el botón flotante en la parte inferior:
   **"Call an Expert Now"**

4. Limpia consola y haz click

**✅ RESULTADO ESPERADO:**
```
📞 PHONE CLICK TRACKED
  Number: tel:+12508595467
  Link Text: Call an Expert Now
  Page: /
  Class: main-cta-button
```

---

## 🧪 TEST 5: Links en Service Pages

**Pasos:**

1. Navega a: `http://localhost:8000/services/diagnostic/`

2. Abre la consola y verifica inicialización:
   ```
   🎯 CONVERSION TRACKING INITIALIZED
     Phone links tracked: 2
     SMS links tracked: 1
   ```

3. Localiza y haz click en **"Text Us Now"** (botón CTA)

4. Verifica en consola:
   ```
   💬 SMS CLICK TRACKED
     Number: sms:+12508595467
     Link Text: Text Us Now
     Page: /services/diagnostic/
     Class: cta
   ```

**Repite para:**
- `/services/pre-purchase/` (2 tel, 1 sms esperado)
- `/services/maintenance/` (2 tel, 1 sms esperado)

---

## 🧪 TEST 6: Verificar Eventos en GA4 Real-Time

**IMPORTANTE:** Este test solo funciona si estás en el sitio LIVE (no localhost), porque GA4 necesita el dominio real.

**Pasos:**

1. Ve a Google Analytics 4 dashboard

2. Click en **"Reports" → "Realtime"**

3. En otra pestaña, abre tu sitio web LIVE (no localhost)

4. Haz click en un botón de teléfono

5. Regresa a GA4 → Realtime

6. En "Event count by Event name", busca:
   - `phone_click` (debe aparecer con count 1)
   - O `sms_click` si hiciste click en SMS

**✅ RESULTADO ESPERADO:**
- Evento aparece en GA4 Realtime en 5-10 segundos
- Event parameters incluyen: `event_category`, `event_label`, `phone_number`

**❌ SI NO APARECE:**
- Verifica que GA4 tag está instalado (busca `gtag` en el código fuente)
- Revisa la consola de errores
- Asegúrate de estar en el sitio LIVE (no localhost)

---

## 📊 RESUMEN: Links Trackeados por Página

| Página | Tel: Links | SMS: Links | Total |
|--------|------------|------------|-------|
| `/` (Homepage) | 5 | 3 | 8 |
| `/services/diagnostic/` | 2 | 1 | 3 |
| `/services/pre-purchase/` | 2 | 1 | 3 |
| `/services/maintenance/` | 2 | 1 | 3 |
| **TOTAL** | **11** | **6** | **17** |

---

## 🐛 TROUBLESHOOTING

### Problema: No veo mensajes en consola

**Soluciones:**
1. Verifica que estás en la pestaña "Console" (no "Network" o "Elements")
2. Asegúrate de que no hay filtros activos en la consola
3. Recarga la página con `Cmd+Shift+R` (hard reload)
4. Verifica que `scripts.js` se cargó (pestaña "Network")

### Problema: Eventos no llegan a GA4

**Soluciones:**
1. Verifica que el tag de GA4 está presente en `<head>` del HTML
2. Busca `gtag('config', 'G-XXXXXXXXXX')` en el código fuente
3. Usa la extensión "Google Analytics Debugger" para Chrome
4. Revisa la consola de errores (pueden haber bloqueadores de ads)

### Problema: `gtag is not defined`

**Soluciones:**
1. El tag de Google Analytics no está cargado
2. Verifica internet connection
3. Verifica que no hay ad blockers activos
4. Los eventos se logean en consola de todos modos (no se pierde data)

---

## ✅ CHECKLIST FINAL

Antes de marcar Tarea 1 como completa, verifica:

- [ ] Mensaje de inicialización aparece en homepage
- [ ] Mensaje de inicialización aparece en service pages
- [ ] Click en tel: genera log en consola
- [ ] Click en sms: genera log en consola
- [ ] Conteo de links es correcto (11 tel, 6 sms total)
- [ ] No hay errores en consola JavaScript
- [ ] (Opcional) Eventos aparecen en GA4 Realtime

---

## 📝 PRÓXIMOS PASOS

Una vez verificado el tracking:

1. **Hacer commit de los cambios:**
   ```bash
   git add scripts.js TESTING-FASE1.md
   git commit -m "FEAT: Implement phone & SMS click tracking for GA4 conversion measurement"
   ```

2. **Tarea 2: Configurar conversiones en GA4**
   - Marcar `phone_click` como conversión
   - Marcar `sms_click` como conversión
   - Crear custom reports

3. **Deploy a production:**
   - Solo DESPUÉS de verificar que todo funciona en localhost
   - Merge a `main` y push a Netlify
   - Verificar eventos en GA4 Realtime en sitio LIVE

---

**Documento creado:** 2 febrero 2026
**Última actualización:** 2 febrero 2026
**Status:** Testing en progreso
