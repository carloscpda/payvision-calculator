import { el } from "./utils.js";
import { operate } from "./operations.js";

// Variables
const calculator = el("#calculator"), // Calculator
  viewer = el("#viewer"), // Calculator screen where result is displayed
  equals = el("#equals"), // Equal button
  clear = el("#clear"), // Equal button
  nums = el(".calculator__num"), // List of numbers
  ops = el(".calculator__ops"); // List of operators

let theNum = "", // Current number
  oldNum = "", // First number
  resultNum, // Result
  operator; // Batman

// When: Number is clicked. Get the current number selected
const handleNumberClick = function () {
  if (resultNum) {
    // If a result was displayed, reset number
    theNum = this.getAttribute("data-num");
    resultNum = "";
  } else {
    // Otherwise, add digit to previous number (this is a string!)
    theNum += this.getAttribute("data-num");
  }

  viewer.innerHTML = theNum; // Display current number
};

// When: Operator is clicked. Pass number to oldNum and save operator
const handleOperatorClick = function () {
  oldNum = theNum;
  theNum = "";
  operator = this.getAttribute("data-ops");

  viewer.setAttribute("data-result", ""); // Reset result in attr
};

// When: Equals is clicked. Calculate result
const handleEqualsClick = function () {
  // Convert string input to numbers
  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);

  // Perform operation
  resultNum = operate(operator, oldNum, theNum);

  // Clean operator
  operator = "";

  // If NaN or Infinity returned
  if (!isFinite(resultNum)) {
    if (isNaN(resultNum)) {
      // If result is not a number; set off by, eg, double-clicking operators
      resultNum = "You broke it!";
    } else {
      // If result is infinity, set off by dividing by zero
      resultNum = "Look at what you've done";
      calculator.classList.add("calculator--broken"); // Break calculator
    }
  }

  // Display result, finally!
  viewer.innerHTML = resultNum;
  viewer.setAttribute("data-result", resultNum);

  // Now reset oldNum & keep result
  oldNum = 0;
  theNum = resultNum;
};

// When: Clear button is pressed. Clear everything
const handleClearClick = function () {
  oldNum = "";
  theNum = "";
  viewer.innerHTML = "0";
  viewer.setAttribute("data-result", resultNum);
};

/* The click events */

// Add click event to numbers
nums.forEach((num) => {
  num.onclick = handleNumberClick;
});

// Add click event to operators
ops.forEach((op) => {
  op.onclick = handleOperatorClick;
});

// Add click event to equal sign
equals.onclick = handleEqualsClick;

// Add click event to clear button
clear.onclick = handleClearClick;
