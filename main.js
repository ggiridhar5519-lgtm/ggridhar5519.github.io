window.addEventListener("load", () => {

  const intro = document.getElementById("intro");

  // ✅ Safety: remove intro even if animation fails
  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");

      // 🔥 force remove after animation
      setTimeout(() => {
        intro.style.display = "none";
      }, 800);

    }, 2000);
  }

  // RESET MENU
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.remove("show");
  }

});
