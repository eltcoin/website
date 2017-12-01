import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'radial-gradient(circle, #000000, #53346d)',
        backgroundSize: '100% 200%',
        padding: '1.5rem',
      }}
    >
      <div className="container has-text-white has-text-weight-bold">
        <p className="is-size-3">JOIN OUR COMMUNITY</p>
        <p className="has-text-weight-light">
          Stay up to date with progress and updates.
        </p>
        <br />
        <p className="is-size-5">
          <a
            className="is-medium"
            href="https://www.youtube.com/channel/UCCpJqoXegl501zfHevtTilQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className="fa fa-youtube-play fa-stack-1x" />
            </span>
          </a>
          <a
            className="is-medium"
            href="https://github.com/eltcoin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className="fa fa-github fa-stack-1x" />
            </span>
          </a>
          <a
            className="is-medium"
            href="https://www.facebook.com/eltcoin.community/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className="fa fa-facebook fa-stack-1x" />
            </span>
          </a>
          <a
            className="is-medium"
            href="https://t.me/ELTCOIN"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className="fa fa-telegram fa-stack-1x" />
            </span>
          </a>
          <a
            className="is-medium"
            href="https://twitter.com/officialELTCoin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className="fa fa-twitter fa-stack-1x" />
            </span>
          </a>
          <a
            className="is-medium"
            href="https://bitcointalk.org/index.php?topic=2259761.0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className="fa fa-bitcoin fa-stack-1x" />
            </span>
          </a>
          <a
            className="is-medium"
            href="https://medium.com/@officialELTCoin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className="fa fa-medium fa-stack-1x" />
            </span>
          </a>
        </p>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
