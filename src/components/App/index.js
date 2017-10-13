import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import TokenDetails from '../TokenDetails';
import Wallets from '../Wallets';
import Faq from '../Faq';
import CheckForm from '../CheckForm';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <TokenDetails />
        <br />
        <CheckForm />
        <br />
        <Wallets />
        <Faq />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
