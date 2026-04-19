/* ===================== */
/* 🎬 INTRO CONTROL + PARTICLES */
/* ===================== */
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  if (!intro) return;

  // graceful exit
  setTimeout(() => intro.classList.add("hide"), 2400);

  // particles (very light)
  const canvas = document.getElementById("intro-particles");
  const ctx = canvas.getContext("2d");

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const dots = Array.from({length: 40}).map(() => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*1.5 + 0.5,
    vx: (Math.random()-0.5)*0.2,
    vy: (Math.random()-0.5)*0.2
  }));

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    dots.forEach(d=>{
      d.x += d.vx; d.y += d.vy;
      if(d.x<0||d.x>canvas.width) d.vx*=-1;
      if(d.y<0||d.y>canvas.height) d.vy*=-1;

      ctx.beginPath();
      ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
});
