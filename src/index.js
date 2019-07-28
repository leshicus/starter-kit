import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main } from './components/Main';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './store';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
