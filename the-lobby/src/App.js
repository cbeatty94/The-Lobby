import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import PlayerCards from './PlayerCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from "./ChatScreen.js"


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/chats/:person" element={<><Header backButton="/chats"/><ChatScreen /></>} >
          </Route>
          <Route path="/chats" element={<><Header backButton="/"/><Chats /></>} >
          </Route>
          {/* default route at bottom */}
          <Route path="/" element={<><Header /><PlayerCards /><SwipeButtons /></>} >
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
