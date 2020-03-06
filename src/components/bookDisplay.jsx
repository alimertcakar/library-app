import React from "react";
import "../style/components/BookDisplay.css";

function BookDisplay(props) {
  return (
    <div id="BookDisplay">
      Book: - {props.bookName} - {props.bookAuthor} - {props.bookPublisher}
    </div>
  );
}

export default BookDisplay;
