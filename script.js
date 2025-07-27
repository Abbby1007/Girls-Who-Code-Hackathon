document.getElementById("secondQ").style.visibility = 'hidden';

function first(){
    document.getElementById("startBtn").style.visibility = 'hidden';
    const Questions = ["By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance", 
        "test1","test2","test3","test4","test5"];
    const choiceA = ["1. Poverty", "test1","test2","test3","test4","test5"]; 
    const ChoiceB = ["2. Zero Hunger", "test1","test2","test3","test4","test5"];
    const ChoiceC = ["10. Reduced Inequalities", "test1","test2","test3","test4","test5"];
    const ChoiceD= ["12. Responsible Consumption and Production", "test1","test2","test3","test4","test5"];
   const value = Math.floor(Math.random() * 6);

   let chosen = Questions[value];

   if(value == 0){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstCorrect()"> ${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 1){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick=firstWrong()"> ${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstCorrect()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 2){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()"> ${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstCorrect()">${ChoiceC[value]}</button><br> <button onclick="firstCorrect()">${ChoiceD[value]}</button>`;
   }
      if(value == 3){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()"> ${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstCorrect()">${ChoiceD[value]}</button>`;
   }
      if(value == 4){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstCorrect()"> ${choiceA[value]} </button><br> <button onclick="firstWrong()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 5){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()"> ${choiceA[value]} </button><br> <button onclick="firstCorrect()">${ChoiceB[value]}</button><br> <button onclick="firstWrong()">${ChoiceC[value]}</button><br> <button onclick="firstWrong()">${ChoiceD[value]}</button>`;
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

function second(){
document.getElementById("Question").textContent = `test`;
document.getElementById("secondQ").style.visibility = 'hidden';



}