import React, { createContext } from "react";
import booksJson from "./Books.json";

const BookContext = createContext({
  books: booksJson.books
});

export const BookProvider = BookContext.Provider;
export const BookConsumer = BookContext.Consumer;
export default BookContext;
