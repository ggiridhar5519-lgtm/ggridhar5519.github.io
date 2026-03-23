// ACTIVE NAV LINK
const links = document.querySelectorAll(".nav-link");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// HAMBURGER MENU TOGGLE
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
