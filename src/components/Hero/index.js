import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import FlipClock from '../FlipClock';
import ParticlesBackground from '../ParticlesBackground';
import logo from './images/logo.png';

class Hero extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <section
            className="hero"
            style={{
              minHeight: 'calc(100vh - 40px)',
              width: '100vw',
              margin: 'auto',
            }}
          >
            <ParticlesBackground />
            <div
              className="hero-body"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="container has-text-centered">
                <br />
                <img src={logo} width={200} height={200} alt="" />
                <h1 className="title is-size-1">ELTCOIN</h1>
                <br />
                <br />
                <h1 className="subtitle is-size-2">{t('hero.title')}</h1>
                <br />
                <h4 className="subtitle is-size-4">Public sale starting in</h4>
                <FlipClock />
              </div>
            </div>
          </section>
        )}
      </I18n>
    );
  }
}

export default Hero;
