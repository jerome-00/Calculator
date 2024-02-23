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

console.log("Hello World")

console.log(Add(firstNumber, secondNumber))
console.log(Operate(Operator, firstNumber, secondNumber))
