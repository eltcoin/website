import React from 'react';
import logo from './images/logo.png';

export default () => (
  <nav className="dt w-100 border-box pv4 ph3 ph5-ns bg-transparent">
    <a href="/" className="link dim dtc v-mid w-15" name="home">
      <img src={logo} className="h2 w2" alt="" />
    </a>
    <div className="dtc v-mid w-85 tr">
      <a
        className="link dim white f7 f5-ns mr3 mr4-ns tracked tracked-mega-ns pointer"
        href="/eltcat.png"
        rel="noopener noreferrer"
        target="_blank"
        title="Coming soon..."
      >
        WHITE PAPER
      </a>
      <a
        className="link dim white f7 f5-ns mr3 mr4-ns tracked tracked-mega-ns"
        href="#roadmap"
      >
        ROADMAP
      </a>
      <a
        className="link dim white f7 f5-ns tracked tracked-mega-ns"
        href="#team"
      >
        TEAM
      </a>
    </div>
  </nav>
);
