document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const close = document.getElementById("closeMenu");
  const status = document.getElementById("statusDot");

  /* INTRO */
  setTimeout(() => {
    intro.classList.add("hide");
  }, 2200);

  /* MENU */
  toggle.addEventListener("click", () => {
    menu.classList.add("show");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("show");
  });

  /* STATUS */
  const hour = new Date().getHours();
  status.style.background = (hour >= 9 && hour <= 18)
    ? "limegreen"
    : "gray";

});
