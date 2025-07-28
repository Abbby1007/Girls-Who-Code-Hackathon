document.getElementById("secondQ").style.visibility = 'hidden';
document.getElementById("thirdQ").style.visibility = 'hidden';
document.getElementById("Question").style.visibility = 'hidden';

var valueOne = 0;
var valueTwo = 0;
var valueThree = 0;
var valueFour = 0;
var valueFive = 0;
var round = 0;
var total = 0;

// FIRST QUESTION PARTS START --------------------------------------
function first(){
    document.getElementById("Question").style.visibility = 'visible';
    round += 1;
    document.getElementById("round").textContent= `Round ${round}/3`;
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
   
    valueOne = Math.floor(Math.random() * 6);

   if(valueOne == 0){
    document.getElementById("Question").textContent = `${Questions[valueOne]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstCorrect()">${choiceA[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceB[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceC[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceD[valueOne]}</button>`;
   }
      if(valueOne == 1){
    document.getElementById("Question").textContent = `${Questions[valueOne]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()">${choiceA[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceB[valueOne]}</button><br> <button onclick="firstCorrect()">${ChoiceC[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceD[valueOne]}</button>`;
   }
      if(valueOne == 2){
    document.getElementById("Question").textContent = `${Questions[valueOne]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()">${choiceA[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceB[valueOne]}</button><br> <button onclick="firstCorrect()">${ChoiceC[valueOne]}</button><br> <button onclick="firstCorrect()">${ChoiceD[valueOne]}</button>`;
   }
      if(valueOne == 3){
    document.getElementById("Question").textContent = `${Questions[valueOne]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()">${choiceA[valueOne]} </button><br> <button onclick="firstWrong()">${ChoiceB[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceC[valueOne]}</button><br> <button onclick="firstCorrect()">${ChoiceD[valueOne]}</button>`;
   }
      if(valueOne == 4){
  document.getElementById("Question").textContent = `${Questions[valueOne]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstCorrect()">${choiceA[valueOne]} </button><br> <button onclick="firstWrong()">${ChoiceB[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceC[valueOne]}</button><br> <button onclick="firstCorrect()">${ChoiceD[valueOne]}</button>`;
   }
      if(valueOne == 5){
    document.getElementById("Question").textContent = `${Questions[valueOne]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="firstWrong()">${choiceA[valueOne]}</button><br> <button onclick="firstCorrect()">${ChoiceB[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceC[valueOne]}</button><br> <button onclick="firstWrong()">${ChoiceD[valueOne]}</button>`;
   }

    

}

function firstCorrect(){
    total += 1;
  document.getElementById("results").innerHTML = `<h3 id="correct"> Correct </h3>`;  
   document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("secondQ").style.visibility = 'visible';

 new Audio("answer-correct.mp3").play();
}

