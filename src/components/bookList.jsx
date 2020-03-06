import React, { useContext } from "react";
import BookDisplay from "./bookDisplay";
import BookContext from "./contexts/bookContext";

function BookList(props) {
  const Books = useContext(BookContext);
  return (
    <BookContext.Provider>
      {Array(Books.bookCount).fill(
        <BookDisplay
          details={Books.details !== "" && "No details"}
          booksJson={Books.info}
        />
      )}
    </BookContext.Provider>
  );
}
export default BookList;
