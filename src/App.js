import React from 'react';
import EmailScreen from './components/EmailScreen';
import './App.css';
import PasswordScreen from './components/PasswordScreen';
import UserScreen from './components/UserScreen';

function App() {
  return (
    <div className="root">
      <div className="content">
        <UserScreen />
      </div>
    </div>
  );
}

export default App;
