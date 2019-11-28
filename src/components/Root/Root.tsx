import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { routing } from '../../contants/routing';

import store from '../../reducers/store';

import Layout from '../Layout';
import ProfileRouter from '../Profile';

const Root: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/test" component = { () => (<h3> This is a test page</h3>) } />
            <Route path={routing.profile} component={ProfileRouter} />
            {/* TODO: switch default redirect to chains later */}
            <Redirect to={routing.profile} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
