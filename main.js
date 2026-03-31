/* =========================
   GLOBAL SAFE INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ===== INTRO HANDLER ===== */
  const intro = document.getElementById("intro");

  function hideIntro() {
    if (intro) {
      intro.style.opacity = "0";
      intro.style.pointerEvents = "none";

      setTimeout(() => {
        intro.style.display = "none";
      }, 500); // matches CSS transition
    }
  }

  // Force intro to disappear after max 2.5s
  setTimeout(hideIntro, 2500);


  /* ===== MENU ===== */
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

});


/* =========================
   WINDOW LOAD (ALL ASSETS)
========================= */

window.addEventListener("load", () => {

  /* ===== FORCE INTRO REMOVE (backup safety) ===== */
  const intro = document.getElementById("intro");
  if (intro) {
    intro.style.display = "none";
  }

  /* ===== SKILL ANIMATION ===== */
  const cards = document.querySelectorAll(".skill-card");

  function showSkills() {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120);
    });
  }

  if (cards.length > 0) {
    showSkills();
  }

});


/* =========================
   CURSOR GLOW (SAFE)
========================= */

const skillCards = document.querySelectorAll(".skill-card");

if (skillCards.length > 0) {
  skillCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });
}
