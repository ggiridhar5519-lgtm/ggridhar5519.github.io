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
toggle.addEventListener("click", () => {
  links.classList.toggle("show");

  if (links.classList.contains("show")) {
    toggle.innerHTML = "✖";
  } else {
    toggle.innerHTML = "☰";
  }
});
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuToggle.innerHTML = "✖";
  } else {
    menuToggle.innerHTML = "☰";
  }
});
