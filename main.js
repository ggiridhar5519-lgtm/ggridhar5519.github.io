/* ===================== */
/* MOBILE MENU */
/* ===================== */
document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-btn");

  if(toggle && menu){
    toggle.addEventListener("click", () => {
      menu.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  if(closeBtn && menu){
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  }

  document.querySelectorAll(".mobile-menu a").forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  });

});


/* ===================== */
/* SMART ELITE LOADER */
/* ===================== */

const eliteLoader = document.getElementById("eliteLoader");
const eliteFill = document.getElementById("eliteFill");
const elitePercent = document.getElementById("elitePercent");
const loaderTitle = document.getElementById("loaderTitle");

let loadingNow = false;
let nextPage = "";

document.querySelectorAll("a").forEach(link => {

  const href = link.getAttribute("href");

  if(
    href &&
    !href.startsWith("#") &&
    !href.startsWith("mailto:") &&
    !href.startsWith("https://wa.me") &&
    !link.hasAttribute("target")
  ){

    link.addEventListener("click", function(e){

      /* Home page direct open */
      if(
        href === "index.html" ||
        href === "./index.html"
      ){
        return;
      }

      e.preventDefault();

      nextPage = href;

      let label = "Loading Module...";
      if(href.includes("experience")) label = "Loading Experience...";
      if(href.includes("about")) label = "Loading Profile...";
      if(href.includes("projects")) label = "Loading Projects...";
      if(href.includes("contact")) label = "Opening Contact...";

      loaderTitle.innerText = label;

      eliteLoader.classList.add("show");

      /* If already loading, just switch destination */
      if(loadingNow) return;

      loadingNow = true;

      let i = 0;
      eliteFill.style.width = "0%";
      elitePercent.innerText = "0%";

      const timer = setInterval(()=>{

        i += 12; /* FAST */

        if(i >= 100){
          i = 100;
          clearInterval(timer);

          eliteFill.style.width = "100%";
          elitePercent.innerText = "100%";

          setTimeout(()=>{
            window.location.href = nextPage;
          },120);
        }

        eliteFill.style.width = i + "%";
        elitePercent.innerText = i + "%";

      },45);

    });

  }

});
/* ================================= */
/* ABOUT PAGE ANIMATION JS */
/* PASTE IN main.js bottom */
/* ================================= */

document.addEventListener("DOMContentLoaded", ()=>{

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.18});

/* cards */
document.querySelectorAll(".a-card").forEach(el=>{
observer.observe(el);
});

/* trust blocks */
document.querySelectorAll(".trust-grid div").forEach(el=>{
observer.observe(el);
});

/* dark title */
const darkTitle = document.querySelector(".about-dark h2");
if(darkTitle) observer.observe(darkTitle);


/* COUNTER ANIMATION */
function countUp(el,target,suffix=""){
let n = 0;
const speed = Math.ceil(target/35);

const timer = setInterval(()=>{
n += speed;

if(n >= target){
n = target;
clearInterval(timer);
}

el.innerText = n + suffix;

},40);
}

const stats = document.querySelectorAll(".about-stats h3");

if(stats.length >= 3){

const statsObserver = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){

countUp(stats[0],6,"+");
countUp(stats[1],30,"+");
countUp(stats[2],100,"%");

statsObserver.disconnect();
}
});
},{threshold:.6});

statsObserver.observe(document.querySelector(".about-stats"));

}

});
