import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import moonPaper from './moon_paper.pdf';

class Header extends Component {
  onMenuClick() {
    const menuButton = document.querySelector('.burger');
    const menu = document.querySelector('.navbar-menu');

    menuButton.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <div className="navbar-burger burger" onClick={this.onMenuClick}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              {this.props.location.pathname === '/store' ? (
                <NavLink
                  exact
                  to="/"
                  className="navbar-item"
                  activeClassName="is-active"
                  onClick={this.onMenuClick}
                >
                  <span>Home</span>
                </NavLink>
              ) : (
                <NavLink
                  exact
                  to="/store"
                  className="navbar-item"
                  activeClassName="is-active"
                  onClick={this.onMenuClick}
                >
                  <span
                    role="img"
                    aria-label="m00n"
                    style={{ marginRight: '.5rem' }}
                  >
                    🤙
                  </span>
                  <span>Swag store</span>
                </NavLink>
              )}

              <a
                className="navbar-item"
                href="https://docs.google.com/document/d/1DIjdWiVWjADiwwgGcp7Trk_Zr_xGiRBxfJizQaI_POY/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  role="img"
                  aria-label="m00n"
                  style={{ marginRight: '.5rem' }}
                >
                  📄
                </span>
                <span>White paper</span>
              </a>
              <a
                className="navbar-item"
                href={moonPaper}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  role="img"
                  aria-label="m00n"
                  style={{ marginRight: '.5rem' }}
                >
                  🌔
                </span>
                <span>Moon paper</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
