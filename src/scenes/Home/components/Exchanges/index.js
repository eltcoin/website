import React from 'react';
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

export default () => (
  <div
    className="card container has-text-centered has-text-white"
    style={{
      background: 'linear-gradient(0deg, #500d33, #000000)',
      padding: '1.5rem',
    }}
  >
    <p className="title is-size-1" style={{ color: '#fff' }}>
      Exchanges
    </p>
    <div className="columns">
      {EXCHANGES.map(exchange => (
        <div className="column">
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
  </div>
);
