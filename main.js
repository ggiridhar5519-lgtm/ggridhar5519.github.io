/* ===================== */
/* 🎬 ULTRA CINEMATIC INTRO */
/* ===================== */
#intro{
  position:fixed;
  inset:0;
  height:100dvh;
  z-index:9999;
  overflow:hidden;

  /* layered background */
  background:
    radial-gradient(1200px 600px at 50% 40%, rgba(255,255,255,0.9), rgba(238,242,247,0.95)),
    linear-gradient(180deg,#ffffff,#eef2f7);
  transition:opacity .8s ease, transform .8s ease;
}

/* vignette */
#intro::after{
  content:"";
  position:absolute; inset:0;
  background:radial-gradient(circle at center,
    rgba(0,0,0,0.0) 40%,
    rgba(0,0,0,0.18) 100%);
  pointer-events:none;
}

/* particles canvas */
#intro-particles{
  position:absolute; inset:0;
  width:100%; height:100%;
  opacity:.5;
}

/* center block */
.intro-inner{
  position:absolute; inset:0;
  display:flex; flex-direction:column;
  align-items:center; justify-content:center;
  text-align:center;
  animation:introIn .9s ease both;
}

/* logo */
.intro-logo{
  position:relative;
  font-size:72px;
  letter-spacing:8px;

  background:linear-gradient(120deg,#d4af37,#fff6cc,#d4af37);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;

  text-shadow:0 12px 30px rgba(0,0,0,0.18);
  animation:goldPulse 2.8s ease-in-out infinite alternate;
}

/* light sweep over text */
.intro-logo::before{
  content:"";
  position:absolute; top:0; left:-120%;
  width:120%; height:100%;
  background:linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
  transform:skewX(-20deg);
  animation:sweep 3.5s ease-in-out infinite;
}

/* divider */
.intro-line{
  width:0; height:2px;
  margin:18px 0 10px;
  background:#111827;
  opacity:.7;
  animation:lineGrow 1.1s ease forwards .3s;
}

/* tagline */
.intro-tag{
  font-size:14px;
  letter-spacing:3px;
  color:#475569;
  opacity:0;
  animation:fadeUp .9s ease forwards .6s;
}

/* exit */
#intro.hide{
  opacity:0;
  transform:scale(1.04);
  pointer-events:none;
}

/* ===================== */
/* keyframes */
/* ===================== */
@keyframes introIn{
  from{opacity:0; transform:translateY(20px);}
  to{opacity:1; transform:translateY(0);}
}
@keyframes lineGrow{
  from{width:0;}
  to{width:140px;}
}
@keyframes fadeUp{
  from{opacity:0; transform:translateY(10px);}
  to{opacity:1; transform:translateY(0);}
}
@keyframes goldPulse{
  from{ text-shadow:0 0 10px rgba(212,175,55,.25);}
  to{ text-shadow:0 0 28px rgba(212,175,55,.6);}
}
@keyframes sweep{
  0%{left:-120%;}
  55%{left:120%;}
  100%{left:120%;}
}

/* mobile tuning */
@media (max-width:768px){
  .intro-logo{font-size:48px; letter-spacing:4px;}
  .intro-line{animation:lineGrow 1s ease forwards .2s;}
}
