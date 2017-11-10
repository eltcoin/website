import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Background,
  CartModal,
  Footer,
  Header,
  ScrollToTop,
} from './components';
import { Home, Store, StoreProduct } from '../../scenes';
import { connect } from 'react-redux';
import { SET_CART_ITEMS } from '../../config/actionTypes';

class App extends Component {
  state = {
    isCartModalOpen: false,
  };

  componentWillMount() {
    const cartItems = window.localStorage.getItem('cartItems');

    if (cartItems) {
      this.props.onReceiveCartItems(JSON.parse(cartItems));
    }
  }

  openModal = () => {
    this.setState({
      isCartModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isCartModalOpen: false,
    });
  };

  render() {
    return (
      <ScrollToTop>
        <Background />
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
