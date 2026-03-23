document.addEventListener("DOMContentLoaded",()=>{

const btn=document.querySelector(".menu-toggle");
const nav=document.getElementById("navLinks");

btn.addEventListener("click",()=>{
  nav.classList.toggle("active");
});

/* SKILLS */
document.querySelectorAll(".fill").forEach(el=>{
  setTimeout(()=>{
    el.style.width=el.dataset.width;
  },500);
});

/* PROJECT */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".project-card").forEach(c=>{
if(c.getBoundingClientRect().top<window.innerHeight){
c.classList.add("show");
}});
});

});

/* PARTICLES */
const canvas=document.getElementById("particles");
if(canvas){
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let p=[];
for(let i=0;i<80;i++){
p.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
p.forEach(d=>{
d.y+=0.5;
if(d.y>canvas.height)d.y=0;
ctx.fillStyle="white";
ctx.fillRect(d.x,d.y,2,2);
});
requestAnimationFrame(draw);
}
draw();
}
