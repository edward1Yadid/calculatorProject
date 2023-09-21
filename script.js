// Elements
const inputCalculator = document.getElementById("input-calculator");
const calculatorBord = document.getElementById("calculator");
const resultButton = document.getElementById("result");
const bC = document.getElementById("bC");
const header = document.getElementById("header");

// Variables
let number = "";
let operator = "";
let calculationArray = [];

// Event listeners for number buttons
const numbersButtons = document.querySelectorAll(".button-calculator");
numbersButtons.forEach((button) => {
  button.addEventListener("click", () => insertNumber(button.innerText));
});

// Event listeners for operator buttons
const operatorsButtons = document.querySelectorAll(".button-operator");
operatorsButtons.forEach((button) => {
  button.addEventListener("click", () => insertOperator(button.innerText));
});
//event listenert for brackets

const brackets = document.querySelectorAll(".button-brackets");
brackets.forEach((button) => {
  button.addEventListener("click", () => insetbracketsleft(button.innerText));
});

// Event listener for result button
resultButton.addEventListener("click", calculate);

// Event listener to clear input and arrays
bC.addEventListener("click", clearCalculator);

// Function to insert a number
function insertNumber(value) {
  number += value;
  inputCalculator.innerText += value;
}
function insetbracketsleft(value) {
  number += value;
  inputCalculator.innerText += value;
}

// Function to insert an operator
function insertOperator(value) {
  if (number !== "") {
    calculationArray.push(number);
    calculationArray.push(value);
    console.log(calculationArray);
    inputCalculator.innerText += value;
    number = "";
  }
}

// Function to perform the calculation
function calculate() {
  try {
    if (number !== "") {
      calculationArray.push(number);
      console.log(calculationArray);
      const result = eval(calculationArray.join(""));
      inputCalculator.innerText = result;
    }
  } catch {
    alert("please reset the calculator");
  }
}

// Function to clear input and arrays
function clearCalculator() {
  inputCalculator.innerText = "";
  number = "";
  operator = "";
  calculationArray = [];
  document.querySelectorAll("button").forEach((button) => {
    button.style.backgroundColor = "none";
  });
}

function chacngeColor(event) {
  event.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
}
