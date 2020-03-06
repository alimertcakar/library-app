import React from 'react';
import './App.css';
import './style/reset.css';
import './style/skeleton.css';
import './style/typography.css';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Pagination from './components/Pagination';
import BookList from './components/BookList';

function App() {
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
          <Pagination />
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
