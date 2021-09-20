import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'components';

import * as Pages from '../pages';

const Routes: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/form" exact component={Pages.Form} />
        <Route path="/form/view/:cpf" exact component={Pages.Form} />
        <Route path="/form/edit/:cpf" exact component={Pages.Form} />
        <Route path="/" exact component={Pages.List} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default Routes;