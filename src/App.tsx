import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
  )
}

export default App;
