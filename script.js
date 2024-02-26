var firstNumber = ""
var secondNumber = ""
var Operator = "+"
let pairEvaluated = 0

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
    if (
      display.textContent === "0" ||
      display.textContent === "+" ||
      display.textContent === "-" ||
      display.textContent === "*" ||
      display.textContent === "/"
    ) {
      displayValue = this.textContent
    } else if (display.textContent !== "0") {
      if (pairEvaluated === 0) {
        displayValue = display.textContent + this.textContent
      }
      if (pairEvaluated === 1) {
        displayValue = this.textContent
        pairEvaluated = 0
      }
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
    handleOperatorButtonClick(operatorButtonText)
  })
}

function isArithmeticOperator(operatorButtonText) {
  if (
    operatorButtonText === "+" ||
    operatorButtonText === "/" ||
    operatorButtonText === "-" ||
    operatorButtonText === "*"
  ) {
    return true
  }
}

function displayClear() {
  display.textContent = ""
}

function storeFirstNumber() {
  firstNumber = Number(display.textContent)
}

function storeSecondNumber() {
  secondNumber = Number(display.textContent)
}

function storeOperator(operatorButtonText) {
  Operator = operatorButtonText
}

function computeAnswer(Operator, firstNumber, secondNumber) {
  display.textContent = Operate(Operator, firstNumber, secondNumber)
}

function handleOperatorButtonClick(operatorButtonText) {
  if (isArithmeticOperator(operatorButtonText) === true) {
    storeFirstNumber()
    storeOperator(operatorButtonText)

    displayClear()
    display.textContent = operatorButtonText
  } else if (operatorButtonText === "=") {
    storeSecondNumber()
    computeAnswer(Operator, firstNumber, secondNumber)
    pairEvaluated = 1
  }
}

//Next Up: Refactor Number Button For Loop?
