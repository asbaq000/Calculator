let displayValue = "";

function appendToDisplay(value) {
  if (value === "+/-" && displayValue !== "") {
    displayValue = displayValue * -1;
  } else {
    displayValue += value;
  }
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// Add keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  
  if (key >= '0' && key <= '9') {
    appendToDisplay(key);
  } else if (key === '.') {
    appendToDisplay('.');
  } else if (key === '+') {
    appendToDisplay('+');
  } else if (key === '-') {
    appendToDisplay('-');
  } else if (key === '*') {
    appendToDisplay('*');
  } else if (key === '/') {
    appendToDisplay('/');
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    event.preventDefault();
    // Remove the last character
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '+') {
    appendToDisplay('+');
  } else if (key === '%') {
    appendToDisplay('%');
  }
});

// Allow cursor movement with arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    let caretPosition = getCaretPosition();
    if (caretPosition > 0) {
      setCaretPosition(caretPosition - 1);
    }
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    let caretPosition = getCaretPosition();
    if (caretPosition < displayValue.length) {
      setCaretPosition(caretPosition + 1);
    }
  }
});

function getCaretPosition() {
  let input = document.getElementById("display");
  return input.selectionStart;
}

function setCaretPosition(position) {
  let input = document.getElementById("display");
  input.setSelectionRange(position, position);
}
