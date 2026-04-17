// RESET MENU ON LOAD
window.addEventListener("load", () => {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.remove("show");
});

// TOGGLE MENU
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}
