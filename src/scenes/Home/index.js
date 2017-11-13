import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import TokenDetails from './components/TokenDetails';

class Home extends Component {
  componentDidMount() {
    this.jumpToHash();
  }

  componentDidUpdate() {
    this.jumpToHash();
  }

  jumpToHash = () => {
    const hash = this.props.history.location.hash;

    if (hash) {
      scrollToElement(hash, {
        duration: 500,
        ease: 'out-sine',
      });
    }
  };

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

export default withRouter(Home);
