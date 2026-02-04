const HF_TOKEN = "PASTE_YOUR_TOKEN_HERE";

/*
==========================================================================
SECCIÓN: LÓGICA JAVASCRIPT
==========================================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  /*
  ----------------------------------------------------------------------
  FUNCIONALIDAD 1: Menú de Navegación Móvil
  ----------------------------------------------------------------------
  */

  const menuTrigger = document.querySelector(".kpem-menu-trigger");
  const menuCloseButton = document.querySelector(".menu-close-button");

  console.log("DEBUG: Estado inicial del menú", {
    botonHamburguesa: menuTrigger,
    botonCerrar: menuCloseButton
  });

  function openMenu() {
    console.log("DEBUG: openMenu() ejecutado. Añadiendo clase...");
    document.body.classList.add("menu-is-open");
    menuTrigger.setAttribute("aria-expanded", "true");
    console.log("DEBUG: Clase 'menu-is-open' debería estar en body:", document.body.classList.contains("menu-is-open"));
  }

  function closeMenu() {
    document.body.classList.remove("menu-is-open");
    menuTrigger.setAttribute("aria-expanded", "false");
  }

  if (menuTrigger) {
    console.log("DEBUG: Listener de click añadido al botón hamburguesa");
    menuTrigger.addEventListener("click", openMenu);
  } else {
    console.error("DEBUG: ERROR - No se encontró .kpem-menu-trigger en el DOM");
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", closeMenu);
  }

  const mobileMenu = document.querySelector("#mobile-navigation");
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /*
  ----------------------------------------------------------------------
  FUNCIONALIDAD 2: Botón Flotante CTA
  ----------------------------------------------------------------------
  */

  const floatingCtaContainer = document.querySelector(".floating-cta-container");

  if (floatingCtaContainer) {
    const computedDisplay = window
      .getComputedStyle(floatingCtaContainer)
      .getPropertyValue("display");
    const visibleDisplay =
      computedDisplay && computedDisplay !== "none" ? computedDisplay : "flex";

    const baseTransition = floatingCtaContainer.style.transition
      ? `${floatingCtaContainer.style.transition}, opacity 0.3s ease, transform 0.3s ease`
      : "opacity 0.3s ease, transform 0.3s ease";

    floatingCtaContainer.style.transition = baseTransition;
    floatingCtaContainer.style.display = "none";

    const threshold = 300; // Only show after scrolling past the Hero
    let isVisible = false;
    let idleTimer = null;
    const idleDelay = 2000;

    const showCTA = () => {
      if (!isVisible) {
        floatingCtaContainer.style.display = visibleDisplay;
        requestAnimationFrame(() => {
          floatingCtaContainer.style.opacity = "1";
          floatingCtaContainer.style.transform = "translateY(0)";
        });
        isVisible = true;
      } else {
        floatingCtaContainer.style.opacity = "1";
        floatingCtaContainer.style.transform = "translateY(0)";
      }
    };

    const hideCTA = () => {
      if (!isVisible) return;

      floatingCtaContainer.style.opacity = "0";
      floatingCtaContainer.style.transform = "translateY(12px)";
      isVisible = false;
      clearTimeout(idleTimer);

      setTimeout(() => {
        if (!isVisible) {
          floatingCtaContainer.style.display = "none";
        }
      }, 300);
    };

    const dimCTA = () => {
      if (!isVisible) return;
      floatingCtaContainer.style.opacity = "0.35";
      floatingCtaContainer.style.transform = "translateY(6px)";
    };

    const resetIdleTimer = () => {
      if (!isVisible) return;
      floatingCtaContainer.style.opacity = "1";
      floatingCtaContainer.style.transform = "translateY(0)";
      clearTimeout(idleTimer);
      idleTimer = setTimeout(dimCTA, idleDelay);
    };

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        showCTA();
        resetIdleTimer();
      } else {
        hideCTA();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    ["touchstart", "click"].forEach(evt => {
      floatingCtaContainer.addEventListener(evt, resetIdleTimer);
    });
  }
});

/*
==========================================================================
SECCIÓN: AI DIAGNOSTIC FUNNEL LOGIC
==========================================================================
*/

let currentLead = {
  name: '',
  contact: '',
  vehicle: '',
  symptoms: '',
  urgency: ''
};

function openDiagModal() {
  const modal = document.getElementById('diag-modal');
  if (modal) {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Enhanced GA4 Tracking - Modal Opened
    if (typeof gtag === 'function') {
      gtag('event', 'widget_clicked', {
        'event_category': 'Lead Generation',
        'event_label': 'Red Side Widget - Ask a Mechanic',
        'widget_position': 'side_right',
        'funnel_step': 'modal_open'
      });
    }
  }
}

