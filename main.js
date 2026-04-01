document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("introScreen");
  const main = document.getElementById("mainContent");

  function showMainSite() {
    if (intro) {
      intro.style.opacity = "0";
      intro.style.pointerEvents = "none";

      setTimeout(() => {
        intro.style.display = "none";
      }, 600);
    }

    if (main) {
      main.style.opacity = "1";
      main.style.visibility = "visible";
    }
  }

  setTimeout(showMainSite, 2000);

  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

});

window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 120);
  });
});

document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
