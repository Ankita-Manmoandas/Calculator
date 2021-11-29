
const screenDisplay = document.querySelector ("#div_screen")
const secondDisplay= document.querySelector ("#div_second_screen")

let numbers= document.querySelectorAll (".number")
const operators= document.querySelectorAll (".operator")
const equals= document.querySelector (".equals")
const clearcommand= document.querySelector (".clear")
const plusminuscommand = document.querySelector ("#plusminus")
const percentagecommand = document.querySelector ("#percentage")
let firstNum;
let secondNum;
let operation; 
let screenDigits;

//display numbers on screen 
numbers.forEach((numb)=> {
  numb.addEventListener ("click", (event) => {
    if (screenDisplay.innerHTML==operation) {
    screenDisplay.innerHTML= "";
    }
  // limit screen display to 10 digits for first and second numbers. 
  screenDisplay.innerHTML += event.target.value
  if (screenDisplay.innerHTML.length >= 9) {
    event.target.value= "" }

})})


// display operators + firstnumber 
operators.forEach ((ops) => {
  ops.addEventListener ("click", (event) => {
operation = event.target.value;
firstNum= screenDisplay.innerHTML
secondDisplay.innerHTML= (firstNum) + " " + (operation);
screenDisplay.innerHTML=operation; 
  })}) 


  // now we need to add second number
  
const calculateResult= (operation) => {

if ( operation == "+") {
  return parseFloat(firstNum) + parseFloat(secondNum)
  } else if ( operation == "-") {
  return parseFloat(firstNum) - parseFloat(secondNum)
  } else if (operation == "÷") {
   return parseFloat (firstNum) / parseFloat (secondNum)
  }
  else if (operation == "x") {
    return parseFloat(firstNum) * parseFloat (secondNum)
  }
}

equals.addEventListener("click", ()  => {
  secondNum= screenDisplay.innerHTML;
{ 
  if 
  (screenDisplay.innerHTML == "") {
  secondDisplay.innerHTML == "";
  } else
  { secondDisplay.innerHTML= (firstNum) + " " + (operation) +  " " + (secondNum) 
  }
   secondNum = screenDisplay.innerHTML;
      screenDisplay.innerHTML= calculateResult(operation)


}})

//clear button

clearcommand.addEventListener ("click", () =>
{
  screenDisplay.innerHTML= "";
  firstNum="";
  secondNum=""; 
  secondDisplay.innerHTML = "";
  operation=""; 
  
}) 
 

// plusminus
const plusMinusFunction = () => {

  if (screenDigits > 0) {
   return screenDigits * (-1)
    } else if (screenDigits < 0) {
     return screenDigits * (1)
    }
}
plusminuscommand.addEventListener ("click", () => {
  screenDigits = screenDisplay.innerHTML;
  screenDisplay.innerHTML= plusMinusFunction();
})

 
  
// plusminuscommand.addEventListener ("click", () => {
//  screenDigits = screenDisplay.innerHTML;

//    if (screenDigits > 0) {
//    screenDisplay.innerHTML= screenDigits * (-1)
//    } else if (screenDigits < 0) {
//      screenDisplay.innerHTML = screenDigits * (1)
//    }
//  }) 
 

// percentages /100
percentagecommand.addEventListener ("click", () => {
  screenDigits = screenDisplay.innerHTML;
  screenDisplay.innerHTML= screenDigits / (100)}

)