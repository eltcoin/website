import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../../components/Spinner';

class Store extends Component {
  renderProductCard(product) {
    return (
      <div
        className="column is-one-third"
        style={{ marginBottom: '1rem' }}
        key={product.id}
      >
        <Link to={`/store/${product.id}`}>
          <figure className="image" style={{ width: '80%', margin: 'auto' }}>
            <img src={product.productVariants[0].imageUrl} alt="" />
          </figure>
          <br />
          <b>{product.name}</b>
          <p>$ {product.usdPrice}</p>
        </Link>
      </div>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return (
        <section
          className="container has-text-centered"
          style={{ paddingTop: '4rem' }}
        >
          <h2>An error occured fetching our Swag Store products...</h2>
        </section>
      );
    }

    return (
      <section
        className="container has-text-centered"
        style={{ paddingTop: '4rem' }}
      >
        <div className="columns is-multiline" style={{ marginTop: '2rem' }}>
          {this.props.data.allProducts.map(p => this.renderProductCard(p))}
        </div>
        <br />
      </section>
    );
  }
}

const PRODUCTS_QUERY = gql`
  {
    allProducts {
      id
      name
      usdPrice
      productVariants(
        filter: { color_in: ["Black", "Charcoal-Black Triblend"], size: S }
      ) {
        id
        color
        imageUrl
      }
    }
  }
`;
export default graphql(PRODUCTS_QUERY, {
  options: {
    errorPolicy: 'all',
  },
})(Store);
