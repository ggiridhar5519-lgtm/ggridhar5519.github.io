document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const chatBtn = document.getElementById("chatBtn");

  setTimeout(() => {
    intro.classList.add("hide");
    chatBtn.style.display = "block";
  }, 4000);

});
