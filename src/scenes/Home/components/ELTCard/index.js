import React from 'react';
import image0 from './images/0.png';
import image1 from './images/1.png';
import image2 from './images/2.png';

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
          <img src={image0} alt="" />
        </figure>
      </div>
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={image1} alt="" />
        </figure>
      </div>
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={image2} alt="" />
        </figure>
      </div>
    </div>
    <p style={{ margin: 'auto', maxWidth: '800px' }}>
      Introducing a seemless crypto to fiat experience that can really change
      the way you think about your finances. Available in three tiers: Moon
      Mission, OG ELTCOIN participant and Wolf.<br />Order through ELTWALLET in
      the near future.
    </p>
  </div>
);
