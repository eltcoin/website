import React, { Component } from 'react';

import moonPaper from './moon_paper.pdf';

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
              href="https://docs.google.com/document/d/1DIjdWiVWjADiwwgGcp7Trk_Zr_xGiRBxfJizQaI_POY/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: '#fafafa' }}>Our white paper </span>
            </a>
            <a
              className="navbar-item"
              href={moonPaper}
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
