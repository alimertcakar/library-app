import React, { useContext, useState } from "react";
import BookDisplay from "./bookDisplay";
import BookContext from "./contexts/bookContext";

import chunk from "../js/chunk";

function BookList(props) {
  const Books = useContext(BookContext);
  const [currentPage, setCurrentPage] = useState(0);
  let bookChunks = chunk(Books.books, 10);

  return (
    <div id="bookStand">
      {bookChunks[currentPage].map(book => (
        <BookDisplay
          key={book.id}
          bookName={book.bookName}
          bookAuthor={book.author}
          bookPublisher={book.publisher}
        />
      ))}
    </div>
  );
}

export default BookList;

//      {// Array(Books.bookCount).fill(<BookDisplay booksJson={Books.books} />)}
//TODO split books array by ten, make pages.

//without chunking to ten
/*
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
  

  {chunk.map(book => (
    <BookDisplay
    key={book.id}
    bookName={book.bookName}
    bookAuthor={book.author}
    bookPublisher={book.publisher}
  />
))} 
*/

/*
    <React.Fragment>
      {chunkedBooks.forEach(bookChunk => {
        bookChunk.map(b => (
          <BookDisplay
            key={b.id}
            bookName={b.bookName}
            bookAuthor={b.author}
            bookPublisher={b.publisher}
          />
        ));
      })}
    </React.Fragment>
*/
