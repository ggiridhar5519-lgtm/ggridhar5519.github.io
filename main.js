document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const status = document.getElementById("statusDot");

  setTimeout(() => {
    intro.classList.add("hide");
  }, 1500);

  const hour = new Date().getHours();
  status.style.background = (hour >= 9 && hour <= 18)
    ? "green"
    : "gray";

});
