document.getElementById("secondQ").style.visibility = 'hidden';

function first(){
    const Questions = ["test0", "test1","test2","test3","test4","test5"];
    const choiceA = ["test0", "test1","test2","test3","test4","test5"]; 
    const ChoiceB = ["test0", "test1","test2","test3","test4","test5"];
    const ChoiceC = ["test0", "test1","test2","test3","test4","test5"];
    const ChoiceD= ["test0", "test1","test2","test3","test4","test5"];
   const value = Math.floor(Math.random() * 6);

   let chosen = Questions[value];

   if(value == 0){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()"> ${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 1){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick=secondWrong()"> ${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondCorrect()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 2){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()"> ${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondCorrect()">${ChoiceC[value]}</button><br> <button onclick="secondCorrect()">${ChoiceD[value]}</button>`;
   }
      if(value == 3){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()"> ${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondCorrect()">${ChoiceD[value]}</button>`;
   }
      if(value == 4){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()"> ${choiceA[value]} </button><br> <button onclick="secondWrong()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }
      if(value == 5){
    document.getElementById("Question").textContent = `${Questions[value]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()"> ${choiceA[value]} </button><br> <button onclick="secondCorrect()">${ChoiceB[value]}</button><br> <button onclick="secondWrong()">${ChoiceC[value]}</button><br> <button onclick="secondWrong()">${ChoiceD[value]}</button>`;
   }

    

}

function secondCorrect(){
  document.getElementById("results").textContent = `Correct`;  
   document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("secondQ").style.visibility = 'visible';
}

function secondWrong(){
    document.getElementById("results").textContent = `Wrong`;  
     document.getElementById("Buttons").innerHTML = ``
     document.getElementById("secondQ").style.visibility = 'visible';
}