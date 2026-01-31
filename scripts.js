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

function openDiagnosticModal() {
  const modal = document.getElementById('diag-modal');
  if (modal) {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // GA4 Tracking
    if (typeof gtag === 'function') {
      gtag('event', 'diagnostic_start', {
        'event_category': 'engagement',
        'event_label': 'AI_Diagnostic_Button'
      });
    }
  }
}

function closeDiagModal() {
  const modal = document.getElementById('diag-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function diagNext(step) {
  // Capture current step data
  if (step === 2) {
    currentLead.name = document.getElementById('diag-name').value;
    currentLead.contact = document.getElementById('diag-contact').value;
    
    if (!currentLead.name || !currentLead.contact) {
      alert("Please provide your name and contact info to continue.");
      return;
    }
    
    // ENVIAR LEAD AL INSTANTE (Captura temprana antes de que cierren el modal)
    sendLeadToAdmin({
      name: currentLead.name,
      contact: currentLead.contact,
      type: "Early Lead (Step 1 Complete)"
    });
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

    // TRACKING DETALLADO: Enviar datos completos a GA4 y Consola
    console.group("🚀 NUEVO LEAD CAPTURADO");
    console.log("Cliente:", currentLead.name);
    console.log("Contacto:", currentLead.contact);
    console.log("Vehículo:", currentLead.vehicle);
    console.log("Síntomas:", currentLead.symptoms);
    console.log("Urgencia:", currentLead.urgency);
    console.groupEnd();

    if (typeof gtag === 'function') {
      gtag('event', 'lead_form_submitted', {
        'event_category': 'conversion',
        'event_label': 'AI_Diagnostic_Funnel',
        'user_name': currentLead.name,
        'user_contact': currentLead.contact
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
 * Captura el lead de forma inmediata para que Jose Edwin no pierda el contacto.
 * Próximo paso: Conectar con Google Sheets o EmailJS.
 */
function sendLeadToAdmin(data) {
  console.group("📬 LEAD ENVIADO AL ADMINISTRADOR (Simulación)");
  console.log("Fecha:", new Date().toLocaleString());
  console.log("Nombre:", data.name);
  console.log("Contacto:", data.contact);
  console.log("Estado:", data.type || "Lead Completo");
  console.groupEnd();

  // Guardar en una lista persistente de la sesión por si acaso
  const history = JSON.parse(localStorage.getItem('kpem_leads_history') || "[]");
  history.push({ ...data, timestamp: new Date().toISOString() });
  localStorage.setItem('kpem_leads_history', JSON.stringify(history));
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
(function() {
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
  carouselLink.addEventListener('mouseenter', function() {
    isPaused = true;
  });

  carouselLink.addEventListener('mouseleave', function() {
    isPaused = false;
  });

  // Pause on touch/click (mobile)
  carouselLink.addEventListener('touchstart', function() {
    isPaused = true;
  });

  carouselLink.addEventListener('touchend', function() {
    setTimeout(function() {
      isPaused = false;
    }, 2000); // Resume after 2 seconds
  });

  // Start the rotation
  startRotation();
})();
