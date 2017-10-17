import React, { Component } from 'react';

import Certificate from './components/Certficate';
import CheckForm from './components/CheckForm';
import Faq from './components/Faq';
import Hero from './components/Hero';
import TokenDetails from './components/TokenDetails';
import Wallets from './components/Wallets';

class Home extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      window.Raven
        .config('https://0ddfcefcf922465488c2dde443f9c9d5@sentry.io/230876')
        .install();
    }
  }

  render() {
    return (
      <div>
        <Hero />
        <TokenDetails />
        <br />
        <CheckForm />
        <br />
        <Wallets />
        <Faq />
        <br />
        <Certificate />
      </div>
    );
  }
}

export default Home;
