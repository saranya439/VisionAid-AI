const darkBtn =
document.getElementById("darkBtn");

darkBtn.addEventListener("click",()=>{

  document.body.classList.toggle("dark");

});

/* SCROLL */

function scrollToDashboard(){

  document
  .getElementById("dashboard")
  .scrollIntoView({
    behavior:"smooth"
  });

}

/* SCREEN TIME TRACKER */

let minutes = 0;

setInterval(()=>{

  minutes++;

  document.getElementById(
  "screenTime"
  ).innerText =
  `${minutes} mins`;

  let score = 100 - minutes;

  if(score < 0){
    score = 0;
  }

  document.getElementById(
  "healthScore"
  ).innerText =
  `${score}%`;

},60000);

/* BLINK REMINDER */

setInterval(()=>{

  alert(
  "👀 Blink your eyes and look away from screen for 20 seconds!"
  );

},1200000);

/* AI ASSISTANT */

function getAdvice(){

  const input =
  document.getElementById(
  "userInput"
  ).value.toLowerCase();

  let advice = "";

  if(input.includes("pain")){

    advice =
    "Reduce screen brightness and rest your eyes.";

  }

  else if(input.includes("dry")){

    advice =
    "Drink more water and blink frequently.";

  }

  else if(input.includes("headache")){

    advice =
    "Take regular breaks using the 20-20-20 rule.";

  }

  else{

    advice =
    "Maintain healthy screen distance and proper lighting.";

  }

  document.getElementById(
  "result"
  ).innerHTML =
  `<h3>${advice}</h3>`;

}
