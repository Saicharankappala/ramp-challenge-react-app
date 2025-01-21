# Ramp Challenge: React Typewriter App

## 🚀 Overview
This project is a solution to the Ramp Challenge. It fetches a hidden flag from a URL and displays it with a typewriter effect using React. Each character of the flag is rendered as a list item, with a half-second delay between characters.

## 🛠 Features
- Fetches the flag from a given URL.
- Displays the flag using a typewriter animation.
- Simulates the typewriter effect with a delay of 0.5 seconds per character.
- Renders each character of the flag as a list item.

## 🔗 Live Demo
You can access the live demo [here](<CodeSandbox Link>).

## 📝 Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Saicharankappala/ramp-challenge-react-app.git
   cd ramp-challenge-react-app
2. Install dependencies:
   ```bash
   npm install
4.  Run the app:
     ```bash
      npm start

📜 Code Highlights
Typewriter Effect:
The typewriter effect is implemented using React's useEffect and setInterval to update the displayed flag one character at a time.
Fetch Flag:
The app fetches the flag from the URL using the fetch API and handles potential errors gracefully.

🛠 Tech Stack
Frontend: React
APIs: Browser fetch API
Deployment: CodeSandbox

🏆 Bonus: URL Extraction Script
The hidden URL was extracted from the HTML using the following JavaScript script:
```javascript
let characters = [];
document.querySelectorAll('code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"]').forEach((node) => {
  let charElement = node.querySelector("i.char");
  if (charElement) {
    let char = charElement.getAttribute("value");
    if (char) characters.push(char);
  }
});
let hiddenURL = characters.join("");
console.log("Hidden URL:", hiddenURL);


