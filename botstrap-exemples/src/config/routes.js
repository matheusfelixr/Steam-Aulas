import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import StarWarsPage from '../pages/StarWarsPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

import {isAuthenticated} from '../services/AuthenticationService'

function SecureRoute ({children, ...rest}){
  return (
    <Route {...rest} 
      render={
        props=>
          isAuthenticated() ? (
              children
            ) : (
              <Redirect to={{ pathname : '/login', state:{ from: props.location } }} />
            )
          }
  />  
  )  
}


export default function Routes() {
  return (
    <Router>
         <Switch>
            <SecureRoute path="/star-wars" exact={true}>
                <StarWarsPage />
            </SecureRoute> 

            <Route path="/login" exact={true}>
                <LoginPage/>
            </Route>

            <SecureRoute path="/" exact={true}>
                <HomePage />
            </SecureRoute> 
        </Switch>
    </Router>
  );
}