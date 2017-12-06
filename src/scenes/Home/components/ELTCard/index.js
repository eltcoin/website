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
    <p className="title is-size-2">ELTCARD</p>
    <p
      className="subtitle"
      style={{
        fontFamily: "'Pacifico', cursive",
      }}
    >
      Instant crypto to fiat conversion!
    </p>
    <div className="columns">
      {CARD_IMAGES.map(image => (
        <div className="column" key={image}>
          <figure className="image" style={{ margin: 'auto', width: '80%' }}>
            <img src={image} alt="" />
          </figure>
        </div>
      ))}
    </div>
  </div>
);
