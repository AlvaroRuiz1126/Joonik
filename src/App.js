import React from 'react';
import EmailScreen from './components/EmailScreen';
import PasswordScreen from './components/PasswordScreen';
import UserScreen from './components/UserScreen';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

export const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route exact path="/email" component={EmailScreen} />
        <Route exact path="/password" component={PasswordScreen} />
        <Route exact path="/user" component={UserScreen} />
        <Redirect to="/email" />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

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
