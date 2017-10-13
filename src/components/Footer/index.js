import React, { Component } from 'react';
import { I18n } from 'react-i18next';

class Footer extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <footer>
            <div className="content has-text-centered">
              <p className="is-size-5">
                <a
                  className="is-medium"
                  href="https://github.com/eltcoin"
                  style={{ margin: '.5em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-github" />
                </a>
                <a
                  className="is-medium"
                  href="https://twitter.com/officialELTCoin"
                  style={{ margin: '.5em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-twitter" />
                </a>
                <a
                  className="icon is-medium"
                  href="https://t.me/real_eLTC_community"
                  style={{ margin: '.5em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-telegram" />
                </a>
                <a
                  className="icon is-medium"
                  href="https://bitcointalk.org/index.php?topic=2241418.0"
                  style={{ margin: '.5em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-btc" />
                </a>
                <a
                  className="icon is-medium"
                  href="https://medium.com/@officialELTCoin"
                  style={{ margin: '.5em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-medium" />
                </a>
              </p>
              <br />
              © ELTCOIN Project 2017
              <br />
            </div>
            <br />
          </footer>
        )}
      </I18n>
    );
  }
}

export default Footer;
