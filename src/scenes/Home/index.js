import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import ELTCard from './components/ELTCard';
import ELTSwag from './components/ELTSwag';
import Exchanges from './components/Exchanges';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Team from './components/Team';

class Home extends Component {
  static propTypes = {
    history: PropTypes.shape({
      location: PropTypes.shape({
        hash: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.jumpToHash();
  }

  componentDidUpdate() {
    this.jumpToHash();
  }

  jumpToHash = () => {
    const { hash } = this.props.history.location;

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
        <br />
        <Exchanges />
        <Team />
        <Roadmap />
        <ELTCard />
        <ELTSwag />
        <br />
      </div>
    );
  }
}

export default withRouter(Home);
