// INTRO
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").classList.add("hide");
  }, 2500);
};

// MOBILE MENU
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");
const close = document.getElementById("closeMenu");

toggle.onclick = () => menu.classList.add("show");
close.onclick = () => menu.classList.remove("show");

// SCROLL ANIMATION
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveal.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