function firstWrong(){
    new Audio("incorrect-293358.mp3").play();
    document.getElementById("Buttons").innerHTML = ``
     document.getElementById("secondQ").style.visibility = 'visible';
     if(valueOne == 0){
    document.getElementById("results").innerHTML = `<h3 id="wrong"> Wrong the correct answer was 1. Poverty</h3>`;  
     }
     if(valueOne == 1){
    document.getElementById("results").innerHTML = `<h3 id="wrong"> Wrong the correct answer was 8. Decent Work and economic growth </h3>`;
     }
    if(valueOne == 2){
    document.getElementById("results").innerHTML = `<h3 id="wrong"> Wrong the correct answer was 3. Good Health and Well-Being </h3>`;
    }
        if(valueOne == 3){
    document.getElementById("results").innerHTML = `<h3 id="wrong"> Wrong the correct answer was 14. Life Below Water </h3>`;
    }
        if(valueOne == 4){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 6. Clean water and sanitation </h3>`;
    }
        if(valueOne == 5){
    document.getElementById("results").innerHTML = `<h3 id="wrong"> Wrong the correct answer was 16. Peace, Justice, and Strong Institution </h3>`;
    }

     
}

// FIRST QUESTION PARTS END --------------------------------------

// Second QUESTION PARTS START --------------------------------------
function second(){
        document.getElementById("Question").style.visibility = 'visible';
    round += 1;
    document.getElementById("round").textContent= `Round ${round}/3`;
document.getElementById("results").textContent = ` `; 
document.getElementById("secondQ").style.visibility = 'hidden';

const Questions = ["By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons", 
    "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality",
    "Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020",
    "Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species",
    "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
    "Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress",
]

const choiceA = ["10. Reduced Inequalities", "2. Zero Hunger", "9. Industry, Innovation and Infrastructure", "7. Affortable and Clean Energy", "13. Climate Action", "16. Peace, Justice and Strong Institutions"];
const ChoiceB = ["12. Responsible Consumption and Production", "1. Poverty", "17. Partnerships For The Goals", "15. Life on Land", "15. Life On Land", "8. Decent Work and Economic Growth"];
const ChoiceC = ["11. Sustainable cities and communities", "3. Good Health and Well-Being", "16. Peace, Justice and Strong Institutions", "12. Responsible Consumption and Production", "11. Sustainable Cities and Communities", "10. Reduced Inequalities"];
const ChoiceD = ["3. Good Health and Well-Being", "7. Affortable and Clean Energy", "12. Responsible Consumption and Production", "11. Sustainable Cities and Communities", "1. No Poverty", "17. Partnerships For The Goals"];

   valueTwo = Math.floor(Math.random() * 6);

   if(valueTwo == 0){
    document.getElementById("Question").textContent = `${Questions[valueTwo]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()">${choiceA[valueTwo]} </button><br> <button onclick="secondWrong()">${ChoiceB[valueTwo]}</button><br> <button onclick="secondCorrect()">${ChoiceC[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceD[valueTwo]}</button>`;
   }
      if(valueTwo == 1){
    document.getElementById("Question").textContent = `${Questions[valueTwo]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()">${choiceA[valueTwo]} </button><br> <button onclick="secondWrong()">${ChoiceB[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceC[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceD[valueTwo]}</button>`;
   }
      if(valueTwo == 2){
    document.getElementById("Question").textContent = `${Questions[valueTwo]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()">${choiceA[valueTwo]} </button><br> <button onclick="secondWrong()">${ChoiceB[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceC[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceD[valueTwo]}</button>`;
   }
      if(valueTwo == 3){
    document.getElementById("Question").textContent = `${Questions[valueTwo]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()">${choiceA[valueTwo]} </button><br> <button onclick="secondCorrect()">${ChoiceB[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceC[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceD[valueTwo]}</button>`;
   }
      if(valueTwo == 4){
    document.getElementById("Question").textContent = `${Questions[valueTwo]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondCorrect()">${choiceA[valueTwo]} </button><br> <button onclick="secondWrong()">${ChoiceB[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceC[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceD[valueTwo]}</button>`;
   }
      if(valueTwo == 5){
    document.getElementById("Question").textContent = `${Questions[valueTwo]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="secondWrong()">${choiceA[valueTwo]} </button><br> <button onclick="secondWrong()">${ChoiceB[valueTwo]}</button><br> <button onclick="secondWrong()">${ChoiceC[valueTwo]}</button><br> <button onclick="secondCorrect()">${ChoiceD[valueTwo]}</button>`;
   }
}

function secondCorrect(){
     new Audio("answer-correct.mp3").play();
    total += 1;
  document.getElementById("results").innerHTML = `<h3 id="correct"> Correct </h3>`;  
   document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("thirdQ").style.visibility = 'visible';
}

function secondWrong(){
      new Audio("incorrect-293358.mp3").play();
   document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("thirdQ").style.visibility = 'visible';

   if(valueTwo == 0){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 11. Sustainable Cities and Communities`;  
     }
     if(valueTwo == 1){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 2. Zero Hunger`;
     }
    if(valueTwo == 2){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 9. Industry, Innovation and Infrastructure`;
    }
        if(valueTwo == 3){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 15. Life on Land`;
    }
        if(valueTwo == 4){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 13. Climate Action`;
    }
        if(valueTwo == 5){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 17. Partnerships For The Goals`;
    }
}


// Second QUESTION PARTS END --------------------------------------
function third(){
        document.getElementById("Question").style.visibility = 'visible';
document.getElementById("results").textContent = ` `; 
document.getElementById("thirdQ").style.visibility = 'hidden';
    round += 1;
    document.getElementById("round").textContent= `Round ${round}/3`;

    const Questions = ["By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship", 
    "Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate",
    "By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology",
    "Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard",
    "By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment",
    "By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate",
]

valueThree = Math.floor(Math.random() * 6);

const choiceA = ["1. Poverty", "10.Reduced Inequalities", "7.Affordable and Clean Energy", "16. Peace, Justice, and Strong Institutions", "17. Partnerships For The Goals", "13. Climate Action"];
const ChoiceB = ["8. Decent Work and Economic Growth", "16. Peace, Justice and Strong Institutions", "6.Clean Water and Sanitation", "10. Reduced Inequalities", "12. Responsible Inequalities", "2. Zero Hunger"];
const ChoiceC = ["10. Reduced Inequalities", "17.Partnerships For The Goals", "9. Industry, Innovation and Infrastructure", "1. Poverty", "3. Good Health and Well-Being", "6. Clean Water and Sanitation"];
const ChoiceD = ["4. Quality Education", "5. Gender Equality", "11. Sustainable Cities and Communities", "12. Responsible Inequalities", "7. Affortable and Clean Energy", "15. Life On Land"];

if(valueThree == 0){
    document.getElementById("Question").textContent = `${Questions[valueThree]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="thirdWrong()">${choiceA[valueThree]} </button><br> <button onclick="thirdWrong()">${ChoiceB[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceC[valueThree]}</button><br> <button onclick="thirdCorrect()">${ChoiceD[valueThree]}</button>`;
   }
      if(valueThree == 1){
    document.getElementById("Question").textContent = `${Questions[valueThree]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="thirdWrong()">${choiceA[valueThree]} </button><br> <button onclick="thirdWrong()">${ChoiceB[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceC[valueThree]}</button><br> <button onclick="thirdCorrect()">${ChoiceD[valueThree]}</button>`;
   }
      if(valueThree == 2){
    document.getElementById("Question").textContent = `${Questions[valueThree]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="thirdCorrect()">${choiceA[valueThree]} </button><br> <button onclick="thirdWrong()">${ChoiceB[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceC[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceD[valueThree]}</button>`;
   }
      if(valueTwo == 3){
    document.getElementById("Question").textContent = `${Questions[valueThree]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="thirdWrong()">${choiceA[valueThree]} </button><br> <button onclick="thirdCorrect()">${ChoiceB[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceC[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceD[valueThree]}</button>`;
   }
      if(valueThree == 4){
    document.getElementById("Question").textContent = `${Questions[valueThree]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="thirdWrong()">${choiceA[valueThree]} </button><br> <button onclick="thirdCorrect()">${ChoiceB[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceC[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceD[valueThree]}</button>`;
   }
      if(valueThree == 5){
    document.getElementById("Question").textContent = `${Questions[valueThree]}`;
    document.getElementById("Buttons").innerHTML = `<button onclick="thirdWrong()">${choiceA[valueThree]} </button><br> <button onclick="thirdWrong()">${ChoiceB[valueThree]}</button><br> <button onclick="thirdCorrect()">${ChoiceC[valueThree]}</button><br> <button onclick="thirdWrong()">${ChoiceD[valueThree]}</button>`;
   }

}

function thirdCorrect(){
     new Audio("answer-correct.mp3").play();
    total += 1;

    document.getElementById("results").innerHTML = ` <h3 id="correct> Correct </h3>`
    document.getElementById("total").innerHTML = `<h3> You got ${total} out of 3 Questions right. You can try again to learn more about UN SDG Goals </h3> <br> <a href="QuestionOne.html"> <button id="tryAgain">Try Again</button> </a>`;
    document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("thirdQ").style.visibility = 'hidden';

}

function thirdWrong(){
      new Audio("incorrect-293358.mp3").play();
        document.getElementById("Buttons").innerHTML = ` `
   document.getElementById("thirdQ").style.visibility = 'hidden';
if(valueThree == 0){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 4. Quality Education</h3>`; 
    document.getElementById("total").innerHTML = `<h3> You got ${total} out of 3 Questions right. You can try again to learn more about UN SDG Goals </h3> <br> <a href="QuestionOne.html"> <button id="tryAgain">Try Again</button> </a>`;
     }
     if(valueThree == 1){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 5. Gender Equality</h3>`;
document.getElementById("total").innerHTML = `<h3> You got ${total} out of 3 Questions right. You can try again to learn more about UN SDG Goals </h3> <br> <a href="QuestionOne.html"> <button id="tryAgain">Try Again</button> </a>`;
     }
    if(valueThree == 2){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 7. Affordable and Clean Energy</h3>`;
document.getElementById("total").innerHTML = `<h3> You got ${total} out of 3 Questions right. You can try again to learn more about UN SDG Goals </h3> <br> <a href="QuestionOne.html"> <button id="tryAgain">Try Again</button> </a>`;
    }
        if(valueThree == 3){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 10. Reduced Inequalities</h3> `;
document.getElementById("total").innerHTML = `<h3> You got ${total} out of 3 Questions right. You can try again to learn more about UN SDG Goals </h3> <br> <a href="QuestionOne.html"> <button id="tryAgain">Try Again</button> </a>`;
    }
        if(valueThree == 4){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 12. Responsible Consumption and Production </h3>`;
document.getElementById("total").innerHTML = `<h3> You got ${total} out of 3 Questions right. You can try again to learn more about UN SDG Goals </h3> <br> <a href="QuestionOne.html"> <button id="tryAgain" >Try Again</button> </a>`;
    }
        if(valueThree == 5){
    document.getElementById("results").innerHTML = ` <h3 id="wrong"> Wrong the correct answer was 6. Clean Water and Sanitation</h3>`;
 document.getElementById("total").innerHTML = `<h3> You got ${total} out of 3 Questions right. You can try again to learn more about UN SDG Goals </h3> <br> <a href="QuestionOne.html"> <button id="tryAgain" >Try Again</button> </a>`;
    }
}