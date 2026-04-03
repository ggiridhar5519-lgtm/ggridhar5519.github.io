document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const intro = document.getElementById("intro");

  // MENU
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle.classList.toggle("active");
    menu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove("active");
      menu.classList.remove("show");
    }
  });

  // INTRO
  setTimeout(() => {
    intro.classList.add("hide");
  }, 2500);

});
