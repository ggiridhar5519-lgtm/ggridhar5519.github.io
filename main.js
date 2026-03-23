document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

});
