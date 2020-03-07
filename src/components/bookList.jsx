import React, { useContext } from "react";
import BookDisplay from "./bookDisplay";
import BookContext from "./contexts/bookContext";

import chunk from "../js/chunk";

function BookList(props) {
  const Books = useContext(BookContext);
  let chunkedBooks = chunk(Books.books, 10);
  console.log(chunkedBooks);

  return (
    <React.Fragment>
      {Books.books.map(book => (
        <BookDisplay
          key={book.id}
          bookName={book.bookName}
          bookAuthor={book.author}
          bookPublisher={book.publisher}
        />
      ))}
    </React.Fragment>
  );
}
export default BookList;

//      {// Array(Books.bookCount).fill(<BookDisplay booksJson={Books.books} />)}
//TODO split books array by ten, make pages.
