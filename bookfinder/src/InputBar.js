import React from "react";
import { useState } from "react";

export default function InputBar(props) {
  const [searchTerm, updateSearchTerm] = useState("");

  const updateState = e => {
    let term = e.target.value;
    updateSearchTerm(term);
  };

  return (
    <div>
      <h1 style={{ color: "#a1a1a1" }}> Book Finder </h1>
      <input
        onChange={e => {
          updateState(e);
        }}
        type="text"
        style={{ width: "300px", height: "20px" }}
      ></input>
      <button
        onClick={e => {
          props.getBooks(searchTerm);
        }}
        style={{
          background: "#00d17a",
          height: "26px",
          width: "100px",
          color: "white",
          fontWeight: "bold",
          borderColor: "#00d17a"
        }}
      >
        Search
      </button>
    </div>
  );
}
