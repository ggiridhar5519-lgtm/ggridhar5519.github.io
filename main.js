document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const close = document.getElementById("closeMenu");

  // INTRO
  setTimeout(() => {
    intro.classList.add("hide");
  }, 2500);

  // MENU
  toggle.addEventListener("click", () => {
    menu.classList.add("show");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("show");
  });

  // STATUS (adjust time)
  const status = document.getElementById("statusDot");
  const hour = new Date().getHours();

  status.style.background = (hour >= 9 && hour <= 18) ? "limegreen" : "gray";

  // SCROLL REVEAL
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add("active");
      }
    });
  });

});
