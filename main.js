const intro = document.getElementById("intro");
const home = document.getElementById("home");

setTimeout(() => {
  intro.style.display = "none";
  home.style.display = "block";
}, 2000);

const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");

/* TOGGLE MENU */
toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent auto close
  links.classList.toggle("show");
});

/* CLOSE WHEN CLICK ANYWHERE */
document.addEventListener("click", () => {
  links.classList.remove("show");
});

/* PREVENT CLOSE WHEN CLICKING INSIDE MENU */
links.addEventListener("click", (e) => {
  e.stopPropagation();
});
