import React from 'react';
import starsBackground from './images/stars.png';

export default () => (
  <div
    alt=""
    style={{
      background: `url(${starsBackground}) center`,
      backgroundSize: 'cover',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: 0,
    }}
  />
);
