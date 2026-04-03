document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const close = document.getElementById("closeMenu");
  const status = document.getElementById("statusDot");

  /* ===== INTRO ===== */
  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");
    }, 2500);
  }

  /* ===== MENU OPEN ===== */
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.add("show");
    });
  }

  /* ===== MENU CLOSE ===== */
  if (close && menu) {
    close.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  }

  /* ===== CLOSE MENU ON CLICK OUTSIDE ===== */
  document.addEventListener("click", (e) => {
    if (
      menu &&
      menu.classList.contains("show") &&
      !menu.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      menu.classList.remove("show");
    }
  });

  /* ===== STATUS (ONLINE / OFFLINE) ===== */
  if (status) {
    const hour = new Date().getHours();
    status.style.background = (hour >= 9 && hour <= 18) ? "limegreen" : "gray";
  }

  /* ===== SCROLL REVEAL ===== */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < trigger) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  // run once on load
  revealOnScroll();

});
