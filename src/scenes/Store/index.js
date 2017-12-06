import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../../components/Spinner';

function renderProductCard(product) {
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

const Store = props => {
  if (props.data.loading) {
    return (
      <section
        className="container has-text-centered"
        style={{ minHeight: 'calc(100vh - 260px)', paddingTop: '4rem' }}
      >
        <Spinner />
      </section>
    );
  }

  if (!props.data.allProducts) {
    return (
      <section
        className="container has-text-centered"
        style={{ minHeight: 'calc(100vh - 260px)', paddingTop: '4rem' }}
      >
        <h2>An error occured fetching our Swag Store products...</h2>
      </section>
    );
  }

  return (
    <section
      className="container has-text-centered"
      style={{ minHeight: 'calc(100vh - 260px)', paddingTop: '4rem' }}
    >
      <div className="columns is-multiline" style={{ marginTop: '2rem' }}>
        {props.data.allProducts.map(p => renderProductCard(p))}
      </div>
      <br />
    </section>
  );
};

Store.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    allProducts: PropTypes.array,
  }).isRequired,
};

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
