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
