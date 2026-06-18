function sendMessage(){

const input =
document.getElementById("userInput");

const chatBox =
document.getElementById("chatBox");

const userText =
input.value.trim();

if(userText === "") return;

/* USER MESSAGE */

const userMessage =
document.createElement("div");

userMessage.classList.add(
"user-message"
);

userMessage.innerText =
userText;

chatBox.appendChild(userMessage);

/* AI RESPONSE */

const aiMessage =
document.createElement("div");

aiMessage.classList.add(
"ai-message"
);

let response = "";

const mood =
userText.toLowerCase();

if(
mood.includes("sad")
){

response =
"You need a Velvet Mocha with soft jazz ambience.";

}

else if(
mood.includes("happy")
){

response =
"I recommend Tokyo Latte with warm cinematic atmosphere.";

}

else if(
mood.includes("tired")
){

response =
"Midnight Espresso will restore your luxury energy.";

}

else if(
mood.includes("relaxed")
){

response =
"Cream Latte with rain ambience would be perfect.";

}

else{

response =
"I recommend our Signature Velvet Espresso experience.";

}

setTimeout(()=>{

aiMessage.innerText =
response;

chatBox.appendChild(aiMessage);

chatBox.scrollTop =
chatBox.scrollHeight;

},800);

input.value = "";

}