function closeDiagModal() {
  const modal = document.getElementById('diag-modal');
  if (modal) {
    // Track abandonment before closing
    const currentStep = document.querySelector('.diag-step[style*="display: block"], .diag-step:not([style*="display: none"])');
    const stepNumber = currentStep ? currentStep.id.replace('diag-step-', '') : '1';

    const hasName = currentLead.name ? 'yes' : 'no';
    const hasVehicle = currentLead.vehicle ? 'yes' : 'no';

    if (typeof gtag === 'function') {
      gtag('event', 'form_abandon', {
        'event_category': 'Lead Generation',
        'event_label': `Abandoned at Step ${stepNumber}`,
        'funnel_step': `step_${stepNumber}_abandon`,
        'has_contact_info': hasName,
        'has_vehicle_info': hasVehicle
      });
    }

    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

async function diagNext(step) {
  // Capture current step data
  if (step === 2) {
    currentLead.name = document.getElementById('diag-name').value;
    currentLead.contact = document.getElementById('diag-contact').value;

    if (!currentLead.name || !currentLead.contact) {
      alert("Please provide your name and contact info to continue.");
      return;
    }

    // LEAD PARCIAL: Captura contacto básico (importante para follow-up si abandonan el formulario)
    const result = await sendLeadToAdmin({
      name: currentLead.name,
      contact: currentLead.contact,
      type: "🟡 PARTIAL LEAD - Contact Only (May not complete form)"
    });

    // GA4 Tracking - Partial Lead Captured
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        'event_category': 'Lead Generation',
        'event_label': 'Partial Lead - Step 1 Complete',
        'funnel_step': 'step_1_complete',
        'lead_type': 'partial',
        'email_sent': result.success ? 'yes' : 'no'
      });
    }

    // Mostrar feedback discreto
    showLeadFeedback(result.success);

  } else if (step === 3) {
    currentLead.vehicle = document.getElementById('diag-vehicle').value;
    currentLead.symptoms = document.getElementById('diag-symptoms').value;
    currentLead.urgency = document.getElementById('diag-urgency').value;

    // Iniciar Análisis (Async)
    const placeholder = document.getElementById('diag-result-placeholder');
    if (placeholder) {
      placeholder.innerHTML = "<em>Procesando diagnóstico experto...</em>";
    }

    fetchAIAnalysis(currentLead);

    // LEAD COMPLETO: Toda la información capturada (listo para cotizar)
    const result = await sendLeadToAdmin({
      name: currentLead.name,
      contact: currentLead.contact,
      vehicle: currentLead.vehicle,
      symptoms: currentLead.symptoms,
      urgency: currentLead.urgency,
      type: "✅ COMPLETE LEAD - Full Info (Ready to Quote)"
    });

    // Mostrar feedback visual de envío
    showLeadFeedback(result.success);

    // TRACKING DETALLADO: Enviar datos completos a GA4 y Consola
    console.group("🚀 NUEVO LEAD CAPTURADO");
    console.log("Cliente:", currentLead.name);
    console.log("Contacto:", currentLead.contact);
    console.log("Vehículo:", currentLead.vehicle);
    console.log("Síntomas:", currentLead.symptoms);
    console.log("Urgencia:", currentLead.urgency);
    console.log("Email enviado:", result.success ? "✅ Sí" : "❌ No");
    console.groupEnd();

    // GA4 Tracking - Complete Lead (High-Value Conversion)
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        'event_category': 'Lead Generation',
        'event_label': 'Complete Lead - Step 2 Complete',
        'funnel_step': 'step_2_complete',
        'lead_type': 'complete',
        'urgency': currentLead.urgency,
        'email_sent': result.success ? 'yes' : 'no',
        'value': 150  // Estimated value of a complete lead in CAD
      });

      // Also send as conversion event for easier tracking
      gtag('event', 'conversion', {
        'event_category': 'Lead Generation',
        'event_label': 'Complete Diagnostic Lead',
        'send_to': 'G-1GDM77733G'
      });
    }
  }

  // Visual transition between steps
  const steps = document.querySelectorAll('.diag-step');
  steps.forEach(s => s.style.display = 'none');

  const nextStep = document.getElementById(`diag-step-${step}`);
  if (nextStep) {
    nextStep.style.display = 'block';
  }
}

