import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Shop,
} from '../pages';

const AppNavigator = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Shop} />
            <Route exact path="/shop" component={Shop} />
        </Switch>
    </BrowserRouter>
)

export { AppNavigator };
