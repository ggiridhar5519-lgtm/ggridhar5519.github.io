/* ===================================== */
/* FINAL CLEAN main.js */
/* Works for all pages */
/* Intro + Hero Slider + Mobile Menu + Loader */
/* ===================================== */

document.addEventListener("DOMContentLoaded", () => {

/* ===================================== */
/* INTRO SCREEN */
/* ===================================== */
const intro = document.getElementById("intro");

if(intro){

setTimeout(() => {
intro.classList.add("hide");
document.body.style.overflow = "auto";
}, 3200);

document.body.style.overflow = "hidden";

}

/* ===================================== */
/* HERO BACKGROUND SLIDER */
/* ===================================== */
const slides = document.querySelectorAll(".slide");

if(slides.length){

let current = 0;

setInterval(() => {

slides[current].classList.remove("active");
current = (current + 1) % slides.length;
slides[current].classList.add("active");

}, 4000);

}

/* ===================================== */
/* EXPERIENCE IMAGE SLIDER */
/* ===================================== */
const visualGroups = document.querySelectorAll(".exp-visual");

visualGroups.forEach(group => {

const imgs = group.querySelectorAll(".slide-img");

if(imgs.length){

let i = 0;

setInterval(() => {

imgs[i].classList.remove("active");
i = (i + 1) % imgs.length;
imgs[i].classList.add("active");

}, 3500);

}

});

/* ===================================== */
/* MOBILE MENU */
/* ===================================== */
const menuBtn = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

if(menuBtn && menu){

menuBtn.addEventListener("click", () => {

menuBtn.classList.toggle("active");
menu.classList.toggle("active");

if(menu.classList.contains("active")){
document.body.style.overflow = "hidden";
}else{
document.body.style.overflow = "auto";
}

});

document.querySelectorAll("#mobileMenu a").forEach(link => {

link.addEventListener("click", () => {
menuBtn.classList.remove("active");
menu.classList.remove("active");
document.body.style.overflow = "auto";
});

});

}

/* ===================================== */
/* SCROLL REVEAL */
/* ===================================== */
const revealItems = document.querySelectorAll(
".project-card, .a-card, .trust-grid div"
);

if(revealItems.length){

const reveal = () => {

revealItems.forEach(item => {

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 80){
item.classList.add("show");
}

});

};

window.addEventListener("scroll", reveal);
reveal();

}

/* ===================================== */
/* SAFE PAGE LOADER */
/* ===================================== */
const pageLoader = document.getElementById("pageLoader");
const fill = document.getElementById("retroFill");
const percent = document.getElementById("loaderPercent");

if(pageLoader && fill && percent){

document.querySelectorAll("a[href]").forEach(link => {

const href = link.getAttribute("href");

if(
href &&
!href.startsWith("#") &&
!href.startsWith("mailto:") &&
!href.startsWith("tel:") &&
!href.startsWith("javascript") &&
!link.hasAttribute("target")
){

link.addEventListener("click", function(e){

e.preventDefault();

pageLoader.classList.add("show");

let i = 0;

fill.style.width = "0%";
percent.innerText = "0%";

const timer = setInterval(() => {

i += 10;

if(i >= 100){

i = 100;
clearInterval(timer);

fill.style.width = "100%";
percent.innerText = "100%";

setTimeout(() => {
window.location.href = href;
}, 250);

}

fill.style.width = i + "%";
percent.innerText = i + "%";

}, 40);

});

}

});

}

});
