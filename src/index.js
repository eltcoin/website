import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './config/store';
import App from './components/App';
import registerServiceWorker from './config/registerServiceWorker';
import './styles/index.css';
import 'react-select/dist/react-select.css';

const history = createBrowserHistory();

if (process.env.NODE_ENV === 'production') {
  window.Raven
    .config('https://0ddfcefcf922465488c2dde443f9c9d5@sentry.io/230876')
    .install();

  history.listen((location, action) => {
    window.gtag('config', 'UA-107700473-1', {
      page_path: location.pathname,
    });
  });
}

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_API_URL }),
  cache: new InMemoryCache().restore({}),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
