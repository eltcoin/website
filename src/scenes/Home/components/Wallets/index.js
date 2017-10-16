import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import parityImage from './images/parity.jpg';
import mistImage from './images/mist.png';
import metamaskImage from './images/metamask.png';
import imTokenImage from './images/imtoken.png';
import myEtherWalletImage from './images/myetherwallet.png';

class Wallets extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title is-size-1">{t('wallets.title')}</h1>
                <a
                  href="https://parity.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={parityImage}
                    width={100}
                    height={100}
                    alt=""
                    style={{ margin: 2 + 'em' }}
                  />
                </a>
                <a
                  href="https://github.com/ethereum/mist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={mistImage}
                    width={100}
                    height={100}
                    alt=""
                    style={{ margin: 2 + 'em' }}
                  />
                </a>
                <a
                  href="https://metamask.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={metamaskImage}
                    width={100}
                    height={100}
                    alt=""
                    style={{ margin: 2 + 'em' }}
                  />
                </a>
                <a
                  href="https://token.im"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imTokenImage}
                    width={100}
                    height={100}
                    alt=""
                    style={{ margin: 2 + 'em' }}
                  />
                </a>
                <a
                  href="https://www.myetherwallet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={myEtherWalletImage}
                    width={100}
                    height={100}
                    alt=""
                    style={{ margin: 2 + 'em' }}
                  />
                </a>
              </div>
            </div>
          </section>
        )}
      </I18n>
    );
  }
}

export default Wallets;
