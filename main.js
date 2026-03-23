document.addEventListener("DOMContentLoaded", () => {

    // MENU
    const btn = document.querySelector(".menu-toggle");
    const nav = document.getElementById("navLinks");

    btn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // TYPING
    const text = "SAP CPI Consultant";
    let i = 0;

    function typing(){
        if(i < text.length){
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100);
        }
    }
    typing();

    // PROJECT ANIMATION
    const cards = document.querySelectorAll(".project-card");

    window.addEventListener("scroll", () => {
        cards.forEach(card => {
            const pos = card.getBoundingClientRect().top;
            if(pos < window.innerHeight){
                card.classList.add("show");
            }
        });
    });

});

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:2,
        speedX:(Math.random()-0.5),
        speedY:(Math.random()-0.5)
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x += p.speedX;
        p.y += p.speedY;

        ctx.fillStyle="white";
        ctx.fillRect(p.x,p.y,p.size,p.size);
    });

    requestAnimationFrame(animate);
}

animate();