/**
 * Envía el lead capturado por email usando FormSubmit.co
 * Los emails llegan directamente a info@kelownaprotechmobilemech.com
 */
async function sendLeadToAdmin(data) {
  const timestamp = new Date().toLocaleString();

  console.group("📬 ENVIANDO LEAD AL ADMINISTRADOR");
  console.log("Fecha:", timestamp);
  console.log("Nombre:", data.name);
  console.log("Contacto:", data.contact);
  console.log("Estado:", data.type || "Lead Completo");
  console.groupEnd();

  // Guardar en localStorage como backup
  const history = JSON.parse(localStorage.getItem('kpem_leads_history') || "[]");
  history.push({ ...data, timestamp: new Date().toISOString() });
  localStorage.setItem('kpem_leads_history', JSON.stringify(history));

  // Preparar datos para FormSubmit
  const formData = {
    name: data.name || 'No proporcionado',
    contact: data.contact || 'No proporcionado',
    vehicle: data.vehicle || 'No proporcionado',
    symptoms: data.symptoms || 'No proporcionado',
    urgency: data.urgency || 'No especificado',
    leadType: data.type || 'Lead Completo',
    timestamp: timestamp,
    _subject: `🚗 Nuevo Lead: ${data.name} - ${data.type || 'Diagnóstico Completo'}`,
    _template: 'table',
    _captcha: 'false'
  };

  try {
    const response = await fetch('https://formsubmit.co/info@kelownaprotechmobilemech.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('✅ Lead enviado exitosamente por email');
      return { success: true };
    } else {
      console.error('⚠️ Error al enviar lead:', response.status);
      return { success: false, error: 'Error del servidor' };
    }
  } catch (error) {
    console.error('❌ Error de red al enviar lead:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Muestra feedback visual discreto del envío del lead
 */
function showLeadFeedback(success) {
  // Crear o obtener elemento de feedback
  let feedbackEl = document.getElementById('lead-feedback');

  if (!feedbackEl) {
    feedbackEl = document.createElement('div');
    feedbackEl.id = 'lead-feedback';
    feedbackEl.className = 'lead-feedback-toast';
    document.body.appendChild(feedbackEl);
  }

  // Configurar mensaje y estilo
  if (success) {
    feedbackEl.textContent = '✅ Information sent successfully';
    feedbackEl.className = 'lead-feedback-toast success';
  } else {
    feedbackEl.textContent = '⚠️ Saved locally - we\'ll follow up';
    feedbackEl.className = 'lead-feedback-toast warning';
  }

  // Mostrar y ocultar después de 3 segundos
  feedbackEl.style.display = 'block';
  setTimeout(() => {
    feedbackEl.style.opacity = '1';
  }, 10);

  setTimeout(() => {
    feedbackEl.style.opacity = '0';
    setTimeout(() => {
      feedbackEl.style.display = 'none';
    }, 300);
  }, 3000);
}

/**
 * Fetches higher-authority analysis from Hugging Face Inference API.
 * Includes a 5-second timeout and CORS fallback.
 */
async function fetchAIAnalysis(data) {
  const placeholder = document.getElementById('diag-result-placeholder');
  const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";

  // Timeout para evitar esperas infinitas
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        inputs: `[SYS] You are a Master Mechanic in Kelowna. Analyze: ${data.symptoms} for a ${data.vehicle}. Respond in 3 short sentences using 'Chain Reaction' logic. [ANS]`,
        parameters: { max_new_tokens: 150, temperature: 0.7 }
      })
    });

    clearTimeout(timeoutId);

    if (!response.ok) throw new Error("API Offline or CORS");

    const result = await response.json();
    let aiText = result[0]?.generated_text || result.generated_text || "";

    if (aiText.includes("[ANS]")) {
      aiText = aiText.split("[ANS]").pop().trim();
    }

    if (placeholder) {
      displayExpertText(aiText || generateAIHypothesis(data.symptoms));
    }
  } catch (error) {
    clearTimeout(timeoutId);
    console.warn("🛡️ KPEM SAFE-MODE: El navegador bloqueó la IA (CORS). Activando Lógica Experta Local.");
    if (placeholder) {
      displayExpertText(generateAIHypothesis(data.symptoms));
    }
  }
}

/**
 * Muestra el texto con un ligero efecto de carga para que se sienta real.
 */
function displayExpertText(text) {
  const placeholder = document.getElementById('diag-result-placeholder');
  if (!placeholder) return;

  placeholder.innerHTML = "";
  let i = 0;
  placeholder.innerHTML = text; // Por ahora directo, pero con una clase de fade-in
  placeholder.style.opacity = 0;
  placeholder.style.transition = "opacity 0.5s ease-in";
  setTimeout(() => { placeholder.style.opacity = 1; }, 100);
}

