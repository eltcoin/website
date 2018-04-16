import React from 'react';
import {
  Eltcard,
  Exchanges,
  Footer,
  Header,
  Hero,
  Meta,
  Roadmap,
  Team,
} from '../components';
import './styles/index.css';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

export default () => (
  <div>
    <Meta />
    <Header />
    <div className="app-container cf">
      <Hero />
      <Exchanges />
      <Roadmap />
      <Eltcard />
      <Team />
    </div>
    <Footer />
  </div>
);
