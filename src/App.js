import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch } from './components/AnimatedSwitch';
import { AuthContext } from './auth/AuhtContext';
import { authReducer } from './auth/authReducer';
import './App.css';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
};

const App = () => {
  const [state, dispatch] = useReducer(authReducer, {}, init)

  return (
    <div className="root">
      <div className="content">
          <BrowserRouter>
            <AuthContext.provider value={{state, dispatch}}>
              <AnimatedSwitch />
            </AuthContext.provider>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
