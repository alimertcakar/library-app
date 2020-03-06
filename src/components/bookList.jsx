import React, { useContext } from "react";
import BookDisplay from "./bookDisplay";
import BookContext from "./contexts/bookContext";

function BookList(props) {
  const Books = useContext(BookContext);
  return (
    <BookContext.Provider>
      //TODO split books array by ten, make pages.
      {Books.books.map(book => (
        <BookDisplay
          key={book.id}
          bookName={book.bookName}
          bookAuthor={book.author}
          bookPublisher={book.publisher}
        />
      ))}
    </BookContext.Provider>
  );
}
export default BookList;

//      {// Array(Books.bookCount).fill(<BookDisplay booksJson={Books.books} />)}
