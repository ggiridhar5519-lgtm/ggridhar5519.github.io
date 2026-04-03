document.addEventListener("DOMContentLoaded", () => {

  // ===== ELEMENTS =====
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const intro = document.getElementById("intro");
  const chatBtn = document.getElementById("chatBtn");
  const chatPopup = document.getElementById("chatPopup");
  const closeChat = document.getElementById("closeChat");

  // ===== MENU =====
  if (toggle && menu) {
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
  }

  // ===== CHAT POPUP =====
  if (chatBtn && chatPopup) {

    // OPEN / CLOSE
    chatBtn.addEventListener("click", () => {
      chatPopup.classList.toggle("show");
    });

    // CLOSE BUTTON
    if (closeChat) {
      closeChat.addEventListener("click", () => {
        chatPopup.classList.remove("show");
      });
    }
  }

  // ===== INTRO CONTROL =====
  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");

      // 👉 SHOW CHAT AFTER INTRO
      if (chatBtn) {
        chatBtn.style.display = "flex";
      }

    }, 2500);
  }

});
