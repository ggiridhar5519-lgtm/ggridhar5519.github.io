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

  // STATUS (you control time here)
  const status = document.getElementById("statusDot");
  const hour = new Date().getHours();

  if (hour >= 9 && hour <= 18) {
    status.style.background = "limegreen"; // online
  } else {
    status.style.background = "gray"; // offline
  }

});
