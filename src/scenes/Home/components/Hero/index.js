import React, { Component } from 'react';
import logo from './images/logo.png';
import Countdown from 'react-countdown-now';

const RATE_CHANGE_THRESHOLD = 300000;

const countdownRenderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days}:{hours}:{minutes}:{seconds}
    </span>
  );
};

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokensSold: 0,
    };

    this.renderSaleProgress = this.renderSaleProgress.bind(this);
    this.renderUnlockCountdownTimer = this.renderUnlockCountdownTimer.bind(
      this,
    );
  }

  componentDidMount() {
    let currentPrice;
    let tokensSoldCurrentRound;
    fetch('https://eltcoin-api.now.sh/api/v1/sale/tokens_sold')
      .then(data => data.json())
      .then(json => {
        let tokensSold = json.value;
        tokensSoldCurrentRound = tokensSold % RATE_CHANGE_THRESHOLD;
        currentPrice =
          0.01 + 0.01 * Math.floor(tokensSold / RATE_CHANGE_THRESHOLD);
        fetch('http://localhost:5000/api/v1/unlockTime/timestamps')
          .then(timestamps => timestamps.json())
          .then(timestamps => {
            let _currentTime = timestamps.currentTime;
            let _unlockTime = timestamps.unlocks;
            this.setState(
              {
                currentPrice,
                tokensSold: tokensSoldCurrentRound,
                currentTime: _currentTime,
                unlockTime: _unlockTime * 1000,
              },
              () => {
                this.renderUnlockCountdownTimer();
              },
            );
            console.dir(this.state, {
              depth: null,
            });
          });
      });
  }

  renderUnlockCountdownTimer() {
    if (typeof this.state.unlockTime === 'undefined') {
      return;
    }
    return (
      <Countdown date={this.state.unlockTime} renderer={countdownRenderer} />
    );
  }

  renderSaleProgress() {
    if (this.state.tokensSold === 0) {
      return;
    }

    return (
      <div>
        <progress
          className="progress is-success"
          value={this.state.tokensSold}
          max="300000"
          style={{ maxWidth: '60rem', alignSelf: 'center' }}
        />
        <p className="is-size-5">
          Only{' '}
          <b>
            {Number(RATE_CHANGE_THRESHOLD - this.state.tokensSold).toFixed()}
          </b>{' '}
          remaining ELTCOIN this round
        </p>
        <br />

        {/* <p>
          Current price: <b>${this.state.currentPrice}</b> / Next price:{' '}
          <b>${this.state.currentPrice + 0.01}</b>
        </p> */}
      </div>
    );
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
                🔓
              </span>{' '}
              {this.renderUnlockCountdownTimer()}
            </h4>
            {this.renderSaleProgress()}
            <br />
            <a href="https://sale.eltcoin.tech" className="button">
              Visit our Sale website
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
