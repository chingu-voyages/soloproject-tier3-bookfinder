import React from "react";
import BookContainer from "./BookContainer";

export default function BooksContainer(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        marginTop: "6%",
        textAlign: "center",
        justifyItems: "center",
        paddingLeft: "15%",
        paddingRight: "15%"
      }}
    >
      {props.books.map((ele, ind) => {
        return <BookContainer key={ind} bookInfo={ele} />;
      })}
    </div>
  );
}
