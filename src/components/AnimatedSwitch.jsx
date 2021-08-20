import React from 'react';
import EmailScreen from './EmailScreen';
import PasswordScreen from './PasswordScreen';
import UserScreen from './UserScreen';
import { 
  Redirect, 
  Route, 
  Switch, 
  withRouter
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup className="text-center">
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