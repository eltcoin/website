import React, { Component } from 'react';

import whitePaper from './ELTCOIN MOON PAPER.pdf';

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar is-transparent"
        style={{ backgroundColor: 'inherit', zIndex: 2 }}
      >
        <div className="container">
          <div className="navbar-end">
            <a
              className="navbar-item"
              href={whitePaper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: '#fafafa' }}>
                Our moon paper{' '}
                <span role="img" aria-label="m00n">
                  🚀🌔
                </span>
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
