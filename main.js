// INTRO
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").classList.add("hide");
  }, 1500);
};

// SCROLL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
