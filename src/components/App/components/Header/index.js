import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import blackLogo from './images/black_logo.png';

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
              onKeyPress={
                this.state.isMenuOpen ? this.closeMenu : this.openMenu
              }
              role="button"
              tabIndex={0}
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
                to="/#roadmap"
                className="navbar-item"
                onClick={this.closeMenu}
              >
                <span>FLIGHT PLAN</span>
              </Link>
              <a
                className="navbar-item"
                href={`${process.env.PUBLIC_URL}/whitepaper.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.closeMenu}
              >
                <span>WHITE PAPER</span>
              </a>
              <NavLink
                exact
                to="/store"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.closeMenu}
              >
                <span>SWAG STORE</span>
              </NavLink>
              {this.props.location.pathname.indexOf('store') !== -1 && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  className="navbar-item"
                  onClick={this.onCartButtonClick}
                  onKeyPress={this.onCartButtonClick}
                  role="button"
                  tabIndex={0}
                >
                  <span>MY BAG</span>
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
