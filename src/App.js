import React from 'react';
import './App.css';
import "antd/dist/antd.css";

import CharactersContainer from './containers/CharactersContainer';
import Search from 'antd/lib/input/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <CharactersContainer />
    </div>
  );
}

export default App;
