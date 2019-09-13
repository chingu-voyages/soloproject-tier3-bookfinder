import React from "react";

export default function BookContainer(props) {
  console.log(
    "info here =========================",
    props.bookInfo.volumeInfo.imageLinks.smallThumbnail
  );
  return (
    <div>
      <div>
        <img
          src={props.bookInfo.volumeInfo.imageLinks.smallThumbnail}
          alt=""
        ></img>
      </div>
    </div>
  );
}
