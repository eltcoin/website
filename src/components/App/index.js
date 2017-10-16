import React, { Component } from 'react';

import Certificate from '../Certficate';
import CheckForm from '../CheckForm';
import Faq from '../Faq';
import Footer from '../Footer';
import Header from '../Header';
import Hero from '../Hero';
import TokenDetails from '../TokenDetails';
import Wallets from '../Wallets';

class App extends Component {
  componentDidMount() {
    window.Raven.config('https://0ddfcefcf922465488c2dde443f9c9d5@sentry.io/230876').install();
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <TokenDetails />
        <br />
        <CheckForm />
        <br/>
        <Wallets />
        <Faq />
        <br />
        <Certificate />
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;
