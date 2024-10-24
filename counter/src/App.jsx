import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleincrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="counter" style={{ display: "flex", gap: "20px" }}>
          <button onClick={handledecrement}>-</button>
          <h1>{count}</h1>
          <button onClick={handleincrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
