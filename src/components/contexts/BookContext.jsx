import React, { createContext } from "react";
import booksJson from "./Books.json";

const BookContext = createContext({
  books: booksJson.books
});

export default BookContext;
