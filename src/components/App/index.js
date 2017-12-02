import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { CartModal, Footer, Header, ScrollToTop } from './components';
import { Home, Store, StoreProduct } from '../../scenes';
import { SET_CART_ITEMS } from '../../config/actionTypes';

class App extends Component {
  static propTypes = {
    onReceiveCartItems: PropTypes.func.isRequired,
  };

  state = {
    isCartModalOpen: false,
  };

  componentWillMount() {
    const cartItems = window.localStorage.getItem('cartItems');

    if (cartItems) {
      this.props.onReceiveCartItems(JSON.parse(cartItems));
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      window.Raven.config(
        'https://0ddfcefcf922465488c2dde443f9c9d5@sentry.io/230876',
      ).install();
    }
  }

  openModal = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.left = '0';
    document.body.style.right = '0';
    this.setState({
      isCartModalOpen: true,
    });
  };

  closeModal = () => {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'initial';
    this.setState({
      isCartModalOpen: false,
    });
  };

  render() {
    return (
      <ScrollToTop>
        <Header openModal={this.openModal} />
        <CartModal
          isOpen={this.state.isCartModalOpen}
          closeModal={this.closeModal}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/store/:productId" component={StoreProduct} />
          <Route path="/store" component={Store} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </ScrollToTop>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onReceiveCartItems: cartItems =>
    dispatch({ type: SET_CART_ITEMS, cartItems }),
});

export default connect(() => ({}), mapDispatchToProps)(App);
