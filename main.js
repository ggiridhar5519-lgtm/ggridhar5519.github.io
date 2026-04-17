// MOBILE MENU TOGGLE
window.toggleMenu = function () {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;

  menu.classList.toggle("show");

  // Blur background when open
  document.body.classList.toggle("menu-open");
};

// RESET MENU ON PAGE LOAD
window.addEventListener("load", () => {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.remove("show");

  document.body.classList.remove("menu-open");

  // INTRO HANDLING
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");
      setTimeout(() => {
        intro.style.display = "none";
      }, 800);
    }, 2000);
  }
});
