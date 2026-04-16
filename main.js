// ==============================
// 🎬 INTRO CONTROL (SAFE + CLEAN)
// ==============================
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");
    }, 2500); // 2.5 sec intro
  }
});


// ==============================
// 📱 MOBILE MENU (ROBUST)
// ==============================
const menu = document.getElementById("mobileMenu");
const toggleBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeMenu");

// OPEN
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    menu.classList.add("show");
  });
}

// CLOSE (X button)
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
  });
}

// CLOSE when clicking a link (important UX)
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});


// ==============================
// ✨ SCROLL REVEAL (OPTIMIZED)
// ==============================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// ==============================
// 🧠 OPTIONAL: RUN ON LOAD ALSO
// ==============================
revealOnScroll();