/**
 * Generates a hypothetical diagnostic based on keywords in symptoms.
 * This is the "Value-First" logic used as a fallback.
 */
function generateAIHypothesis(symptoms) {
  const text = symptoms.toLowerCase();

  // Función ultra-sensible (maneja typos extremos como 'sart', 'art', 'stat', 'stert')
  const match = (keys) => keys.some(k => text.includes(k));

  let hypothesis = "";

  // CASO 1: No arranca + Silencio
  if (match(["art", "start", "stat", "prend", "crank", "encendido"]) && match(["silenc", "no noise", "nada", "nothing", "quiet"])) {
    hypothesis = "If the car remains in <strong>total silence</strong> when you turn the key, it typically indicates a complete break in the starting circuit. The 3 most likely causes are a <strong>dead battery</strong>, a <strong>failed starter motor</strong>, or <strong>corroded battery terminals</strong>.";
  }
  // CASO 2: Ruido clic pero no arranca
  else if (match(["art", "start", "stat", "prend", "crank"]) && match(["clic", "tick", "ruido", "sound"])) {
    hypothesis = "Rapid <strong>clicking sounds</strong> while trying to start usually mean the battery has enough power to trigger the solenoid but not enough to turn the engine. We would check for <strong>low voltage</strong> or <strong>starter failure</strong>.";
  }
  // CASO 3: Problemas generales de encendido
  else if (match(["art", "start", "stat", "prend", "bater", "battery", "crank"])) {
    hypothesis = "Since the vehicle <strong>won't start</strong>, our primary focus is the starting circuit. We can perform a professional load test on your battery and starter right in your driveway today.";
  }
  // ... rest of cases stay similar but with matched keys updated ...
  // CASO 4: Ruidos mecánicos
  else if (match(["noise", "ruido", "clicking", "ticking", "knock", "thump", "golpe"])) {
    hypothesis = "A <strong>mechanical noise</strong> often points to internal engine timing elements, accessory belt drive components, or suspension wear. We can perform a pinpoint test to find the exact source.";
  }
  // CASO 5: Frenos
  else if (match(["brake", "freno", "squeal", "grind", "shaking", "vibra"])) {
    hypothesis = "It sounds like your <strong>braking or suspension system</strong> needs attention. Grinding usually indicates worn pads hitting the rotors, which requires immediate replacement.";
  }
  // CASO 6: Luces de advertencia
  else if (match(["light", "luz", "check engine", "code", "dash", "testigo"])) {
    hypothesis = "A <strong>Check Engine Light</strong> is a report of an active fault code. We carry professional OBD-II scanners to translate these codes into a specific repair plan on-site.";
  }
  // CASO 7: Fugas / Humo / Olores
  else if (match(["leak", "fuga", "coolant", "smoke", "humo", "smell", "olor", "oil", "aceite"])) {
    hypothesis = "The symptoms point toward a potential <strong>fluid leak or overheating issue</strong>. To prevent engine damage, avoid driving and let us inspect the source at your location.";
  }
  // DEFAULT
  else {
    hypothesis = "While these symptoms are common, a <strong>Master Mechanic inspection</strong> is the best way to avoid 'parts cannon' guessing. We provide professional diagnostics to find the exact root cause.";
  }

  return `
    <div style="border-left: 4px solid #E6B43C; padding-left: 15px; background: #f9f9f9; padding: 15px; border-radius: 8px;">
      <p style="margin: 0; color: #1e293b; line-height: 1.6;">${hypothesis}</p>
      <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;">
      <p style="margin: 0; font-weight: 700; color: #111;">Expert Recommendation:</p>
      <p style="margin: 5px 0 0; color: #444;">Joseph and the team can handle this repair today <strong>directly in your driveway</strong>. Text or call us below to lock in a time.</p>
    </div>
  `;
}


