import React, { Component } from 'react';
import logo from './images/logo.png';

const RATE_CHANGE_THRESHOLD = 300000;

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokensSold: 0,
    };

    this.renderSaleProgress = this.renderSaleProgress.bind(this);
  }

  componentDidMount() {
    fetch('https://eltcoin-api.now.sh/api/v1/sale/tokens_sold')
      .then(data => data.json())
      .then(json => {
        let tokensSold = json.value;
        let tokensSoldCurrentRound = tokensSold % RATE_CHANGE_THRESHOLD;
        let currentPrice =
          0.01 + 0.01 * Math.floor(tokensSold / RATE_CHANGE_THRESHOLD);

        this.setState({
          currentPrice,
          tokensSold: tokensSoldCurrentRound,
        });
      });
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
        <p>
          Current price: <b>${this.state.currentPrice}</b> / Next price:{' '}
          <b>${this.state.currentPrice + 0.01}</b>
        </p>
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
            <h1 className="subtitle is-size-2">
              The Ethereum Limited Total Coin
            </h1>
            <br />
            <br />
            <h4 className="subtitle is-size-4">Public sale has opened!</h4>
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
