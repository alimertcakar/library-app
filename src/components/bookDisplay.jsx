import React from "react";
import "../style/components/BookDisplay.css";

function BookDisplay(props) {
  return (
    <div id="BookDisplay">
      Book Here + {props.booksJson} + {props.details}
    </div>
  );
}

export default BookDisplay;
