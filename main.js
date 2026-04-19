function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

/* close menu on link click (mobile UX) */
document.querySelectorAll(".mobile-menu a").forEach(link=>{
  link.addEventListener("click",()=>{
    document.getElementById("mobileMenu").classList.remove("show");
  });
});
