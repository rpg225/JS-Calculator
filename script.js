const displayResult = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");

let calculation = [];

let cumulativeCalculation;

function calculate(button) {
    const value = button.textContent;
    if (value == "AC") {
      calculation = [];
      displayResult.value = "";
    } else if (value == "C") {
      displayResult.value = displayResult.value.slice(0, -1);
    } else if (value === "=") {
      displayResult.value = eval(cumulativeCalculation);
    } else {
      calculation.push(value);
      cumulativeCalculation = calculation.join("");
      displayResult.value = cumulativeCalculation;
    }
  }

  
  
  buttons.forEach(button => button.addEventListener('click', () => calculate(button)))