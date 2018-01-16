import React, { Component } from 'react';
import StarsBackground from '../../../../components/StarsBackground';
import logo from './images/logo.png';
import iphoneMockup from './images/iphone.png';
import iphonePlaceholder from './images/iphone_placeholder.png';
import appStoreLogo from './images/app-store.svg';
import googlePlayLogo from './images/google-play.png';
import video from './videos/eltwallet.mp4';
import './index.css';

export default class Hero extends Component {
  componentDidMount() {
    const videoElement = document.querySelector('video');

    videoElement.onloadeddata = () => {
      document.querySelector('#iphone').src = iphoneMockup;
    };
  }

  render() {
    return (
      <section className="hero">
        <div className="hero-body" style={{ padding: '1rem 0 0' }}>
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
            <StarsBackground />
            <div className="moon-background animated zoomIn" />
            <div className="columns">
              <div
                className="column animated fadeInLeft"
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={logo}
                  width={300}
                  alt=""
                  style={{
                    paddingBottom: '1rem',
                  }}
                />
                <h1
                  className="subtitle is-size-1 has-text-white welcome-text"
                  style={{
                    fontFamily: "'Pacifico', cursive",
                  }}
                >
                  Welcome to<br />our{' '}
                  <a
                    className="universe-link"
                    href="https://t.me/ELTCOIN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    universe!
                  </a>
                </h1>
              </div>
              <div className="column">
                <div
                  className="animated fadeInRight"
                  style={{ paddingTop: '3rem', position: 'relative' }}
                >
                  <div>
                    <img
                      id="iphone"
                      src={iphonePlaceholder}
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
                        top: '150px',
                        maxWidth: '280px',
                        width: '80%',
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
                position: 'relative',
                zIndex: 2,
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
              <a
                href="https://play.google.com/store/apps/details?id=tech.eltcoin.eltwallet"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex' }}
              >
                <img
                  src={googlePlayLogo}
                  alt=""
                  style={{
                    marginLeft: '0.5em',
                    height: 40,
                    width: 'auto',
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
