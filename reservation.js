function reserveTable(){

const name =
document.getElementById("name").value;

const table =
document.getElementById("tableType").value;

const date =
document.getElementById("date").value;

const time =
document.getElementById("time").value;

if(
name === "" ||
date === "" ||
time === ""
){

alert("Please fill all details");

return;

}

document.getElementById("resultName")
.innerText = name;

document.getElementById("resultTable")
.innerText = table;

document.getElementById("resultDate")
.innerText = date;

document.getElementById("resultTime")
.innerText = time;

document.getElementById("resultCard")
.classList.add("show");

}
