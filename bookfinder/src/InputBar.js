import React from "react";

export default function InputBar() {
  return (
    <div>
      <h1> Book Finder </h1>
      <input type="text" style={{ width: "300px", height: "20px" }}></input>
      <button style={{ height: "26px", width: "100px" }}>Search</button>
    </div>
  );
}
