import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Products from '../pages/Products';

function Routes() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Products} />
        </Switch>
      </BrowserRouter>
    </DefaultLayout>
  );
}

export default Routes;
