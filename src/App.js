import React from 'react';
import './App.css';
import './style/reset.css';
import './style/skeleton.css';
import './style/typography.css';

import Search from './components/Search';
function App() {
  return (
    <div className="App">
      Library App

      <div className="two columns offset-by-five">
        <Search />
      </div>

    </div>
  );
}

export default App;
