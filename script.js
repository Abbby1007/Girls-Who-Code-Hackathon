document.getElementById("secondQ").style.visibility = 'hidden';
document.getElementById("thirdQ").style.visibility = 'hidden';

// FIRST QUESTION PARTS START --------------------------------------
function first(){
    document.getElementById("startBtn").style.visibility = 'hidden';
    const Questions = ["By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance", 
        "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment",
        "Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries, especially in least developed countries and small island developing States",
        "By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans",
        "By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies",
        "Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements"];
   
        const choiceA = ["1. Poverty", "3. Good Health and Well-Being","9. Industry, Innovation and Infrastructure","6. Clean Water and Sanitation","6. Clean Water and Sanitation","11. Sustainable Cities and Communities"]; 
    const ChoiceB = ["2. Zero Hunger", "5. Gender Equality ","8. Decent work and economic growth","13. Climate Action","15. Life On Land","16. Peace, Justice, and Strong Institutions"];
    const ChoiceC = ["10. Reduced Inequalities", "8. Decent work and economic growth","6. Clean Water and Sanitation","11. Sustainable Cities and Communities","11. Sustainable Cities and Communities","9. Industry, Innovation and Infrastructure"];
    const ChoiceD= ["12. Responsible Consumption and Production", "10. Reduced Inequalities","3. Good Health and Well-Being","14. Life Below Water","14. Life Below Water","17. Partnerships For The Goals"];
   const value = Math.floor(Math.random() * 6);


   if(value == 0){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstCorrect()">${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 1){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick=firstWrong()">${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstCorrect()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 2){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()">${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstCorrect()">${ChoiceC[value]}</button><br> <button onclick="firstCorrect()">${ChoiceD[value]}</button>`;
   }
      if(value == 3){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()">${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstCorrect()">${ChoiceD[value]}</button>`;
   }
      if(value == 4){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstCorrect()">${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 5){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()">${choiceA[value]} </button><br> <button onclick="firstCorrect()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
   }

    

}

function firstCorrect(){
  document.getElementById("results").textContent = `Correct`;  
   document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("secondQ").style.visibility = 'visible';
}

function firstWrong(){
    document.getElementById("results").textContent = `Wrong`;  
     document.getElementById("Buttons").innerHTML = ``
     document.getElementById("secondQ").style.visibility = 'visible';
}

// FIRST QUESTION PARTS END --------------------------------------

function second(){
document.getElementById("results").textContent = ` `; 
document.getElementById("secondQ").style.visibility = 'hidden';

const Questions = ["", 
    "",
    "",
    "",
    "",
    "",
]

const choiceA = ["", "", "", "", "", ""];
const ChoiceB = ["", "", "", "", "", ""];
const ChoiceC = ["", "", "", "", "", ""];
const ChoiceD = ["", "", "", "", "", ""];

   const value = Math.floor(Math.random() * 6);

   if(value == 0){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()">${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondCorrect()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 1){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()">${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 2){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()">${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 3){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()">${choiceA[value]} </button><br> <button onclick="secondCorrect()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 4){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()">${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 5){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()">${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondCorrect()">${ChoiceD[value]}</button>`;
   }
}

function secondCorrect(){
  document.getElementById("results").textContent = `Correct`;  
   document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("thirdQ").style.visibility = 'visible';
}

function secondWrong(){
  document.getElementById("results").textContent = `Wrong`;  
   document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("thirdQ").style.visibility = 'visible';
}


//-----------------------------
function third(){
    const Question = ["", 
    "",
    "",
    "",
    "",
    "",
]

const choiceA = ["", "", "", "", "", ""];
const choiceB = ["", "", "", "", "", ""];
const choiceC = ["", "", "", "", "", ""];
const choiceD = ["", "", "", "", "", ""];
}