// INTRO
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").classList.add("hide");
  }, 1200);
};

// SCROLL
const reveal = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveal.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// TYPING EFFECT
const text = ["Engineer","Developer","Architect"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
