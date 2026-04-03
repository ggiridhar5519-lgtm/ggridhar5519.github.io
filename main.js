// ===== ELEMENTS =====
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");
const intro = document.getElementById("intro");

// ===== MENU TOGGLE =====
toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent auto close
  toggle.classList.toggle("active");
  menu.classList.toggle("show");
});

// ===== CLOSE MENU WHEN CLICK OUTSIDE =====
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    toggle.classList.remove("active");
    menu.classList.remove("show");
  }
});

// ===== CLOSE MENU WHEN CLICK LINK =====
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    menu.classList.remove("show");
  });
});

// ===== INTRO CONTROL =====
window.addEventListener("load", () => {
  setTimeout(() => {
    intro.style.display = "none";
  }, 3000);
});
