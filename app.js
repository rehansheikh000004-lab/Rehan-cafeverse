/* LOADER */

window.addEventListener(
"load",
() => {

setTimeout(() => {

document
.querySelector(".loader")
.classList.add("hidden");

},2500);

});

/* CURSOR */

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

/* BUTTON HOVER EFFECT */

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

});

item.addEventListener(
"mouseleave",
()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(1)";

});

});
