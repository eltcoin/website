import React from 'react';
import logo from './images/logo.png';
import iphoneMockup from './images/iphone.png';
import appStoreLogo from './images/app-store.svg';
import googlePlayLogo from './images/google-play.png';
import video from './videos/eltwallet.mp4';
import './index.css';

export default () => (
  <section className="hero">
    <div className="hero-body" style={{ padding: '1rem 0 1.5rem' }}>
      <div
        className="container"
        style={{
          background: 'linear-gradient(to bottom, #000000, #da328a)',
          borderRadius: '5px',
          minHeight: 'calc(100vh - 40px)',
          textAlign: 'center',
          zIndex: '0',
        }}
      >
        <div className="moon-background animated pulse" />
        <div className="columns">
          <div
            className="column animated fadeIn"
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
            <div className="animated bounceInUp" style={{ paddingTop: '3rem' }}>
              <div>
                <img
                  src={iphoneMockup}
                  width={350}
                  alt=""
                  style={{ zIndex: 1 }}
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
                    top: '93px',
                    width: '280px',
                    zIndex: -1,
                  }}
                >
                  <source src={video} type="video/mp4" />
                  <track kind="captions" />
                </video>
              </div>
            </div>
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
