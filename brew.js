let selectedBeans = "Velvet Espresso";
let selectedMilk = "Cream Foam";

function selectBeans(bean){

selectedBeans = bean;

}

function selectMilk(milk){

selectedMilk = milk;

}

function brewCoffee(){

const card =
document.getElementById("resultCard");

document.getElementById("coffeeName")
.innerText = selectedBeans;

document.getElementById("coffeeMilk")
.innerText = selectedMilk;

card.classList.add("show");

}
