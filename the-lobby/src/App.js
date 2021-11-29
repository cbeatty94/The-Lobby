import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import PlayerCards from './PlayerCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/chat" element={<Header />} >
            {/* <Header backButton="/" /> */}
            I am a chat page
          </Route>
          {/* default route at bottom */}
          <Route path="/" element={<><Header /><PlayerCards /><SwipeButtons /></>} >
            {/* <PlayerCards />
            <SwipeButtons /> */}
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
