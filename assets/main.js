// Clube Multi Trader - JS (GitHub Pages)
(function () {
  // Ajuste se mudar nome do repositório:
  const SITE_BASE = "/clube-multi-trader-site";

  // Helpers
  const $ = (sel) => document.querySelector(sel);

  // Fix asset links base (opcional, mas útil se você quiser usar data-href no futuro)
  window.CMT = { SITE_BASE };

  // Mobile menu
  function initMobileMenu() {
    const btn = $("#navToggle");
    const mobile = $("#navMobile");
    if (!btn || !mobile) return;

    btn.addEventListener("click", () => {
      mobile.classList.toggle("open");
    });

    // fecha ao clicar em qualquer link
    mobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobile.classList.remove("open"));
    });
  }

  // Clock
  function initClock() {
    const timeEl = $("#clock-time");
    const dateEl = $("#clock-date");
    if (!timeEl || !dateEl) return;

    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      timeEl.textContent = `${h}:${m}:${s}`;

      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      dateEl.textContent = now.toLocaleDateString("pt-BR", options);
    }

    updateClock();
    setInterval(updateClock, 1000);
  }

  // Optional: auto highlight active nav (simples)
  function markActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.remove("active"));

    const map = [
      { key: "home", match: /\/clube-multi-trader-site\/($|index\.html$)/ },
      { key: "cursos", match: /\/clube-multi-trader-site\/cursos\/?/ },
      { key: "materiais", match: /\/clube-multi-trader-site\/materiais\/?/ },
      { key: "blog", match: /\/clube-multi-trader-site\/blog\/?/ },
      { key: "contato", match: /\/clube-multi-trader-site\/contato\/?/ },
    ];

    const found = map.find((x) => x.match.test(path));
    if (found) {
      const el = document.querySelector(`[data-nav="${found.key}"]`);
      if (el) el.style.color = "#CDA434";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initClock();
    markActiveNav();
  });
})();
