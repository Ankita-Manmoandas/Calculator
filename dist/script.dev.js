"use strict";

var screenDisplay = document.querySelector("#div_screen");
var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var equals = document.querySelector(".equals");
var clearcommand = document.querySelector(".clear");
var plusminuscommand = document.querySelector("#plusminus");
var percentagecommand = document.querySelector("#percentage");
var firstNum;
var secondNum;
var operation;
var screenDigits; //display numbers on screen 

numbers.forEach(function (numb) {
  numb.addEventListener("click", function (event) {
    if (screenDisplay.innerHTML == operation) {
      screenDisplay.innerHTML = "";
    }

    var digits = event.target.value;
    screenDisplay.innerHTML += digits;
  });
}); // display operators + firstnumber 

operators.forEach(function (ops) {
  ops.addEventListener("click", function (event) {
    operation = event.target.value;
    firstNum = screenDisplay.innerHTML;
    screenDisplay.innerHTML = operation;
  });
}); // now we need to add second number

equals.addEventListener("click", function () {
  secondNum = screenDisplay.innerHTML; // 

  if (operation == "+") {
    screenDisplay.innerHTML = parseFloat(firstNum) + parseFloat(secondNum);
  } else if (operation == "-") {
    screenDisplay.innerHTML = parseFloat(firstNum) - parseFloat(secondNum);
  } else if (operation == "÷") {
    screenDisplay.innerHTML = parseFloat(firstNum) / parseFloat(secondNum);
  } else if (operation == "x") {
    screenDisplay.innerHTML = parseFloat(firstNum) * parseFloat(secondNum);
  }
}); //clear button

clearcommand.addEventListener("click", function () {
  screenDisplay.innerHTML = "";
  firstNum = " ";
  secondNum = " ";
}); // plusminus

plusminuscommand.addEventListener("click", function () {
  screenDigits = screenDisplay.innerHTML;

  if (screenDigits > 0) {
    screenDisplay.innerHTML = screenDigits * -1;
  } else if (screenDigits < 0) {
    screenDisplay.innerHTML = screenDigits * 1;
  }
}); // percentages /100

percentagecommand.addEventListener("click", function () {
  screenDigits = screenDisplay.innerHTML;
  screenDisplay.innerHTML = screenDigits / 100;
}); // {
//   if (firstNum > 0) 
//   screenDisplay.innerHTML= parseFloat (firstNum) * (-1) 
//   else if ( firstNum < 0)
//   screenDisplay.innerHTML= parseFloat (firstNum) * (1)  
// }) 
// //dot command
// dotcommand.addEventListener ("click", () => {
//   screenDisplay.innerHTML= firstNum || secondNum +  "."
//   `// display jumber
// // loop thro numbers
// // symbols
// //clear button
// // strings to numbers
// // let myNumbers = []
// // let number = 
// // myNumbers.push (number)