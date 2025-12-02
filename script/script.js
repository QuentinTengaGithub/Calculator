let current = "0";
let history = "";
let lastOp = null;

function updateDisplay() {
  const displayEl = document.getElementById("display");
  displayEl.textContent = current;
  document.getElementById("history").textContent = history;

  displayEl.classList.add("display-animate");
  setTimeout(() => {
    displayEl.classList.remove("display-animate");
  }, 100);
}

function inputNum(num) {
  if (current === "0") current = num;
  else current += num;
  updateDisplay();
}

function inputDot() {
  if (!current.includes('.')) {
    current += '.';
    updateDisplay();
  }
}

function inputOp(op) {
  history = current + " " + op;
  lastOp = op;
  current = "";
  updateDisplay();
}

function calculate() {
  if (!lastOp || history === "") return;
  let prev = parseFloat(history);
  let now = parseFloat(current);

  let result = 0;
  switch (lastOp) {
    case '+': result = prev + now; break;
    case '-': result = prev - now; break;
    case '*': result = prev * now; break;
    case '/': result = prev / now; break;
  }

  history = history + " " + current + " =";
  current = result.toString();
  lastOp = null;
  updateDisplay();
}

function clearAll() {
  current = "0";
  history = "";
  lastOp = null;
  updateDisplay();
}