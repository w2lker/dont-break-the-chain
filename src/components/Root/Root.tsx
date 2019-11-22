import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from '../../reducers/store';

import Layout from '../Layout';

const Root: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <h1> Hello world</h1>
          <Switch>
            <Route path="/test" component = { () => (<h3> This is a test page</h3>) } />
            <Route path="/" component = { () => (<h3> DEFAULT </h3>) } />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
