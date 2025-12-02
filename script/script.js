let current = "0";
let history = "";
let lastOp = null;

document.addEventListener('DOMContentLoaded', (event) => {
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    document.body.className = savedTheme;
    if (savedTheme === 'dark-theme') {
        themeIcon.src = 'icon/sun.png';
    } else {
        themeIcon.src = 'icon/moon.png';
    }
});


function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        themeIcon.src = 'icon/moon.png';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        themeIcon.src = 'icon/sun.png';
    }
}

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