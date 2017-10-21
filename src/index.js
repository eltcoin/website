import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/index.css';
import Background from './components/Background';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './scenes/Home';
import Store from './scenes/Store';
import registerServiceWorker from './registerServiceWorker';

import './i18n';

if (process.env.NODE_ENV === 'production') {
  window.Raven
    .config('https://0ddfcefcf922465488c2dde443f9c9d5@sentry.io/230876')
    .install();
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Background />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/store" component={Store} />
      <Footer />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
