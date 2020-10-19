import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch } from './components/AnimatedSwitch';
import './App.css';

const App = () => {
  return (
    <div className="root">
      <div className="content">
        <BrowserRouter>
          <AnimatedSwitch />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
