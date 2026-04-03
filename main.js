document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const intro = document.getElementById("intro");
  const chatBtn = document.getElementById("chatBtn");
  const chatPopup = document.getElementById("chatPopup");
  const closeChat = document.getElementById("closeChat");

  // MENU
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle.classList.toggle("active");
    menu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove("active");
      menu.classList.remove("show");
    }
  });

  // CHAT
  chatBtn.addEventListener("click", () => {
    chatPopup.classList.toggle("show");
  });

  closeChat.addEventListener("click", () => {
    chatPopup.classList.remove("show");
  });

  // INTRO
  setTimeout(() => {
    intro.classList.add("hide");
    chatBtn.style.display = "flex";
  }, 4000);

});
