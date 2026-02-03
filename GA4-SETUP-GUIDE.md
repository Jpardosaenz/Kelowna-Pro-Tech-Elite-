# GA4 CONVERSIONS SETUP GUIDE
## Configurar phone_click y sms_click como Conversiones

**Fecha:** 2 febrero 2026
**Parte de:** FASE 1 - MEDICIÓN (Semana 1, Tarea 2/5)
**Tiempo estimado:** 15-20 minutos

---

## 🎯 OBJETIVO

Marcar los eventos `phone_click` y `sms_click` como **conversiones** en Google Analytics 4 para que puedas:
1. Ver cuántos leads genera el sitio web
2. Comparar conversiones por canal (Organic, Direct, GMB)
3. Crear reports personalizados de conversiones
4. Analizar qué páginas generan más conversiones

---

## 📋 PRE-REQUISITOS

- ✅ Acceso a Google Analytics 4 dashboard
- ✅ Permisos de "Editor" o "Administrador" en la propiedad GA4
- ✅ Los cambios de código ya están en producción (después de deploy)
- ⚠️ **IMPORTANTE:** Esta configuración SOLO funciona después de que al menos 1 evento haya sido enviado a GA4

---

## 🚀 PASO 1: Acceder a Google Analytics 4

1. Ve a: [https://analytics.google.com](https://analytics.google.com)

2. En la columna izquierda, selecciona la propiedad correcta:
   - **Nombre:** (busca el nombre de tu propiedad GA4 de KPEMM)
   - **ID:** Debería empezar con `G-` (ej: `G-XXXXXXXXXX`)

3. Asegúrate de estar en la vista correcta:
   - Esquina superior izquierda debe decir el nombre de tu sitio web

---

## 🚀 PASO 2: Ir a Configuración de Conversiones

1. En el menú lateral izquierdo, haz click en **"Admin"** (ícono de engranaje ⚙️)

2. En la columna del medio (**Property**), busca y haz click en:
   **"Events"**

3. Deberías ver una lista de eventos que GA4 ha recibido

**¿No ves eventos?**
- Si el sitio aún no está en producción, los eventos no aparecerán
- Necesitas hacer deploy primero y que al menos 1 usuario real haga click
- Alternativamente, remueve el filtro de IP temporalmente y tú mismo haz click

---

## 🚀 PASO 3: Marcar phone_click como Conversión

1. En la lista de eventos, busca el evento: **`phone_click`**

   **¿No aparece `phone_click` aún?**
   - El sitio debe estar en producción
   - Al menos 1 usuario debe haber hecho click en un botón de teléfono
   - Los eventos pueden tardar hasta 24 horas en aparecer en la lista
   - **Opción rápida:** Remueve filtro de IP, abre el sitio en producción, haz click en tel:, espera 5 minutos, recarga esta página

2. Una vez que veas `phone_click` en la lista:
   - A la derecha del nombre del evento, verás un toggle (interruptor)
   - **Activa el toggle** (debe ponerse azul)

3. Aparecerá un mensaje de confirmación:
   **"Mark phone_click as conversion?"**
   - Haz click en **"Mark as conversion"**

4. Deberías ver un checkmark ✓ o la palabra **"Conversion"** junto al evento

**✅ RESULTADO:** `phone_click` ahora es una conversión

---

## 🚀 PASO 4: Marcar sms_click como Conversión

Repite el mismo proceso para `sms_click`:

1. En la lista de eventos, busca: **`sms_click`**

2. Activa el toggle a la derecha del nombre

3. Confirma: **"Mark as conversion"**

4. Verifica que aparezca el checkmark ✓

**✅ RESULTADO:** `sms_click` ahora es una conversión

---

## 🚀 PASO 5: Verificar Conversiones

1. En el menú **Admin** (⚙️), ve a la columna del medio (**Property**)

2. Haz click en **"Conversions"**

3. Deberías ver una lista con AL MENOS estos 2 eventos:
   - ✅ `phone_click`
   - ✅ `sms_click`

**Nota:** Puede haber otros eventos de conversión predeterminados como:
- `purchase` (si tienes e-commerce)
- `first_visit`
- `session_start`

Eso es normal. No los elimines a menos que sepas lo que haces.

---

## 🚀 PASO 6: Crear Custom Report de Conversiones por Fuente

Ahora que las conversiones están configuradas, vamos a crear un report para ver de dónde vienen.

### 6.1: Ir a Explorations

1. En el menú lateral izquierdo, haz click en **"Explore"**

2. En la esquina superior izquierda, haz click en el botón **"Blank"** (crear reporte en blanco)

3. Dale un nombre al reporte:
   **"Conversions by Source/Medium - KPEMM"**

### 6.2: Configurar Dimensiones

1. En el panel derecho, sección **"DIMENSIONS"**, haz click en el **"+"**

2. Busca y selecciona estas dimensiones (usa el buscador):
   - ✅ `Session source` (o `First user source`)
   - ✅ `Session medium` (o `First user medium`)
   - ✅ `Page location` (opcional, para ver qué páginas convierten)
   - ✅ `Event name`

3. Haz click en **"Import"**

### 6.3: Configurar Métricas

1. En el panel derecho, sección **"METRICS"**, haz click en el **"+"**

2. Busca y selecciona:
   - ✅ `Conversions` (métrica principal)
   - ✅ `Event count`
   - ✅ `Sessions`

3. Haz click en **"Import"**

### 6.4: Armar la Tabla

1. En el centro de la pantalla, sección **"TAB SETTINGS"**:
   - **Technique:** Selecciona **"Free form"**

2. Arrastra las dimensiones importadas a **"ROWS"**:
   - Arrastra `Session source` a ROWS
   - Arrastra `Session medium` debajo de `Session source` (para jerarquía)

3. Arrastra las métricas a **"VALUES"**:
   - Arrastra `Conversions` a VALUES
   - Arrastra `Event count` a VALUES
   - Arrastra `Sessions` a VALUES

4. Agrega un filtro para ver SOLO conversiones de phone/sms:
   - En **"FILTERS"**, haz click en el **"+"**
   - Dimension: `Event name`
   - Match type: `exactly matches (OR)`
   - Values:
     - `phone_click`
     - `sms_click`
   - Haz click en **"Apply"**

### 6.5: Resultado Esperado

Deberías ver una tabla que muestra:

| Session source | Session medium | Conversions | Event count | Sessions |
|----------------|----------------|-------------|-------------|----------|
| google | organic | 5 | 5 | 20 |
| (direct) | (none) | 3 | 3 | 10 |
| google | cpc | 0 | 0 | 5 |

**Interpretación:**
- **google / organic:** 5 conversiones de búsqueda orgánica en Google
- **(direct) / (none):** 3 conversiones de tráfico directo (puede incluir GMB)
- **google / cpc:** 0 conversiones de ads (si corres ads)

---

## 🚀 PASO 7: Crear Report de Conversiones por Página

Este report te muestra QUÉ páginas generan más conversiones.

1. Crea otro **"Blank"** exploration

2. Nombre: **"Conversions by Page - KPEMM"**

3. **DIMENSIONS:**
   - `Page location` (o `Page path`)
   - `Event name`

4. **METRICS:**
   - `Conversions`
   - `Event count`

5. En **ROWS**, arrastra:
   - `Page location`

6. En **VALUES**, arrastra:
   - `Conversions`
   - `Event count`

7. **FILTERS:**
   - Dimension: `Event name`
   - Match: `exactly matches (OR)`
   - Values: `phone_click`, `sms_click`

**Resultado esperado:**

| Page location | Conversions | Event count |
|---------------|-------------|-------------|
| / | 8 | 8 |
| /services/diagnostic/ | 2 | 2 |
| /services/pre-purchase/ | 1 | 1 |

**Interpretación:**
- Homepage genera 8 conversiones (la mayoría)
- Service pages generan pocas (problema de tráfico o UX)

---

## 📊 PASO 8: Verificar en Realtime (Opcional)

Para testear que los eventos llegan correctamente en producción:

1. Ve a **"Reports"** → **"Realtime"**

2. En otra pestaña, abre tu sitio en producción (no localhost)

3. Haz click en un botón de teléfono

4. Regresa a GA4 → Realtime

5. En **"Event count by Event name"**, deberías ver:
   - `phone_click` con count 1 (aparece en 5-10 segundos)

6. En **"Conversions"** (sección inferior), deberías ver:
   - `phone_click` con count 1

**✅ Si aparece:** Todo funciona correctamente

**❌ Si no aparece:**
- Verifica que el sitio esté en producción (no localhost)
- Verifica que GA4 tag esté presente (view source, busca `gtag`)
- Revisa la consola del navegador por errores
- Verifica que no tengas ad blockers activos

---

## 🎯 CHECKLIST FINAL

Antes de marcar Tarea 2 como completa, verifica:

- [ ] `phone_click` está marcado como conversión en GA4
- [ ] `sms_click` está marcado como conversión en GA4
- [ ] Ambos aparecen en la lista de **"Conversions"** en Admin
- [ ] Creaste el report **"Conversions by Source/Medium"**
- [ ] Creaste el report **"Conversions by Page"**
- [ ] (Opcional) Verificaste que eventos aparecen en Realtime

---

## 🔧 TROUBLESHOOTING

### Problema: No veo los eventos phone_click o sms_click en la lista

**Soluciones:**
1. **Asegúrate de que el sitio esté en producción**
   - Los cambios deben estar deployed a Netlify
   - No funcionará en localhost si GA4 tag no está configurado para dev

2. **Verifica que al menos 1 evento haya sido enviado**
   - Pídele a alguien (sin filtro de IP) que abra el sitio y haga click
   - O remueve tu filtro de IP temporalmente

3. **Espera hasta 24 horas**
   - Los eventos pueden tardar en aparecer en la lista de Events
   - Pero aparecen en Realtime inmediatamente

4. **Verifica el código en producción**
   ```bash
   curl https://kpemm.ca/ | grep "phone_click"
   ```
   Deberías ver el código de tracking en el HTML

### Problema: Los eventos aparecen pero no puedo marcarlos como conversión

**Soluciones:**
1. **Verifica permisos:**
   - Necesitas rol de "Editor" o "Administrador" en GA4
   - Si eres "Viewer", no puedes crear conversiones

2. **Verifica que no estén ya marcados:**
   - Ve a Admin → Conversions
   - Si ya están ahí, ya funcionan (no necesitas hacer nada más)

### Problema: El report muestra 0 conversiones

**Soluciones:**
1. **Verifica el rango de fechas:**
   - En la esquina superior derecha del report
   - Asegúrate de que incluya las fechas donde hubo eventos

2. **Verifica los filtros:**
   - Asegúrate de que `Event name` tenga `phone_click` y `sms_click` correctos

3. **Espera más datos:**
   - Si recién deployaste, puede tomar horas/días tener datos suficientes

---

## 📝 PRÓXIMOS PASOS

Una vez completada esta tarea:

1. **Documentar configuración:**
   - Toma screenshots de tus reports
   - Guarda los links de los reports para acceso rápido

2. **Tarea 3: Verificar tracking del modal de diagnóstico**
   - Testear si el modal se abre
   - Verificar si `diagnostic_start` se dispara
   - Arreglar si no funciona

3. **Deploy a producción (si no lo has hecho):**
   - Merge branch `feature/fase1-tracking-setup` a `main`
   - Push a Netlify
   - Verificar que todo funciona en producción

---

## 💡 TIPS PRO

### Crear Alertas de Conversiones

1. Ve a **Admin** → **Custom Alerts**

2. Crea una alerta:
   - **Condition:** `Conversions` (phone_click + sms_click)
   - **Threshold:** Menor a 3 conversiones por día
   - **Notification:** Email diario

**Beneficio:** Sabrás inmediatamente si las conversiones caen

### Agregar Conversiones al Dashboard Principal

1. Ve a **Reports** → **Engagement** → **Overview**

2. Haz click en el ícono de lápiz (edit) en la esquina superior derecha

3. Agrega una tarjeta:
   - **Metric:** `Conversions`
   - **Filter:** Event name = phone_click o sms_click

**Beneficio:** Verás conversiones en el dashboard principal sin entrar a reports personalizados

### Crear Segmento de Usuarios que Convierten

1. Ve a **Explore** → **User explorer**

2. Crea un segmento:
   - **Name:** "Users who called/texted"
   - **Condition:** Event name = phone_click OR sms_click

**Beneficio:** Analizar el journey completo de usuarios que convierten

---

**Documento creado:** 2 febrero 2026
**Última actualización:** 2 febrero 2026
**Status:** Listo para implementar
**Tiempo estimado:** 15-20 minutos
