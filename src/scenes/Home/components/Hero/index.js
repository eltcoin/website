import React, { Component } from 'react';
import logo from './images/logo.png';
import iphoneMockup from './images/iphoneELT.png';
import appStoreLogo from './images/app-store.svg';
import googlePlayLogo from './images/google-play.png';
import moon from './images/moon.png';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body" style={{ padding: '1.5rem 0' }}>
          <div
            className="container"
            style={{
              background: 'linear-gradient(to bottom, #000000, #da328a)',
              minHeight: 'calc(100vh - 40px)',
              textAlign: 'center',
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            <div className="columns">
              <div
                className="column"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={logo}
                  width={200}
                  alt=""
                  style={{ paddingBottom: '1rem' }}
                />
                <h1 className="subtitle is-size-2 has-text-white">
                  Welcome to our universe!
                </h1>
              </div>
              <div className="column">
                <img
                  src={iphoneMockup}
                  width={350}
                  alt=""
                  style={{ paddingTop: '3rem', zIndex: 500 }}
                />
              </div>

              <img
                src={moon}
                width={1800}
                alt=""
                style={{ position: 'absolute', zIndex: -1 }}
              />
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
                <img
                  src={appStoreLogo}
                  alt=""
                  style={{ marginRight: '0.5em' }}
                />
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
  }
}

export default Hero;
