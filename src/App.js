import React, { useContext } from 'react';
import './App.css';
import './style/reset.css';
import './style/skeleton.css';
import './style/typography.css';

import Navbar from './components/navbar';
import Search from './components/search';
import Pagination from './components/pagination';
import BookList from './components/bookList';

import BookContext from './components/contexts/bookContext'

function App() {
  const Book = useContext(BookContext);
  console.log(Book)
  return (
    <div className="container">

      <div className="row">
        <div className="twelve columns">
          <Navbar title="Library Index" />
        </div>
      </div>

      <div className="row">
        <div className="four columns offset-by-four">
          <Search />
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <BookList />
        </div>
      </div>

      <div className="row" >
        <div className="four columns offset-by-four">
          <Pagination />
        </div>
      </div>

    </div>
  );
}

export default App;
