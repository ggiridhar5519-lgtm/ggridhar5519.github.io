document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  setTimeout(() => {
    intro.classList.add("hide");
  }, 2500);

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

});
