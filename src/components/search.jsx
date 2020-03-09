import React, { useContext } from "react";
import "../style/components/Search.css";
import BookContext from "./contexts/bookContext";

export default function Search() {
  const { Books } = useContext(BookContext);
  let parsed = JSON.parse(JSON.stringify(Books));

  function searchBooksAny(x) {
    let searchResult = parsed.books.filter(book => {
      return book.bookName === x || book.author === x || book.publisher === x;
    });
    return searchResult;
  }
  console.log(searchBooksAny("Victor Hugo")); //Search Function draft

  return (
    <BookContext.Provider>
      <div id="searchContainer">
        <input
          type="text"
          id="Search"
          onChange={() => {
            alert("x");
          }}
        ></input>
        <input type="submit" value="SEARCH"></input>
      </div>
    </BookContext.Provider>
  );
}

/*
  function searchBooks(bookName, author, publisher) {
    let searchResult = parsed.books.filter(book => {
      return (
        book.bookName === bookName ||
        book.author === author ||
        book.publisher === publisher
      );
    });
    return searchResult;
  }
  console.log(searchBooks("Victor Hugo")); //Search Function draft
  */
