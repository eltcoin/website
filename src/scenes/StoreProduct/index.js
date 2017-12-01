import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Select from 'react-select';
import find from 'lodash/find';
import range from 'lodash/range';
import uniq from 'lodash/uniq';
import Spinner from '../../components/Spinner';
import { ADD_ITEM_TO_CART } from '../../config/actionTypes';

const SIZES_ORDER = {
  S: 0,
  M: 1,
  L: 2,
  XL: 3,
  XXL: 4,
};

class StoreProduct extends Component {
  state = {
    isModalOpen: false,
    selectedQuantity: {
      value: 1,
      label: 1,
    },
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.data.Product || this.state.selectedProductVariant) return;

    if (this.state.availableColors) return;

    const availableColors = uniq(
      newProps.data.Product.productVariants.map(pv => pv.color),
    )
      .sort()
      .map(color => ({
        value: color,
        label: color,
      }));

    const availableSizes = uniq(
      newProps.data.Product.productVariants.map(pv => pv.size),
    )
      .sort((size1, size2) => SIZES_ORDER[size1] > SIZES_ORDER[size2])
      .map(size => ({
        value: size,
        label: size,
      }));

    this.setState({
      availableColors,
      availableSizes,
      selectedColor: availableColors[0],
      selectedSize: availableSizes[0],
    });
  }

  handleQuantityChange = selectedQuantity => {
    this.setState({
      selectedQuantity,
    });
  };

  handleColorChange = selectedColor => {
    this.setState({
      selectedColor,
    });
  };

  handleSizeChange = selectedSize => {
    this.setState({
      selectedSize,
    });
  };

  selectedProductVariant = () => {
    if (!this.state.selectedSize || !this.state.selectedColor) return;

    return find(
      this.props.data.Product.productVariants,
      pv =>
        pv.size === this.state.selectedSize.value &&
        pv.color === this.state.selectedColor.value,
    );
  };

  addItemToCart = () => {
    const item = {
      amount: this.state.selectedQuantity.value,
      product: this.props.data.Product,
      productVariant: this.selectedProductVariant(),
    };

    this.props.onAdd(item);
  };

  renderProduct(product) {
    const selectedProductVariant = this.selectedProductVariant();

    if (!selectedProductVariant) return;

    const isItemInCart =
      selectedProductVariant &&
      find(
        this.props.cartItems.map(i => i.productVariant.id),
        productVariantId => productVariantId === selectedProductVariant.id,
      );

    return (
      <div>
        <h2 className="is-size-2">{product.name}</h2>
        <br />
        <div className="columns is-centered">
          <div className="column is-half">
            <figure
              className="image"
              style={{ maxWidth: '80%', margin: 'auto' }}
            >
              <img src={selectedProductVariant.imageUrl} alt="" />
            </figure>
          </div>
          <div
            className="column is-half"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p className="is-size-3">$ {product.usdPrice}</p>
            <br />
            <div className="field">
              <label className="label" style={{ color: '#fafafa' }}>
                Size
              </label>
              <div className="control">
                <Select
                  className="centered"
                  placeholder="Size"
                  searchable={false}
                  clearable={false}
                  value={this.state.selectedSize}
                  options={this.state.availableSizes}
                  onChange={this.handleSizeChange}
                />
              </div>
            </div>
            <br />
            <div className="field">
              <label className="label" style={{ color: '#fafafa' }}>
                Color
              </label>
              <div className="control">
                <Select
                  className="centered"
                  placeholder="Size"
                  searchable={false}
                  clearable={false}
                  value={this.state.selectedColor}
                  options={this.state.availableColors}
                  onChange={this.handleColorChange}
                />
              </div>
            </div>
            <br />
            <div className="field">
              <label className="label" style={{ color: '#fafafa' }}>
                Quantity
              </label>
              <div className="control">
                <Select
                  className="centered"
                  placeholder="Size"
                  searchable={false}
                  clearable={false}
                  value={this.state.selectedQuantity}
                  options={range(1, 11).map(n => ({
                    value: n,
                    label: n,
                  }))}
                  onChange={this.handleQuantityChange}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="field">
              <div className="control has-text-centered">
                {isItemInCart ? (
                  <p>This product has been added to your bag</p>
                ) : (
                  <button
                    disabled={!selectedProductVariant}
                    className="button"
                    onClick={this.addItemToCart}
                  >
                    Add to bag
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <Spinner />;
    }

    if (this.props.error || !this.props.data.Product) {
      return (
        <section
          className="container has-text-centered"
          style={{ padding: '4rem 0 2rem' }}
        >
          <h4 className="is-size-4">
            An error occured fetching this Swag Store product...
          </h4>
        </section>
      );
    }

    return (
      <section
        className="container has-text-centered"
        style={{ padding: '4rem 0 2rem' }}
      >
        {this.renderProduct(this.props.data.Product)}
        <br />
      </section>
    );
  }
}

const PRODUCT_QUERY = gql`
  query product($productId: ID!) {
    Product(id: $productId) {
      id
      name
      usdPrice
      productVariants {
        id
        imageUrl
        size
        color
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = dispatch => ({
  onAdd: item => dispatch({ type: ADD_ITEM_TO_CART, item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(PRODUCT_QUERY, {
    options: ({ match }) => ({
      variables: {
        productId: match.params.productId,
      },
      errorPolicy: 'all',
    }),
  })(StoreProduct),
);
