import React from 'react';
import './App.css';
import Newsfeed from './Newsfeed.jsx';
import NavbarList from './Navbar.jsx';

function App() {
  return (
    <>
      <NavbarList />
        <Newsfeed />
    </>
  );
}

export default App;
