window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},2500);

});

/* CURSOR */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

}

});
