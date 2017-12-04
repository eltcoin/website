import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import blackLogo from './images/black_logo.png';
import moonPaper from './moon_paper.pdf';

class Header extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    openModal: PropTypes.func.isRequired,
  };

  state = {
    isMenuOpen: false,
  };

  onCartButtonClick = () => {
    this.props.openModal();
    this.closeMenu();
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

  render() {
    return (
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <img src={blackLogo} alt="" />
            </NavLink>
            <div
              className={`navbar-burger burger ${
                this.state.isMenuOpen ? 'is-active' : ''
              }`}
              onClick={this.state.isMenuOpen ? this.closeMenu : this.openMenu}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={`navbar-menu ${
              this.state.isMenuOpen ? 'is-active' : ''
            }`}
          >
            <div className="navbar-end">
              <Link
                to="/#team"
                className="navbar-item"
                onClick={this.closeMenu}
              >
                <span>Team</span>
              </Link>
              <Link
                to="/#roadmap"
                className="navbar-item"
                onClick={this.closeMenu}
              >
                <span>Roadmap</span>
              </Link>
              <NavLink
                exact
                to="/store"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.closeMenu}
              >
                <span>Swag store</span>
              </NavLink>
              <a
                className="navbar-item"
                href="https://docs.google.com/document/d/1DIjdWiVWjADiwwgGcp7Trk_Zr_xGiRBxfJizQaI_POY/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.closeMenu}
              >
                <span>White paper</span>
              </a>
              <a
                className="navbar-item"
                href={moonPaper}
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.closeMenu}
              >
                <span>Moon paper</span>
              </a>
              {this.props.location.pathname.indexOf('store') !== -1 && (
                <a className="navbar-item" onClick={this.onCartButtonClick}>
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
