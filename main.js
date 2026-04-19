/* ===================== */
/* MOBILE MENU FIX */
/* ===================== */
document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".mobile-menu span");

  // OPEN
  toggle.addEventListener("click", () => {
    menu.classList.add("show");
    document.body.style.overflow = "hidden"; // lock scroll
  });

  // CLOSE (X button)
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // CLOSE when clicking link
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  });

});
