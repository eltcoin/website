import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import ELTCard from './components/ELTCard';
import ELTSwag from './components/ELTSwag';
import Exchanges from './components/Exchanges';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Video from './components/Video';

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
        <Team />
        <Exchanges />
        <Roadmap />
        <Video />
        <ELTCard />
        <ELTSwag />
        <br />
      </div>
    );
  }
}

export default withRouter(Home);
