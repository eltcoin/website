import React from 'react';
import idexLogo from './images/idex.png';
import mercatoxLogo from './images/mercatox.png';
import decentrexLogo from './images/decentrex.png';
import etherdeltaLogo from './images/etherdelta.png';
import coinexchangeLogo from './images/coinexchange.png';

export default () => (
  <div
    className="card container has-text-centered has-text-white"
    style={{
      background: 'radial-gradient(circle, #000000, #53346d)',
      backgroundSize: '100% 200%',
      padding: '1.5rem',
    }}
  >
    <p className="title is-size-1" style={{ color: '#fff' }}>
      Exchanges
    </p>
    <div className="columns">
      <div className="column">
        <a
          href="https://idex.market/eth/eltcoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="image" style={{ width: '80%%' }}>
            <img src={idexLogo} alt="" />
          </figure>
        </a>
        <p>
          Status: <span className="has-text-success">LISTED</span>
        </p>
      </div>
      <div className="column">
        <a
          href="https://mercatox.com/exchange/ELTCOIN/ETH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="image" style={{ width: '80%%' }}>
            <img src={mercatoxLogo} alt="" />
          </figure>
        </a>
        <p>
          Status: <span className="has-text-success">LISTED</span>
        </p>
      </div>
      <div className="column">
        <a
          href="https://decentrex.com/#ELTCOIN-ETH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="image" style={{ width: '80%%' }}>
            <img src={decentrexLogo} alt="" />
          </figure>
        </a>
        <p>
          Status: <span className="has-text-success">LISTED</span>
        </p>
      </div>
      <div className="column">
        <a
          href="https://etherdelta.com/#ELTCOIN-ETH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="image" style={{ width: '80%%' }}>
            <img src={etherdeltaLogo} alt="" />
          </figure>
        </a>
        <p>
          Status: <span className="has-text-success">LISTED</span>
        </p>
      </div>
      <div className="column">
        <a
          href="https://www.coinexchange.io/market/ELT/ETH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="image" style={{ width: '80%%' }}>
            <img src={coinexchangeLogo} alt="" />
          </figure>
        </a>
        <p>
          Status: <span className="has-text-success">LISTED</span>
        </p>
      </div>
    </div>
  </div>
);
