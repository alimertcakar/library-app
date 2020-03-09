import React, { useContext, useState } from 'react';
import './App.css';
import './style/reset.css';
import './style/skeleton.css';
import './style/typography.css';

import Navbar from './components/navbar';
import Search from './components/search';
import Pagination from './components/pagination';
import CreateBook from './components/createBook';
import BookList from './components/bookList';
import BookContext from './components/contexts/bookContext'
import { BookProvider } from './components/contexts/bookContext';

import Books from './components/contexts/Books.json';

function App() {
  const [page, setPage] = useState(0);
  const [currentSearch, setCurrentSearch] = useState("");

  const [maxPages, setMaxPages] = useState(Books.books.length / 10);   //TODO replace 10 with a variable like "pageItemCount"
  function changePage(x) {
    if (x < maxPages && x > -1)
      setPage(x)
  }

  return (
    <BookProvider value={{ Books, page, changePage, currentSearch, setCurrentSearch }} >
      <div className="container">

        <div className="row">
          <div className="twelve columns">
            <Navbar title="Library Index" />
          </div>
        </div>

        <div className="row">
          <div className="six columns offset-by-three">
            <Search />
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <BookList />
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <CreateBook />
          </div>
        </div>

        <div className="row" >
          <div className="four columns offset-by-four">
            <Pagination />
          </div>
        </div >

      </div >
    </ BookProvider>
  );
}

export default App;
