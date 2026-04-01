const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("show");
});

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    toggle.classList.remove("active");
    menu.classList.remove("show");
  }
});
