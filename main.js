document.addEventListener("DOMContentLoaded", () => {

  /* MENU */
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  if (btn) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

});


/* ===== SKILL ANIMATION ===== */

const cards = document.querySelectorAll(".skill-card");

function showSkills() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 120);
  });
}

window.addEventListener("load", () => {
  if (cards.length > 0) {
    showSkills();
  }
});


/* ===== CURSOR GLOW ===== */

document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});
