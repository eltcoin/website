import React from 'react';
import './index.css';
import logo from './images/logo.png';
import iphoneMockup from './images/iphone.png';
import appStoreLogo from './images/app-store.svg';
import googlePlayLogo from './images/google-play.png';

export default () => (
  <section className="hero">
    <div className="hero-body" style={{ padding: '1.5rem 0 0' }}>
      <div
        className="container"
        style={{
          background: 'linear-gradient(to bottom, #000000, #da328a)',
          minHeight: 'calc(100vh - 40px)',
          textAlign: 'center',
          zIndex: '0',
        }}
      >
        <div className="moon-background" />
        <div className="columns">
          <div
            className="column"
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <img
              src={logo}
              width={200}
              alt=""
              style={{
                paddingBottom: '1rem',
              }}
            />
            <h1
              className="subtitle is-size-2 has-text-white"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Welcome to our universe!
            </h1>
          </div>
          <div className="column">
            <img
              src={iphoneMockup}
              width={350}
              alt=""
              style={{ paddingTop: '3rem' }}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <a
            href="https://itunes.apple.com/us/app/eltwallet/id1302147242"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex' }}
          >
            <img src={appStoreLogo} alt="" style={{ marginRight: '0.5em' }} />
          </a>
          <img
            src={googlePlayLogo}
            alt=""
            style={{ marginLeft: '0.5em', height: 40, width: 'auto' }}
          />
        </div>
      </div>
    </div>
  </section>
);
