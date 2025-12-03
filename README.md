🧮 Calculator – Quentin TENGA

A modern calculator built with HTML, CSS, and JavaScript, featuring light/dark theme switching, operation history display, smooth animations, and a clean responsive design.

📸 Preview

The app includes:

A main display for the current number

A history area for the previous operation

Standard calculator buttons (numbers, operators, AC, equals)

A theme toggle button (moon/sun icon)

✨ Features
🎨 Light & Dark Theme

Theme preference saved in localStorage

Instant theme switching with a dedicated toggle button

Complete palette adaptation: background, buttons, display, highlights

⌨️ Fully Functional Calculator

Supports addition, subtraction, multiplication, division

Decimal number input

Real-time operation history

Smooth “pop” animation on display updates

🧱 Modern & Responsive UI

CSS Grid layout for calculator buttons

Hover/active transitions

Clean and minimalist styling

📂 Project Structure
/
│── index.html
│── styles/
│   └── styles.css
│── script/
│   └── script.js
│── icon/
│   ├── moon.png
│   ├── sun.png
│   └── logo.png
│── README.md

🚀 Installation & Usage
1. Clone the repository
git clone https://github.com/your-username/calculator.git
cd calculator

2. Open the project

You can simply open index.html in your browser:

Double-click the file
or

Use a local server (optional but recommended):

npx serve .

🛠️ How It Works
JavaScript (script.js)

Handles theme toggling using localStorage

Animation via the display-animate CSS class

Core functions:

inputNum()

inputOp()

inputDot()

calculate()

clearAll()

toggleTheme()

CSS (styles.css)

Full styling for .dark-theme and .light-theme

Button grid using CSS Grid

Interaction states (hover, active, transitions)

Styling for display, history, and responsiveness

🧭 Future Improvements

Possible enhancements:

Scientific calculator mode

Refactoring using ES6 classes

Convert to a React or Vue application

Add a full scrollable history

Turn it into a PWA (installable app)

👨‍💻 Author

Quentin TENGA
Built using plain HTML, CSS, and JavaScript.