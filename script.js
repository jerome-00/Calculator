var firstNumber = 1
var secondNumber = 2
var Operator = "+"

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

console.log("Hello World")

console.log(Add(firstNumber, secondNumber))
console.log(Operate(Operator, firstNumber, secondNumber))
