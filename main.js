document.addEventListener("DOMContentLoaded",()=>{

const btn=document.querySelector(".menu-toggle");
const nav=document.getElementById("navLinks");

if(btn){
  btn.addEventListener("click",()=>{
    nav.classList.toggle("active");
  });
}

/* SKILL ANIMATION */
document.querySelectorAll(".fill").forEach(el=>{
  setTimeout(()=>{
    el.style.width=el.dataset.width;
  },500);
});

});
