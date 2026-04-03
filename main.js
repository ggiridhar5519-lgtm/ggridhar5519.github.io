document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const progress = document.querySelector(".progress");
  const status = document.getElementById("statusDot");

  // INTRO
  setTimeout(() => {
    intro.classList.add("hide");
  }, 2500);

  // STATUS
  const hour = new Date().getHours();
  status.style.background = (hour >= 9 && hour <= 18) ? "limegreen" : "gray";

  // SCROLL BAR
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY /
      (document.body.scrollHeight - window.innerHeight);
    progress.style.width = scrolled * 100 + "%";
  });

});
