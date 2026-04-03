document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const intro = document.getElementById("intro");
  const chatBtn = document.getElementById("chatBtn");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");

      if (chatBtn) {
        chatBtn.style.display = "flex";
      }

    }, 4000);
  }

});
