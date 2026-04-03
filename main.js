document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const status = document.getElementById("statusDot");

  // INTRO EXIT
  setTimeout(() => {
    intro.classList.add("hide");
  }, 2500);

  // ONLINE STATUS
  const hour = new Date().getHours();
  status.style.background = (hour >= 9 && hour <= 18) ? "limegreen" : "gray";

});
