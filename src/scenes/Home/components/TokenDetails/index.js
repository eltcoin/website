import React, { Component } from 'react';

class TokenDetails extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">The token</h1>
            <br />
            <div className="subtitle">
              <b className="is-size-4">Contract address</b>
              <br />
              <a
                href="https://etherscan.io/token/0x44197a4c44d6a059297caf6be4f7e172bd56caaf"
                target="_blank"
                rel="noopener noreferrer"
              >
                eltcoin.eth
              </a>
              <br />
              <br />
              <b className="is-size-4">Symbol</b>
              <br />
              ELTCOIN
              <br />
              <br />
              <b className="is-size-4">Decimals</b>
              <br />
              8
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TokenDetails;
