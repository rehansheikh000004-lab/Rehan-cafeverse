let ingredients = [];

function selectIngredient(item){

ingredients.push(item);

updateRecipe();

}

function updateRecipe(){

const recipeList =
document.getElementById("recipeList");

recipeList.innerHTML = "";

ingredients.forEach((ingredient)=>{

const p =
document.createElement("p");

p.innerText = ingredient;

recipeList.appendChild(p);

});

}

function generateRecipe(){

const recipeName =
document.getElementById("recipeName");

if(ingredients.length <= 2){

recipeName.innerText =
"Minimal Blend";

}

else if(ingredients.length <= 4){

recipeName.innerText =
"Signature Luxury Brew";

}

else{

recipeName.innerText =
"Ultimate Cinematic Coffee";

}

}
