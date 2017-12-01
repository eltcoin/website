import React, { Component } from 'react';
import logo from './images/logo.png';
import iphoneMockup from './images/iphoneELT.png';
import appStoreLogo from './images/app-store.svg';
import googlePlayLogo from './images/google-play.png';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body" style={{ padding: '1.5rem 0' }}>
          <div
            className="container"
            style={{
              background: 'linear-gradient(to bottom, #000000, #53346d)',
              minHeight: 'calc(100vh - 40px)',
              textAlign: 'center',
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
                <img
                  src={appStoreLogo}
                  alt=""
                  style={{ marginRight: '0.5em' }}
                />
              </a>
              <img
                src={googlePlayLogo}
                width={120}
                height={40}
                alt=""
                style={{ marginLeft: '0.5em' }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
