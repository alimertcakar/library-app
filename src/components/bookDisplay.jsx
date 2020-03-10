import React from "react";
import "../style/components/BookDisplay.css";
import BookInspect from "./bookInspect";

function BookDisplay(props) {
  return (
    <div id="BookDisplay">
      <BookInspect id={props.id} />
      Book: - {props.bookName} - {props.bookAuthor} - {props.bookPublisher}
    </div>
  );
}

export default BookDisplay;
