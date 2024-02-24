var firstNumber = 1
var secondNumber = 2
var Operator = "+"

const functionButtons = document.getElementsByClassName("functionButton")
const operatorButtons = document.getElementsByClassName("operatorButton")
const numberButtons = document.getElementsByClassName("numberButton")
const display = document.getElementById("Display")

function Add(num1, num2) {
  let product = num1 + num2
  return product
}

function Subtract(num1, num2) {
  let product = num1 - num2
  return product
}

function Multiply(num1, num2) {
  let product = num1 * num2
  return product
}

function Divide(num1, num2) {
  let product = num1 / num2
  return product
}

function Operate(operator, num1, num2) {
  if (operator === "+") {
    return Add(num1, num2)
  } else if (operator === "-") {
    return Subtract(num1, num2)
  } else if (operator === "*") {
    return Multiply(num1, num2)
  } else if (operator === "/") {
    return Divide(num1, num2)
  }
}

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function () {
    //Check text content of button clicked
    //Save this text as a string variable 'displayValue'
    //Change contents of Display to match this displayValue
    //Save first button input
    //Save button inputs following

    let displayValue = ""
    if (display.textContent === "0") {
      displayValue = this.textContent
    } else if (display.textContent !== "0") {
      displayValue = display.textContent + this.textContent
      console.log(this.textContent)
    }

    display.textContent = displayValue
  })
}

for (let i = 0; i < functionButtons.length; i++) {
  functionButtons[i].addEventListener("click", function () {
    let displayValue = ""
    let buttonText = this.textContent
    if (buttonText === "AC") {
      displayValue = "0"
    } else if (buttonText === "+/-") {
      displayValue = "function not yet implemented"
    } else if (buttonText === "%") {
      displayValue = "function not yet implemented"
    }
    display.textContent = displayValue
  })
}

//store the display text content as first number variable after an operator button is clicked
//as operator button is clicked, change operator variable to match operator clicked
//as equal button is clicked, save display text content as second number and then call operate function using firstNumber, secondNumber and Operator as parameter variables.

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function () {
    let operatorButtonText = this.textContent

    if (
      operatorButtonText === "+" ||
      operatorButtonText === "/" ||
      operatorButtonText === "-" ||
      operatorButtonText === "*"
    ) {
      firstNumber = Number(display.textContent)
      Operator = operatorButtonText
      display.textContent = ""
    } else if (operatorButtonText === "=") {
      secondNumber = Number(display.textContent)
      console.log(firstNumber)
      console.log(secondNumber)
      console.log(Operator)
      display.textContent = Operate(Operator, firstNumber, secondNumber)
    }
  })
}
