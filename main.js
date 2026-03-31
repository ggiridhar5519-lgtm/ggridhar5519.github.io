document.addEventListener("DOMContentLoaded",()=>{

/* 🔥 NAV MENU */
const btn = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

if(btn){
  btn.addEventListener("click",()=>{
    nav.classList.toggle("active");
  });
}

/* 🔥 INTRO CONTROL */
const intro = document.getElementById("introScreen");
const main = document.getElementById("mainContent");

setTimeout(()=>{
  intro.classList.add("hide");
  main.classList.add("show");
}, 2000); // 2 sec intro

/* 🔥 SKILL ANIMATION (keep safe) */
document.querySelectorAll(".fill").forEach(el=>{
  setTimeout(()=>{
    el.style.width = el.dataset.width;
  },500);
});

});
/* 🔥 SKILL CARD ANIMATION */
const cards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries=>{
  entries.forEach((entry,index)=>{
    if(entry.isIntersecting){
      setTimeout(()=>{
        entry.target.classList.add("show");
      }, index * 120);
    }
  });
},{threshold:0.2});

cards.forEach(card=>{
  observer.observe(card);
});
