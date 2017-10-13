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
