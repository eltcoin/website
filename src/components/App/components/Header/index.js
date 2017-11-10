import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import blackLogo from './images/black_logo.png';
import cartEmoji from './images/cart.svg';
import moonPaper from './moon_paper.pdf';
import moonEmoji from './images/moon.svg';
import paperEmoji from './images/paper.svg';
import roadmapEmoji from './images/roadmap.svg';
import swagEmoji from './images/swag.svg';
import teamEmoji from './images/team.svg';
import whiteLogo from './images/white_logo.png';

class Header extends Component {
  state = {
    isMenuOpen: false,
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
  };

  openMenu = () => {
    this.setState({
      isMenuOpen: true,
    });
  };

  renderLogo() {
    if (window.innerWidth > 1024) {
      return <img src={whiteLogo} alt="" />;
    }

    return <img src={blackLogo} alt="" />;
  }

  onCartButtonClick = () => {
    this.props.openModal();
    this.closeMenu();
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              {this.renderLogo()}
            </NavLink>
            <div
              className={`navbar-burger burger ${this.state.isMenuOpen
                ? 'is-active'
                : ''}`}
              onClick={this.state.isMenuOpen ? this.closeMenu : this.openMenu}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={`navbar-menu ${this.state.isMenuOpen
              ? 'is-active'
              : ''}`}
          >
            <div className="navbar-end">
              <Link
                to="/#roadmap"
                className="navbar-item"
                onClick={this.closeMenu}
              >
                <img
                  src={roadmapEmoji}
                  alt=""
                  width={18}
                  style={{ marginRight: '.5rem' }}
                />
                <span>Roadmap</span>
              </Link>
              <Link
                to="/#team"
                className="navbar-item"
                onClick={this.closeMenu}
              >
                <img
                  src={teamEmoji}
                  alt=""
                  width={18}
                  style={{ marginRight: '.5rem' }}
                />
                <span>Team</span>
              </Link>
              <NavLink
                exact
                to="/store"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.closeMenu}
              >
                <img
                  src={swagEmoji}
                  alt=""
                  width={18}
                  style={{ marginRight: '.5rem' }}
                />
                <span>Swag store</span>
              </NavLink>
              <a
                className="navbar-item"
                href="https://docs.google.com/document/d/1DIjdWiVWjADiwwgGcp7Trk_Zr_xGiRBxfJizQaI_POY/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.closeMenu}
              >
                <img
                  src={paperEmoji}
                  alt=""
                  width={18}
                  style={{ marginRight: '.5rem' }}
                />
                <span>White paper</span>
              </a>
              <a
                className="navbar-item"
                href={moonPaper}
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.closeMenu}
              >
                <img
                  src={moonEmoji}
                  alt=""
                  width={18}
                  style={{ marginRight: '.5rem' }}
                />
                <span>Moon paper</span>
              </a>
              {this.props.location.pathname.indexOf('store') !== -1 && (
                <a className="navbar-item" onClick={this.onCartButtonClick}>
                  <img
                    src={cartEmoji}
                    alt=""
                    width={18}
                    style={{ marginRight: '.5rem' }}
                  />
                  <span>My bag</span>
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
