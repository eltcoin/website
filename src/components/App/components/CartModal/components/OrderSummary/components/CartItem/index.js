import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DECREASE_ITEM_QUANTITY,
  INCREASE_ITEM_QUANTITY,
  REMOVE_ITEM_FROM_CART,
} from '../../../../../../../../config/actionTypes';

class CartItem extends Component {
  decreaseQuantity = () => {
    const { item } = this.props;

    if (item.amount === 1) {
      this.props.onRemove(item.productVariant.id);
    }

    this.props.onDecrease(item.productVariant.id);
  };

  increaseQuantity = () => {
    this.props.onIncrease(this.props.item.productVariant.id);
  };

  removeItem = () => {
    this.props.onRemove(this.props.item.productVariant.id);
  };

  render() {
    const { item } = this.props;

    return (
      <article className="media" key={item.productVariant.id}>
        <div className="media-left">
          <figure className="image is-96x96">
            <img src={item.productVariant.imageUrl} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.product.name}</strong>
              <br />
              {item.productVariant.color}
              {' - '}
              {item.productVariant.size}
              <br />
              Quantity: <small>{item.amount}</small>
            </p>
          </div>
        </div>
        <div
          className="media-right"
          style={{ margin: 'auto', display: 'flex' }}
        >
          <p style={{ marginRight: '1rem' }}>
            $ {(item.product.usdPrice * item.amount).toFixed(2)}
          </p>
          <div className="field is-grouped">
            <p className="control">
              <button
                className="button is-small"
                onClick={this.decreaseQuantity}
              >
                <span className="icon is-small">
                  <i className="fa fa-minus" />
                </span>
              </button>
            </p>
            <p className="control">
              <button
                className="button is-small"
                onClick={this.increaseQuantity}
              >
                <span className="icon is-small">
                  <i className="fa fa-plus" />
                </span>
              </button>
            </p>
            <p className="control">
              <button className="button is-small" onClick={this.removeItem}>
                <span className="icon is-small">
                  <i className="fa fa-trash" />
                </span>
              </button>
            </p>
          </div>
        </div>
        <hr />
      </article>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDecrease: productVariantId =>
    dispatch({ type: DECREASE_ITEM_QUANTITY, productVariantId }),
  onIncrease: productVariantId =>
    dispatch({ type: INCREASE_ITEM_QUANTITY, productVariantId }),
  onRemove: productVariantId =>
    dispatch({ type: REMOVE_ITEM_FROM_CART, productVariantId }),
});

export default connect(() => ({}), mapDispatchToProps)(CartItem);
