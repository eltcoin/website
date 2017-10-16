import React, { Component } from 'react';
import { I18n } from 'react-i18next';

class TokenDetails extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title is-size-1">{t('tokenDetails.title')}</h1>
                <br />
                <div className="subtitle">
                  <b className="is-size-4">
                    {t('tokenDetails.contractAddress')}
                  </b>
                  <br />
                  <a
                    href="https://etherscan.io/address/0x44197a4c44d6a059297caf6be4f7e172bd56caaf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0x44197a4c44d6a059297caf6be4f7e172bd56caaf
                  </a>
                  <br />
                  <br />
                  <b className="is-size-4">{t('tokenDetails.symbol')}</b>
                  <br />
                  ELTCOIN
                  <br />
                  <br />
                  <b className="is-size-4">{t('tokenDetails.decimals')}</b>
                  <br />
                  8
                </div>
              </div>
            </div>
          </section>
        )}
      </I18n>
    );
  }
}

export default TokenDetails;
