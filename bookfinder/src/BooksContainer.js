import React from "react";
import BookContainer from "./BookContainer";

export default function BooksContainer(props) {
  return (
    <div
      style={{
        marginTop: "5%",
        display: "grid",
        gridTemplateColumns: "auto auto"
      }}
    >
      {props.books.map((ele, ind) => {
        return <BookContainer key={ind} bookInfo={ele} />;
      })}
    </div>
  );
}
