import React from "react";
import { Button } from "semantic-ui-react";

export default function BookContainer(props) {
  console.log(props.bookInfo);

  const handleClick = link => {
    window.open(link, "_blank");
  };

  return (
    <div
      style={{
        background: "yellow",
        position: "relative",
        marginBottom: "20%"
      }}
    >
      <div
        style={{
          fontFamily: "Roboto",
          background: "white",
          width: "400px",
          height: "300px",
          boxShadow: "10px 10px 5px grey"
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: "-40px"
          }}
        >
          <div style={{}}>
            <img
              src={
                props.bookInfo.volumeInfo.imageLinks
                  ? props.bookInfo.volumeInfo.imageLinks.smallThumbnail
                  : "https://other-projects-fsxl.s3.us-east-2.amazonaws.com/book-cover-placeholder.png"
              }
              alt=""
            ></img>
          </div>
          <div
            style={{
              paddingTop: "80px",
              textAlign: "initial",
              paddingLeft: "5%",
              color: "#a1a1a1",
              paddingRight: "5px",
              textOverflow: "ellipsis"
            }}
          >
            <h3 style={{ color: "#979797", textOverflow: "ellipsis" }}>
              {props.bookInfo.volumeInfo.title}
              {props.bookInfo.volumeInfo.subtitle
                ? ": " + props.bookInfo.volumeInfo.subtitle
                : null}
            </h3>
            {props.bookInfo.volumeInfo.authors
              ? `By ${props.bookInfo.volumeInfo.authors[0]} `
              : null}
            <br />
            {props.bookInfo.volumeInfo.publisher
              ? `Published By: ${props.bookInfo.volumeInfo.publisher}`
              : null}
            <div style={{ marginTop: "3%" }}>
              <Button
                onClick={() => {
                  handleClick(props.bookInfo.volumeInfo.canonicalVolumeLink);
                }}
                color="teal"
              >
                See this book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
