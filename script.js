
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
  
  let digits= event.target.value;
  screenDisplay.innerHTML += digits; 
  
})} )


// display operators + firstnumber 
operators.forEach ((ops) => {
  ops.addEventListener ("click", (event) => {
operation = event.target.value;
firstNum= screenDisplay.innerHTML
secondDisplay.innerHTML= (firstNum) + " " + (operation);
screenDisplay.innerHTML=operation; 
  })}) 


  // now we need to add second number
  
equals.addEventListener ("click", () =>
 {secondNum= screenDisplay.innerHTML;
  if (screenDisplay.innerHTML == "") {
    secondDisplay.innerHTML == "";
  } else {secondDisplay.innerHTML= (firstNum) + " " + (operation) +  " " + (secondNum);
  }
   
if ( operation == "+") {
  screenDisplay.innerHTML = parseFloat(firstNum) + parseFloat (secondNum) 
} else if ( operation == "-") {
  screenDisplay.innerHTML = parseFloat(firstNum) - parseFloat(secondNum)
  
  } else if (operation == "÷") {
    screenDisplay.innerHTML = parseFloat (firstNum) / parseFloat (secondNum)
  }
  else if (operation == "x") {
    screenDisplay.innerHTML = parseFloat(firstNum) * parseFloat (secondNum)
  }

})  

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
plusminuscommand.addEventListener ("click", () => {
 screenDigits = screenDisplay.innerHTML;

   if (screenDigits > 0) {
   screenDisplay.innerHTML= screenDigits * (-1)
   } else if (screenDigits < 0) {
     screenDisplay.innerHTML = screenDigits * (1)
   }
 }) 

// percentages /100
percentagecommand.addEventListener ("click", () => {
  screenDigits = screenDisplay.innerHTML;
  screenDisplay.innerHTML= screenDigits / (100)}

)
// limit screen display to 10 digits for first and second numbers. 

// {
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