/*
==========================================================================
HERO TESTIMONIAL CAROUSEL - Auto-rotating con pausa en hover/touch
==========================================================================
*/
(function () {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselLink = document.querySelector('.hero-carousel-link');

  if (carouselItems.length === 0 || !carouselLink) return;

  let currentIndex = 0;
  let intervalId = null;
  let isPaused = false;

  function showNextTestimonial() {
    if (isPaused) return;

    // Remove active class from current
    carouselItems[currentIndex].classList.remove('active');

    // Move to next (loop back to 0 if at end)
    currentIndex = (currentIndex + 1) % carouselItems.length;

    // Add active class to new current
    carouselItems[currentIndex].classList.add('active');
  }

  // Start auto-rotation every 4 seconds
  function startRotation() {
    if (!intervalId) {
      intervalId = setInterval(showNextTestimonial, 4000);
    }
  }

  // Pause on hover (desktop)
  carouselLink.addEventListener('mouseenter', function () {
    isPaused = true;
  });

  carouselLink.addEventListener('mouseleave', function () {
    isPaused = false;
  });

  // Pause on touch/click (mobile)
  carouselLink.addEventListener('touchstart', function () {
    isPaused = true;
  });

  carouselLink.addEventListener('touchend', function () {
    setTimeout(function () {
      isPaused = false;
    }, 2000); // Resume after 2 seconds
  });

  // Start the rotation
  startRotation();
})();


/*
==========================================================================
TRACKING: PHONE & SMS CLICKS (GA4 Conversion Events)
==========================================================================
Tracks all tel: and sms: link clicks across the entire site.
Critical for measuring conversion sources (Website vs GMB).
*/

document.addEventListener('DOMContentLoaded', function () {
  // Track all tel: links (phone clicks)
  const telLinks = document.querySelectorAll('a[href^="tel:"]');

  telLinks.forEach(link => {
    link.addEventListener('click', function () {
      const phoneNumber = this.getAttribute('href');
      const linkText = this.textContent.trim();
      const linkClass = this.className;

      // Send event to GA4
      if (typeof gtag === 'function') {
        gtag('event', 'phone_click', {
          'event_category': 'conversion',
          'event_label': linkText || 'Phone Click',
          'phone_number': phoneNumber,
          'link_class': linkClass,
          'page_location': window.location.pathname
        });
      }

      // Console log for debugging
      console.group('📞 PHONE CLICK TRACKED');
      console.log('Number:', phoneNumber);
      console.log('Link Text:', linkText);
      console.log('Page:', window.location.pathname);
      console.log('Class:', linkClass);
      console.groupEnd();
    });
  });

  // Track all sms: links (SMS clicks)
  const smsLinks = document.querySelectorAll('a[href^="sms:"]');

  smsLinks.forEach(link => {
    link.addEventListener('click', function () {
      const phoneNumber = this.getAttribute('href');
      const linkText = this.textContent.trim();
      const linkClass = this.className;

      // Send event to GA4
      if (typeof gtag === 'function') {
        gtag('event', 'sms_click', {
          'event_category': 'conversion',
          'event_label': linkText || 'SMS Click',
          'phone_number': phoneNumber,
          'link_class': linkClass,
          'page_location': window.location.pathname
        });
      }

      // Console log for debugging
      console.group('💬 SMS CLICK TRACKED');
      console.log('Number:', phoneNumber);
      console.log('Link Text:', linkText);
      console.log('Page:', window.location.pathname);
      console.log('Class:', linkClass);
      console.groupEnd();
    });
  });

  // Summary log on page load
  console.group('🎯 CONVERSION TRACKING INITIALIZED');
  console.log(`Phone links tracked: ${telLinks.length}`);
  console.log(`SMS links tracked: ${smsLinks.length}`);
  console.log('Events will be sent to GA4 on click');
  console.groupEnd();
});


/*
==========================================================================
DIAGNOSTIC WIDGET FLOTANTE - Show/Hide based on scroll
==========================================================================
Similar to floating CTA, but specific for diagnostic modal trigger
*/

document.addEventListener('DOMContentLoaded', function () {
  const widget = document.getElementById('diagnostic-widget-btn');

  if (!widget) return;

  const threshold = 400; // Show after scrolling 400px
  let isVisible = false;

  function checkScroll() {
    if (window.scrollY > threshold && !isVisible) {
      widget.style.display = 'flex';
      requestAnimationFrame(() => {
        widget.style.opacity = '1';
        widget.style.transform = 'translateY(0) scale(1)';
      });
      isVisible = true;
    } else if (window.scrollY <= threshold && isVisible) {
      widget.style.opacity = '0';
      widget.style.transform = 'translateY(20px) scale(0.8)';
      isVisible = false;
      setTimeout(() => {
        if (!isVisible) widget.style.display = 'none';
      }, 300);
    }
  }

  // WIDGET IS NOW ALWAYS VISIBLE - Scroll logic removed for "Ask a Mechanic" side button
  // window.addEventListener('scroll', checkScroll);
  // checkScroll(); // Check on load
  checkScroll(); // Check on load
});
