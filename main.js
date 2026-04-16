window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");
    }, 2500);
  }
});

// MOBILE MENU
const menu = document.getElementById("mobileMenu");
const toggleBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeMenu");

toggleBtn.onclick = () => menu.classList.add("show");
closeBtn.onclick = () => menu.classList.remove("show");
