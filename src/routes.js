import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import MealDetailsContainer from './containers/MealDetailsContainer';
import Meals from './containers/Meals';

const routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/meals/:name" component={Meals} />
        <Route exact path="/meals/details/:id" component={MealDetailsContainer} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;
