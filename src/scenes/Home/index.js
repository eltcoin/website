import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import Hero from './components/Hero';
import Team from './components/Team';
import Exchanges from './components/Exchanges';
import Plans from './components/Plans';
import VideoBox from './components/Plans';
import ELTCard from './components/ELTCard';
import ELTSwag from './components/ELTSwag';

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
        <Plans />
        <VideoBox />
        <ELTCard />
        <ELTSwag />
        <br />
      </div>
    );
  }
}

export default withRouter(Home);
