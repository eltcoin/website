import React, { Component } from 'react';
import eltcoinLogo from './images/eltcoinLogo.png';
import idexLogo from './images/idex.png';
import mercatoxLogo from './images/mercatox.png';
import decentrexLogo from './images/decentrex.png';
import etherdeltaLogo from './images/etherdelta.png';
import coinexchangeLogo from './images/coinexchange.png';

const EXCHANGES = [
  {
    link: 'https://idex.market/eth/eltcoin',
    logo: idexLogo,
  },
  {
    link: 'https://mercatox.com/exchange/ELTCOIN/ETH',
    logo: mercatoxLogo,
  },
  {
    link: 'https://decentrex.com/#ELTCOIN-ETH',
    logo: decentrexLogo,
  },
  {
    link: 'https://etherdelta.com/#ELTCOIN-ETH',
    logo: etherdeltaLogo,
  },
  {
    link: 'https://www.coinexchange.io/market/ELT/ETH',
    logo: coinexchangeLogo,
  },
];

export default class Exchanges extends Component {
  state = {
    btcPrice: 0,
    marketCap: 0,
    percentChange24h: 0,
    rank: 0,
    usdPrice: 0,
    volumeUsd24h: 0,
  };

  componentDidMount() {
    this.fetchData();
  }

  getPriceChangeClassName = () => {
    if (this.state.percentChange24h >= 0) {
      return 'has-text-success';
    }

    return 'has-text-danger';
  };

  fetchData = async () => {
    const eltcoinData = await fetch(
      'https://api.coinmarketcap.com/v1/ticker/eltcoin/?ref=widget&convert=USD',
    )
      .then(data => data.json())
      .then(data => data[0]);

    this.setState({
      btcPrice: eltcoinData.price_btc,
      marketCap: eltcoinData.market_cap_usd,
      percentChange24h: eltcoinData.percent_change_24h,
      rank: eltcoinData.rank,
      usdPrice: eltcoinData.price_usd,
      volumeUsd24h: eltcoinData['24h_volume_usd'],
    });
  };

  render() {
    return (
      <div
        className="card container has-text-centered has-text-white"
        style={{
          background: 'linear-gradient(0deg, #500d33, #000000)',
          borderRadius: '5px',
          padding: '1.5rem',
        }}
      >
        <p className="title is-size-1" style={{ color: '#fff' }}>
          Exchanges
        </p>
        <div className="columns">
          {EXCHANGES.map(exchange => (
            <div className="column" key={exchange.link}>
              <a href={exchange.link} target="_blank" rel="noopener noreferrer">
                <figure className="image">
                  <img src={exchange.logo} alt="" />
                </figure>
              </a>
              <p>
                Status: <span className="has-text-success">LISTED</span>
              </p>
            </div>
          ))}
        </div>
        <table className="table is-bordered" style={{ margin: 'auto' }}>
          <tbody>
            <tr>
              <td colSpan={3} className="has-text-centered">
                <a
                  href="https://coinmarketcap.com/currencies/eltcoin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={eltcoinLogo} width={100} alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="has-text-centered">
                {this.state.usdPrice} USD{' '}
                <span className={this.getPriceChangeClassName()}>
                  ({this.state.percentChange24h}%)
                </span>
                <br />
                <span className="has-text-grey-light">
                  {this.state.btcPrice} BTC
                </span>
              </td>
            </tr>
            <tr>
              <td className="has-text-centered">
                <p>
                  <b>Rank</b>
                </p>
                <p>{this.state.rank}</p>
              </td>
              <td className="has-text-centered">
                <p>
                  <b>Market cap.</b>
                </p>
                <p>{Math.round(this.state.marketCap / 1000, 2)}K USD</p>
              </td>
              <td className="has-text-centered">
                <p>
                  <b>Volume (24H)</b>
                </p>
                <p>{Math.round(this.state.volumeUsd24h / 1000, 2)}K USD</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
