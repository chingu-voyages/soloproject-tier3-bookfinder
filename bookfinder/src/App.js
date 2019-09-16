import React from "react";
import { useState } from "react";
import "./App.css";
import InputBar from "./InputBar";
import BooksContainer from "./BooksContainer";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Header, Icon, Segment } from "semantic-ui-react";

const notFoundSegment = () => (
  <Header icon>
    <Icon name="search" />
    We don't have any books matching your search.
  </Header>
);

function App(props) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);

  const getBooks = inputBook => {
    setLoading(true);
    if (!found) setFound(true);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + inputBook)
      .then(res => {
        if (res.data.totalItems === 0) {
          setLoading(false);
          setBooks([]);
          setFound(false);
        } else {
          setBooks(res.data.items);
          setLoading(false);
          if (!found) {
            setFound(true);
          }
        }
      })
      .catch(err => {
        console.log("this is the err", err);
      });
  };

  const startSpinner = () => {
    return (
      <div style={{ paddingTop: "5%" }}>
        <Loader
          type="Oval"
          color="#009C95"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  };

  return (
    <div className="App">
      <InputBar getBooks={getBooks} />
      {loading ? startSpinner() : null}
      {!found ? notFoundSegment() : null}
      {!loading && books.length ? <BooksContainer books={books} /> : null}
    </div>
  );
}

export default App;
