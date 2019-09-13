import React from "react";
import { useState } from "react";
import "./App.css";
import InputBar from "./InputBar";
import BooksContainer from "./BooksContainer";
import axios from "axios";

function App(props) {
  const [books, setBooks] = useState([]);

  const getBooks = inputBook => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + inputBook)
      .then(res => {
        var newState = res.data.items;
        setBooks(newState);
      })
      .catch(err => {
        console.log("this is the err", err);
      });
  };

  return (
    <div className="App">
      <InputBar getBooks={getBooks} />
      <BooksContainer books={books} />
    </div>
  );
}

export default App;
