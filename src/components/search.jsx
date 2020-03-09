import React, { useContext } from "react";
import "../style/components/Search.css";
import BookContext from "./contexts/bookContext";

export default function Search() {
  const { Books } = useContext(BookContext);
  console.log(Books.books);
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
