import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import moonPaper from './moon_paper.pdf';
import moonEmoji from './images/moon.svg';
import paperEmoji from './images/paper.svg';
import roadmapEmoji from './images/roadmap.svg';
import swagEmoji from './images/swag.svg';
import teamEmoji from './images/team.svg';
import whiteLogo from './images/white_logo.png';
import blackLogo from './images/black_logo.png';
class Header extends Component {
  onMenuClick() {
    const menuButton = document.querySelector('.burger');
    const menu = document.querySelector('.navbar-menu');

    menuButton.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  renderLogo() {
    if (window.innerWidth > 1024) {
      return <img src={whiteLogo} alt="" />;
    }

    return <img src={blackLogo} alt="" />;
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              {this.renderLogo()}
            </NavLink>
            <div className="navbar-burger burger" onClick={this.onMenuClick}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link
                exact
                to="/#roadmap"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.onMenuClick}
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
                exact
                to="/#team"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.onMenuClick}
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
                onClick={this.onMenuClick}
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
              >
                <img
                  src={moonEmoji}
                  alt=""
                  width={18}
                  style={{ marginRight: '.5rem' }}
                />
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
