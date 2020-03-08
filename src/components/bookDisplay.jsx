import React from "react";
import "../style/components/BookDisplay.css";
import BookInspect from "./bookInspect";

function BookDisplay(props) {
  return (
    <div id="BookDisplay">
      <BookInspect />
      Book: - {props.bookName} - {props.bookAuthor} - {props.bookPublisher}
    </div>
  );
}

export default BookDisplay;
