import React, { Component } from 'react';
import logo from './images/logo.png';
import appStoreLogo from './images/app-store.png';

const EMOJIS_ARRAY = ['🚀', '💰', '🌏', '🌕', '❤️', '🔓'];

class Hero extends Component {
  state = {
    emojiIndex: 0,
  };

  componentDidMount() {
    const emojiInterval = setInterval(() => {
      let emojiIndex = this.state.emojiIndex + 1;

      if (this.state.emojiIndex >= EMOJIS_ARRAY.length) {
        emojiIndex = 0;
      }

      this.setState({
        emojiIndex,
      });
    }, 1750);

    this.setState({
      emojiInterval,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.emojiInterval);
  }

  render() {
    return (
      <section
        className="hero"
        style={{
          minHeight: 'calc(100vh - 40px)',
          width: '100vw',
          margin: 'auto',
        }}
      >
        <div
          className="hero-body"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <br />
            <img src={logo} width={350} alt="" />
            <h1 className="subtitle is-size-2">Ethereum Limited Total Coin</h1>
            <br />
            <br />
            <h4 className="subtitle is-size-4">
              <b>ELTCOIN</b>{' '}
              <span role="img" aria-label="unlocks">
                {EMOJIS_ARRAY[this.state.emojiIndex]}
              </span>
              <b> DREAMS</b>
            </h4>
            <br />
            <br />
            <h5 className="is-size-5">Download our iOS wallet</h5>
            <br />
            <a
              href="https://itunes.apple.com/app/eltwallet/id1302147242"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appStoreLogo} alt="" width={150} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
