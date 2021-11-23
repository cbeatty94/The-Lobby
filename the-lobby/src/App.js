import React from 'react'
import './App.css';
import Header from './Header';
import PlayerCards from './PlayerCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="app">

      <Header />
      <PlayerCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
