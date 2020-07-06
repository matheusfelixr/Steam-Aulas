import React from "react";

import CalculatorPage from '../pages/CalculatorPage';

import StarWarsPage from '../pages/StarWarsPage';

import HomePage from '../pages/HomePage';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/star-wars" exact="true">
                    <StarWarsPage />
                </Route>
                <Route path="/calculator" exact="true">
                    <CalculatorPage />
                </Route>
                <Route path="/" exact="true">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}