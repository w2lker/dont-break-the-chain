import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { routing } from '../../contants/routing';

import store from '../../reducers/store';
import Habits from '../Habits';

import Layout from '../Layout';
import Profile from '../Profile';

const Root: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path={routing.habits.root} component={Habits} />
            <Route path={routing.profile} component={Profile} />
            {/* TODO: switch default redirect to chains later */}
            <Redirect to={routing.profile} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
