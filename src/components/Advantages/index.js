import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';

class Advantages extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns">
                  <div className="column">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-fighter-jet fa-stack-1x fa-inverse" />
                    </span>
                    <br />
                    <br />
                    <b className="is-size-4">{t('advantages.faster.title')}</b>
                    <br />
                    <br />
                    <Trans
                      className="is-size-5"
                      i18nKey="advantages.faster.description"
                    >
                      ELTCOIN will have faster transaction speeds than Litecoin.
                      The average block time on Litecoin is
                      <a
                        href="https://bitinfocharts.com/comparison/litecoin-confirmationtime.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        2 minutes
                      </a>, while on Ethereum it's
                      <a
                        href="https://bitinfocharts.com/comparison/ethereum-confirmationtime.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        30 seconds
                      </a>.
                    </Trans>
                  </div>
                  <div className="column">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-money fa-stack-1x fa-inverse" />
                    </span>
                    <br />
                    <br />
                    <b className="is-size-4">{t('advantages.cheaper.title')}</b>
                    <br />
                    <br />
                    <Trans
                      className="is-size-5"
                      i18nKey="advantages.cheaper.description"
                    >
                      Litecoin transaction fees are more
                      <a
                        href="https://bitinfocharts.com/comparison/litecoin-transactionfees.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        volatile
                      </a>, whereas Ethereum fees are cheaper and vary within a
                      tighter range of
                      <a
                        href="https://bitinfocharts.com/comparison/ethereum-transactionfees.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        $0.20 to $0.40
                      </a>.
                    </Trans>
                  </div>
                  <div className="column">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-superpowers fa-stack-1x fa-inverse" />
                    </span>
                    <br />
                    <br />
                    <b className="is-size-4">{t('advantages.smarter.title')}</b>
                    <br />
                    <br />
                    <Trans
                      className="is-size-5"
                      i18nKey="advantages.smarter.description"
                    >
                      ELTCOIN can work with smart contracts on the Ethereum
                      blockchain. While there are plans to support them,
                      Litecoin does not currently support smart contracts.
                    </Trans>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </I18n>
    );
  }
}

export default Advantages;
