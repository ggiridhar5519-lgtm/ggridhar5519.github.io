const intro = document.getElementById("intro");
const home = document.getElementById("home");

setTimeout(() => {
  intro.style.display = "none";
  home.style.display = "block";
}, 2000);

const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  links.classList.toggle("show");
});
