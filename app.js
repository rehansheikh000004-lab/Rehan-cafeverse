window.addEventListener("load", () => {

setTimeout(() => {

document.querySelector(".loader")
.classList.add("hidden");

},2500);

});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});
