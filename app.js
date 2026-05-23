/* =========================
   LUXURY LOADER
========================= */

window.addEventListener("load", () => {

setTimeout(() => {

document
.querySelector(".loader")
.classList.add("hidden");

},2500);

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.querySelector(".cursor");

document.addEventListener(
"mousemove",
(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});

/* =========================
   BUTTON HOVER EFFECT
========================= */

const buttons =
document.querySelectorAll(
"button,a"
);

buttons.forEach((item)=>{

item.addEventListener(
"mouseenter",
()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(2)";

cursor.style.background =
"rgba(122,82,48,0.15)";

});

item.addEventListener(
"mouseleave",
()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(1)";

cursor.style.background =
"transparent";

});

});

/* =========================
   PARALLAX HERO IMAGE
========================= */

const imageCard =
document.querySelector(
".coffee-image-card"
);

document.addEventListener(
"mousemove",
(e)=>{

const x =
(window.innerWidth / 2 - e.clientX) / 40;

const y =
(window.innerHeight / 2 - e.clientY) / 40;

if(imageCard){

imageCard.style.transform =
`
rotateY(${x}deg)
rotateX(${y}deg)
`;

}

});

/* =========================
   FLOATING ANIMATION
========================= */

const cards =
document.querySelectorAll(
".luxury-card"
);

window.addEventListener(
"scroll",
()=>{

const scrollY =
window.scrollY;

cards.forEach((card,index)=>{

card.style.transform =
`
translateY(
${scrollY * 0.03 * (index+1)}px
)
`;

});

});

/* =========================
   SMOOTH FADE-IN
========================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show-element"
);

}

});

},

{
threshold:0.2
}

);

const hiddenElements =
document.querySelectorAll(

".luxury-card,.showcase,.contact-section"

);

hiddenElements.forEach((el)=>{

el.classList.add("hidden-element");

observer.observe(el);

});

/* =========================
   COFFEE
