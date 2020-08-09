import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import CategoryFormPage from '../pages/administrative/CategoryFormPage'
import CategoryListPage from '../pages/administrative/CategoryListPage'

import {isAuthenticated} from '../services/AuthenticationService'

function SecureRoute ({children, ...rest}){
  return (
    <Route {...rest} 
      render={
        props=>
          true ? (
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

            <Route path="/login" exact={true}>
                <LoginPage/>
            </Route>

            <SecureRoute path="/category" exact={true}>
                <CategoryListPage />
            </SecureRoute> 
            <SecureRoute path="/category/create" exact={true}>
                <CategoryFormPage />
            </SecureRoute> 
            <SecureRoute path="/category/edit/:id" exact={true}>
                <CategoryFormPage />
            </SecureRoute> 
            <SecureRoute path="/" exact={true}>
                <HomePage />
            </SecureRoute> 
        </Switch>
    </Router>
  );
}