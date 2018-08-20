import React from 'react';
import eltwalletLogo from './images/eltwallet.png';
import pocketbookLogo from './images/pocketbook.jpg';

export default () => (
  <section className="tc mw8 center pt5 ph3 mb5" id="projects">
    <h2 className="f2 normal tracked-mega">PROJECTS</h2>
    <div className="ph3 mw6 center mt3 mb5">
      <p>
        Get rewarded by contributing to our different projects or by starting
        your own!
      </p>
    </div>
    <div className="cf">
      <div className="fl w-100 w-50-l ph4-ns ph3 mb3 mb5-l">
        <div className="bg-white br2 shadow-4 pa3">
          <a
            className="link black dim db cf flex items-center justify-between"
            href="https://github.com/eltcoin/eltwallet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Eltwallet" className="w3 h3" src={eltwalletLogo} />
            <p className="tl pl3">
              <b>Eltwallet:</b> Non-custodial decentralized mobile wallet
            </p>
          </a>
        </div>
      </div>
      <div className="fl w-100 w-50-l ph4-ns ph3 mb3 mb5-l">
        <div className="bg-white br2 shadow-4 pa3">
          <a
            className="link black dim db cf flex items-center justify-between"
            href="https://github.com/eltcoin/pocketbook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Pocketbook"
              className="w3 h3 br-100"
              src={pocketbookLogo}
            />
            <p className="tl pl3">
              <b>Pocketbook:</b> Censorship immune, decentralized human network
            </p>
          </a>
        </div>
      </div>
      <div className="fl w-25-l">
        <p />
      </div>
      <div className="fl w-100 w-50-l ph4-ns ph3">
        <div className="bg-white br2 shadow-4 pa3">
          <a
            className="link black dim db cf flex items-center justify-between"
            href="https://github.com/eltcoin/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Want to get your project listed here? Submit your project to the
              community.
            </p>
          </a>
        </div>
      </div>
      <div className="fl w-25-l" />
    </div>
  </section>
);
