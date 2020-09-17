import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { history } from './helper/history';
import RegisterContainer from './components/RegisterContainer/Registercontainer';
import SuccessPage from './components/SuccessPage/SuccessPage';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <div className="col-sm-8 col-sm-offset-2">
        <Router history={history}>
          <Switch>
            <Layout>
              <Route exact path="/success" component={SuccessPage} />
              <Route exact path="/" component={RegisterContainer} />
            </Layout>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
