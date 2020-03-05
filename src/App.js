import React from 'react';
import './App.css';
import './style/reset.css';
import './style/skeleton.css';
import './style/typography.css';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Pagination from './components/Pagination.js';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <Navbar title="Library Index" />
        </div>
      </div>
      <div className="two columns offset-by-five">
        <Search />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
