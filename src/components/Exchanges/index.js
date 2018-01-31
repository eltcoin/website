import React, { Component } from 'react';
import apolloLogo from './images/apollo.png';
import coinexchangeLogo from './images/coinexchange.png';
import etherdeltaLogo from './images/etherdelta.png';
import idexLogo from './images/idex.png';
import mercatoxLogo from './images/mercatox.png';

function nFormatter(num, digits) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  let i;

  for (i = si.length - 1; i > 0; i -= 1) {
    if (num >= si[i].value) {
      break;
    }
  }

  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

const exchanges = [
  {
    link: 'https://www.apollomission.io',
    logo: apolloLogo,
    name: 'Apollo',
  },
  {
    link: 'https://www.coinexchange.io/market/ELT/ETH',
    logo: coinexchangeLogo,
    name: 'Coinexchange',
  },
  {
    link: 'https://etherdelta.com/#ELTCOIN-ETH',
    logo: etherdeltaLogo,
    name: 'Etherdelta',
  },
  {
    link: 'https://idex.market/eth/eltcoin',
    logo: idexLogo,
    name: 'IDEX',
  },
  {
    link: 'https://mercatox.com/exchange/ELTCOIN/ETH',
    logo: mercatoxLogo,
    name: 'Mercatox',
  },
];

export default class Exchanges extends Component {
  state = {
    marketCap: null,
    rank: null,
    volume: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://api.coinmarketcap.com/v1/ticker/eltcoin/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          marketCap: nFormatter(data[0].market_cap_usd, 2),
          rank: data[0].rank,
          volume: nFormatter(data[0]['24h_volume_usd'], 2),
        });
      });
  };

  render() {
    return (
      <section className="cf tc mw9 center pt5">
        <h2 className="f2 normal tracked-mega">EXCHANGES</h2>
        <div className="cf ph3 center">
          {exchanges.map((exchange, index) => (
            <div
              className={`cf fl ${index < 4 ? 'w-50' : 'w-100'} ${
                index < 3 ? 'w-third-m' : 'w-50-m'
              } w-20-ns ph2`}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <a
                className="link dim"
                href={exchange.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w5" src={exchange.logo} alt={exchange.name} />
              </a>
            </div>
          ))}
        </div>
        {this.state.marketCap && (
          <a
            href="https://coinmarketcap.com/currencies/eltcoin"
            target="_blank"
            rel="noopener noreferrer"
            className="db center white link dim"
          >
            <p className="tracked-mega">RANK = {this.state.rank}</p>
            <p className="tracked-mega">
              MARKET CAP = ${this.state.marketCap} USD
            </p>
            <p className="tracked-mega">
              USD VOLUME (24H) = ${this.state.volume} USD
            </p>
          </a>
        )}
      </section>
    );
  }
}
