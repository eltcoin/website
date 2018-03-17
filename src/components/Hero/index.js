import React from 'react';
import logo from './images/logo.png';
import iphone from './images/iphone.png';
import eltwalletVideo from './videos/eltwallet.mp4';
import appStoreLogo from './images/app-store.svg';
import googlePlayLogo from './images/google-play.png';

export default () => (
  <section className="tc mw9 center">
    <img className="w4" src={logo} alt="ELTCOIN" />
    <h1 className="f1 tracked-mega mb1 mt2">ELTCOIN</h1>
    <h4 className="silver mt2">Ethereum Limited Total Coin</h4>
    <div>
      <a
        className="dib link dim white ba b--light-silver border-box pa2 br2 mv2"
        href="https://medium.com/officialeltcoin/eltcoin-lunar-news-27-3-18-b6af7c4974ef"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="b br b--light-silver mr2 pv2 pr2">NEW</span>
        ELTCOIN Lunar News: 17.3.18 🌕
      </a>
    </div>
    <div
      className="w5 center pt1"
      style={{
        position: 'relative',
      }}
    >
      <img
        alt="iPhone"
        className="w5"
        src={iphone}
        style={{
          zIndex: 1,
        }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          left: '0',
          margin: 'auto',
          position: 'absolute',
          right: '0',
          bottom: '81px',
          zIndex: 0,
          width: '202px',
        }}
      >
        <source src={eltwalletVideo} type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>

    <div className="pt3">
      <a
        href="https://eltwallet.eltcoin.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="dim"
      >
        <img className="mr2 h3-ns h2" src={appStoreLogo} alt="" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=tech.eltcoin.eltwallet"
        target="_blank"
        rel="noopener noreferrer"
        className="dim"
      >
        <img className="ml2 h3-ns h2" src={googlePlayLogo} alt="" />
      </a>
    </div>
  </section>
);
