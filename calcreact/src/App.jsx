import React, { useState } from "react";
import "./App.css"; // Create this file for the styles

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Evaluate the expression
    } catch (error) {
      setResult("Error"); // Handle errors
    }
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        {["0", "C", "=", "+"].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "C"
                ? handleClear()
                : item === "="
                ? handleCalculate()
                : handleButtonClick(item)
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
