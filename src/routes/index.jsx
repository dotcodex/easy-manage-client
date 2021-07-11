import React from 'react';
import DefaultLayout from '@layout/DefaultLayout';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import routes from '@routes/routes';

function Routes() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/products' />} />
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default Routes;
