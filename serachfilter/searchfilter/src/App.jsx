import React, { useState } from "react";
import "./App.css";

function App() {
  const productList = [
    "blue pant",
    "black pant",
    "blue shirt",
    "black shoes",
    "brown shoes",
    "white pant",
    "white shoes",
    "red shirt",
    "gray pant",
    "white shirt",
    "golden shoes",
    "dark pant",
    "pink shirt",
    "yellow pant",
  ];

  const [products, setProducts] = useState(productList);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    if (searchVal === "") {
      setProducts(productList);
      return;
    }
    const filterBySearch = productList.filter((item) =>
      item.toLowerCase().includes(searchVal.toLowerCase())
    );
    setProducts(filterBySearch);
  }

  const mystyle = {
    marginLeft: "600px",
    marginTop: "20px",
    fontWeight: "700",
  };

  return (
    <div>
      <div style={mystyle}>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button onClick={handleSearchClick} style={{ marginLeft: "10px" }}>
          Search
        </button>
      </div>
      <div>
        {products.map((product, index) => (
          <div key={index} style={mystyle}>
            {product}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
