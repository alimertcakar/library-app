import React from "react";
import "../style/components/BookInspect.css";
import { useState } from "react";
function BookInspect(props) {
  const [src, setSrc] = useState("book.svg");
  return (
    <img
      src={require("../images/" + src)}
      id="bookInspect"
      alt="Inspect Book"
      height="40"
      width="40"
      onMouseEnter={() => {
        setSrc("bookOpen.svg");
      }}
      onClick={() => {
        window.location.href = ` ${window.location.origin}/detail/${props.id}`;
      }}
      onMouseLeave={() => setSrc("book.svg")}
    />
  );
}

export default BookInspect;
