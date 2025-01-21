/**
 * Bonus: Script used to extract the hidden URL in step 2
// Script to extract the hidden URL in step 2
let characters = [];
document
  .querySelectorAll(
    'code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"]'
  )
  .forEach((node) => {
    let charElement = node.querySelector("i.char");
    if (charElement) {
      let char = charElement.getAttribute("value");
      if (char) characters.push(char);
    }
  });
let hiddenURL = characters.join("");
console.log("Hidden URL:", hiddenURL);
*/
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [flag, setFlag] = useState("");
  const [displayedFlag, setDisplayedFlag] = useState([]);
  const displayedFlagRef = useRef([]);

  // Fetch the flag
  useEffect(() => {
    const fetchFlag = async () => {
      const response = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/777269"
      );
      const text = await response.text();
      console.log("Fetched flag:", text.trim());
      setFlag(text.trim());
    };
    fetchFlag();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (flag) {
      console.log("Starting typewriter effect with flag:", flag);
      let index = 0;
      const timer = setInterval(() => {
        displayedFlagRef.current = [...displayedFlagRef.current, flag[index]];
        setDisplayedFlag([...displayedFlagRef.current]);
        console.log(
          `Current displayed flag: ${displayedFlagRef.current.join("")}`
        );
        index++;
        if (index >= flag.length) {
          console.log("Completed typewriter effect");
          clearInterval(timer);
        }
      }, 500);
    }
  }, [flag]);

  return (
    <div>
      {!flag && <p>Loading...</p>}
      <ul>
        {displayedFlag.map((char, idx) => (
          <li key={idx}>{char}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
