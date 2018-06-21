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
        href="https://medium.com/officialeltcoin/eltcoin-lunar-news-16-4-18-265a052b7732"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="b br b--light-silver mr2 pv2 pr2">NEW</span>
        ELTCOIN Lunar News: 16.4.18 🌕
      </a>
    </div>
    <div
      className="w5 center pt1 z-3"
      style={{
        position: 'relative',
      }}
    >
      <img alt="iPhone" className="w5 z-1" src={iphone} />
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
          bottom: '33px',
          width: '202px',
          zIndex: -1,
        }}
      >
        <source src={eltwalletVideo} type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>

    <div className="pt3">
      <a
        href="https://itunes.apple.com/us/app/eltwallet/id1302147242"
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
