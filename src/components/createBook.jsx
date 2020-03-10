import React from "react";
import "../style/components/CreateBook.css";
function CreateBook() {
  return (
    <div className="row " id="createBookDetails">
      <form action="/create" d="createBookInputs">
        <div id="formInputs">
          <input name="bookName" type="text" defaultValue="Book Name"></input>
          <input
            name="authorName"
            type="text"
            defaultValue="Author Name"
          ></input>
          <input
            name="publisherName"
            type="text"
            defaultValue="Publisher Name"
          ></input>
        </div>
        <input
          className=" row"
          type="submit"
          id="createBook"
          value="Create Book"
        ></input>
      </form>
    </div>
  );
}

export default CreateBook;
