import React from 'react';
import loveEmoji from './images/heart.svg';

const Footer = () => {
  return (
    <footer>
      <div className="content container has-text-centered">
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
            href="https://www.facebook.com/eltcoin.community/"
            style={{ margin: '.5em' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-facebook" />
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
            href="https://t.me/ELTCOIN"
            style={{ margin: '.5em' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-telegram" />
          </a>
          <a
            className="icon is-medium"
            href="https://bitcointalk.org/index.php?topic=2259761.0"
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
        <img
          src={loveEmoji}
          alt=""
          width={16}
          style={{ marginRight: '.5rem' }}
        />
        <span>ELTCOIN Community Project {new Date().getFullYear()}</span>
        <img
          src={loveEmoji}
          alt=""
          width={16}
          style={{ marginLeft: '.5rem' }}
        />
        <br />
      </div>
      <br />
    </footer>
  );
};

export default Footer;
