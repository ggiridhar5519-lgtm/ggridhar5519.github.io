window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.classList.add("hide");
  }, 2500);
});

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}
