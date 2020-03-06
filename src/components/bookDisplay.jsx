import React from "react";
import "../style/components/BookDisplay.css";

function BookDisplay(props) {
  return <div id="BookDisplay">Book Here + {props.bookName}</div>;
}

export default BookDisplay;
