import React from 'react';
import ELTCard1 from './images/eltcard1.jpg';
import ELTCard2 from './images/eltcard2.jpg';
import ELTCard3 from './images/eltcard3.jpg';

const CARD_IMAGES = [ELTCard1, ELTCard2, ELTCard3];

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
      {CARD_IMAGES.map(image => (
        <div className="column" key={image}>
          <figure className="image" style={{ margin: 'auto', width: '80%' }}>
            <img src={image} alt="" />
          </figure>
        </div>
      ))}
    </div>
    <p style={{ margin: 'auto', maxWidth: '800px' }}>
      Introducing ELTCard, spend your ELTCOIN anywhere!<br />Available to order
      via{' '}
      <a
        href="https://itunes.apple.com/us/app/eltwallet/id1302147242"
        target="_blank"
        rel="noopener noreferrer"
      >
        ELTWALLET
      </a>{' '}
      soon!
    </p>
  </div>
);
