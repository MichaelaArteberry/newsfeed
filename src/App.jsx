import React from 'react';
import './App.css';
import Newsfeed from './Newsfeed.jsx';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Newsfeed />
    </div>
  );
}

export default App;
