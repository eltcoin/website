import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/index.css';
import Background from './components/Background';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './scenes/Home';
import registerServiceWorker from './registerServiceWorker';

import './i18n';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Background />
      <Header />
      <Route path="/" component={Home} />
      <Footer />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
