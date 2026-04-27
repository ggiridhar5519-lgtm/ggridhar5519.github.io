/* ===================== */
/* MOBILE MENU FIX */
/* ===================== */
document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".mobile-menu span");

  // OPEN
  toggle.addEventListener("click", () => {
    menu.classList.add("show");
    document.body.style.overflow = "hidden"; // lock scroll
  });

  // CLOSE (X button)
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // CLOSE when clicking link
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  });

});
/* PASTE in main.js OR before </body> */

/* ========================= */
/* WORLD MAP LOADER */
/* ========================= */

const pageLoader = document.getElementById("pageLoader");
const fill = document.getElementById("retroFill");
const percent = document.getElementById("loaderPercent");

/* apply to navbar links */
document.querySelectorAll("a").forEach(link=>{

  const href = link.getAttribute("href");

  if(
    href &&
    !href.startsWith("#") &&
    !href.startsWith("mailto:") &&
    !href.startsWith("https://wa.me") &&
    !link.hasAttribute("target")
  ){

    link.addEventListener("click",function(e){

      e.preventDefault();

      pageLoader.classList.add("show");

      let i = 0;

      fill.style.width = "0%";
      percent.innerText = "0%";

      const load = setInterval(()=>{

        i += Math.floor(Math.random()*9)+3;

        if(i >= 100){
          i = 100;
          clearInterval(load);

          fill.style.width = "100%";
          percent.innerText = "100%";

          setTimeout(()=>{
            window.location.href = href;
          },300);
        }

        fill.style.width = i + "%";
        percent.innerText = i + "%";

      },60);

    });

  }

});
/* =================================== */
/* ELITE LOADER JS */
/* PASTE IN main.js */
/* =================================== */

const eliteLoader = document.getElementById("eliteLoader");
const eliteFill = document.getElementById("eliteFill");
const elitePercent = document.getElementById("elitePercent");
const loaderTitle = document.getElementById("loaderTitle");

/* only for NON-HOME links */
document.querySelectorAll("a").forEach(link=>{

  const href = link.getAttribute("href");

  if(
    href &&
    !href.startsWith("#") &&
    href !== "index.html" &&
    href !== "./index.html" &&
    !href.startsWith("mailto:") &&
    !href.startsWith("https://wa.me") &&
    !link.hasAttribute("target")
  ){

    link.addEventListener("click",function(e){

      e.preventDefault();

      let label = "Initializing Module...";

      if(href.includes("experience")) label = "Loading Experience...";
      if(href.includes("projects")) label = "Loading Projects...";
      if(href.includes("about")) label = "Loading Profile...";
      if(href.includes("contact")) label = "Opening Contact...";

      loaderTitle.innerText = label;

      eliteLoader.classList.add("show");

      let i = 0;
      eliteFill.style.width = "0%";
      elitePercent.innerText = "0%";

      const timer = setInterval(()=>{

        i += Math.floor(Math.random()*9)+4;

        if(i >= 100){
          i = 100;
          clearInterval(timer);

          eliteFill.style.width = "100%";
          elitePercent.innerText = "100%";

          setTimeout(()=>{
            window.location.href = href;
          },250);
        }

        eliteFill.style.width = i + "%";
        elitePercent.innerText = i + "%";

      },55);

    });

  }

});
