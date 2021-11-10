
const screenDisplay = document.querySelector ("#div_screen")

let numbers= document.querySelectorAll (".number")
const operators= document.querySelectorAll (".operator")
const equals= document.querySelector (".equals")
let firstNum;
let secondNum;
let operation; 

//display numbers on screen 
numbers.forEach((numb)=> {
  numb.addEventListener ("click", (event) => {
    if (operation) {
    screenDisplay.innerHTML= "";
  }
  let digit= event.target.value;
  screenDisplay.innerHTML+= digit;
  
})} )


// display operators + firstnumber 
operators.forEach ((ops) => {
  ops.addEventListener ("click", (event) => {
operation = event.target.value;
firstNum= screenDisplay.innerHTML;
screenDisplay.innerHTML=operation; 
  })}) 


  // now we need to add second number
  
equals.addEventListener ("click", () =>
{
  secondNum= screenDisplay.innerHTML; // 

if ( operation == "+") {
  screenDisplay.innerHTML = parseFloat(firstNum) + parseFloat (secondNum) 
} else if ( operation == "-") {
  screenDisplay.innerHTML = parseFloat(firstNum) - parseFloat(secondNum)
  
  } else if (operation == "÷") {
    screenDisplay,innerHTML = parseFloat (firstNum) / parseFloat (secondNum)
  }
  else if (operation == "x") {
    screenDisplay.innerHTML = parseFloat(firstNum) * parseFloat (secondNum)
  }
})  


//   `// display jumber
// // loop thro numbers




// // symbols


// //clear button

// // strings to numbers

// // let myNumbers = []
// // let number = 
// // myNumbers.push (number)
