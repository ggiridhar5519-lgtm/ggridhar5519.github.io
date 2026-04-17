// MAKE GLOBAL
window.toggleMenu = function () {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("show");
  }
};

// RESET MENU ON LOAD
window.addEventListener("load", () => {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.remove("show");
  }
});
