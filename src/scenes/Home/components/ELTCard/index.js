import React from 'react';
import ELTCard1 from './images/eltcard1.jpg';
import ELTCard2 from './images/eltcard2.jpg';
import ELTCard3 from './images/eltcard3.jpg';

export default () => (
  <div
    className="card container has-text-centered"
    style={{
      padding: '1.5rem',
    }}
  >
    <p className="title is-size-1">ELTCARD</p>
    <p className="subtitle">Instant crypto to fiat conversion!</p>
    <div className="columns">
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={ELTCard1} alt="" />
        </figure>
      </div>
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={ELTCard2} alt="" />
        </figure>
      </div>
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={ELTCard3} alt="" />
        </figure>
      </div>
    </div>
    <p style={{ margin: 'auto', maxWidth: '800px' }}>
      Introducing ELTCARD...spend your ELTCOIN anywhere! Available to order via
      ELTWALLET soon!.<br />
    </p>
  </div>
);
