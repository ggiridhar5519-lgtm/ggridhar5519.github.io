document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     📱 MOBILE MENU TOGGLE
  ========================== */
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  if (btn) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

});


/* =========================
   🎬 INTRO SCREEN CONTROL
========================== */
const intro = document.getElementById("introScreen");
const main = document.getElementById("mainContent");

if (intro && main) {
  setTimeout(() => {
    intro.classList.add("hide");
    main.classList.add("show");
  }, 2200); // premium timing
}


/* =========================
   ⚡ SKILL CARD ANIMATION
========================== */

const cards = document.querySelectorAll(".skill-card");

function showSkills() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 120); // stagger effect
  });
}


/* =========================
   🎯 TRIGGER WHEN PAGE LOADS
========================== */

window.addEventListener("load", () => {
  if (cards.length > 0) {
    showSkills();
  }
});


/* =========================
   🎯 OPTIONAL: CLICK TRIGGER
========================== */

const skillLink = document.querySelector('a[href="skills.html"]');

if (skillLink) {
  skillLink.addEventListener("click", () => {
    localStorage.setItem("skillsAnim", "true");
  });
}

window.addEventListener("load", () => {
  if (localStorage.getItem("skillsAnim")) {
    showSkills();
    localStorage.removeItem("skillsAnim");
  }
});
