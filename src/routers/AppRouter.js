import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import CreditsPage from '../components/CreditsPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/credits" component={CreditsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
