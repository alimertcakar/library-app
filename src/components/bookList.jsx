import React, { useContext } from "react";
import BookDisplay from "./bookDisplay";
import BookContext from "./contexts/bookContext";

function BookList(props) {
  const Books = useContext(BookContext);
  return (
    <BookContext.Provider>
      {Books.books.map(book => (
        <BookDisplay bookName={book.bookName} />
      ))}
    </BookContext.Provider>
  );
}
export default BookList;

//      {// Array(Books.bookCount).fill(<BookDisplay booksJson={Books.books} />)}
