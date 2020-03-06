import React, { createContext } from "react";
import booksJson from "./Books.json";

const BookContext = createContext({
  bookCount: 3,
  books: booksJson.books
});

export default BookContext;
