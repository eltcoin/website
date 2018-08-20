import React from 'react';
import { Exchanges, Footer, Header, Hero, Meta, Projects } from '../components';
import './styles/index.css';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

require('typeface-varela-round');

export default () => (
  <div>
    <Meta />
    <Header />
    <div className="app-container cf">
      <Hero />
      <Projects />
      <Exchanges />
    </div>
    <Footer />
  </div>
);
