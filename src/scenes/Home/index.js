import React, { Component } from 'react';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import TokenDetails from './components/TokenDetails';

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
        <Roadmap />
        <Team />
        <Faq />
        <br />
      </div>
    );
  }
}

export default Home;
