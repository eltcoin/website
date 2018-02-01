import React from 'react';
import card0 from './images/card0.png';
import card1 from './images/card1.png';
import card2 from './images/card2.png';

export default () => (
  <section className="tc mw8 center pt5 ph3">
    <h2 className="f2 mb0 normal tracked-mega">ELTCARD</h2>
    <p className="silver">Instant crypto to fiat exchange</p>
    <div className="cf w-100">
      <div className="fl w-third-ns dn db-ns ph2">
        <img className="w5 pt4" src={card0} alt="Eltcard" />
      </div>
      <div className="fl w-100 w-third-ns ph2">
        <img className="w5 pt4" src={card1} alt="Eltcard" />
      </div>
      <div className="fl w-third-ns dn db-ns ph2">
        <img className="w5 pt4" src={card2} alt="Eltcard" />
      </div>
    </div>
  </section>
);
