import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Select from 'react-select';
import Spinner from '../../../../../Spinner';
import { EMPTY_CART } from '../../../../../../config/actionTypes';

const CURRENCIES = [
  {
    label: 'BTC',
    value: 'BTC',
  },
  {
    label: 'ETH',
    value: 'ETH',
  },
];

class PaymentForm extends Component {
  state = {
    selectedCurrency: CURRENCIES[0],
    formSubmitted: false,
    isLoading: false,
  };

  handleCurrencyChange = selectedCurrency => {
    this.setState({
      selectedCurrency,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      formSubmitted: true,
      isLoading: true,
    });

    this.props
      .createTransaction({
        variables: {
          currency: this.state.selectedCurrency.value,
          items: this.props.cartItems.map(item => ({
            amount: item.amount,
            productVariantId: item.productVariant.id,
          })),
          shippingAddress: {
            address: this.props.user.address,
            postalCode: this.props.user.postalCode,
            city: this.props.user.city,
            state: this.props.user.state,
            country: this.props.user.country,
          },
          user: {
            fullName: this.props.user.fullName,
            email: this.props.user.email,
          },
        },
      })
      .then(res => {
        this.props.onSuccess();
        this.props.emptyCart();
        this.setState({
          isLoading: false,
          amount: res.data.createTransaction.amount,
          paymentAddress: res.data.createTransaction.paymentAddress,
          qrCodeUrl: res.data.createTransaction.qrCodeUrl,
          statusUrl: res.data.createTransaction.statusUrl,
          timeout: res.data.createTransaction.timeout,
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isErrorState: true,
        });
      });
  };

  renderCurrencySelection = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Currency</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <Select
                  searchable={false}
                  clearable={false}
                  value={this.state.selectedCurrency}
                  options={CURRENCIES}
                  onChange={this.handleCurrencyChange}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div
          className="field is-grouped"
          style={{ justifyContent: 'flex-end' }}
        >
          <p className="control">
            <a
              style={{ lineHeight: '36px' }}
              onClick={() => {
                this.props.loadPreviousPage();
              }}
            >
              Back
            </a>
          </p>
          <p className="control">
            <button type="submit" className="button is-dark">
              {`Pay in ${this.state.selectedCurrency.label}`}
            </button>
          </p>
        </div>
      </form>
    );
  };

  renderSpinner = () => {
    return (
      <div>
        <Spinner />
        <p className="has-text-centered">Creating transaction...</p>
      </div>
    );
  };

  renderTransactionInfos = () => {
    return (
      <div className="has-text-centered">
        <img src={this.state.qrCodeUrl} alt="" />
        <br />
        <p>
          Please send{' '}
          <strong>
            {this.state.amount} {this.state.selectedCurrency.value}
          </strong>{' '}
          to the following address:
        </p>
        <br />
        <p>
          <strong>{this.state.paymentAddress}</strong>
        </p>
        <br />
        <p>
          <a
            href={this.state.statusUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Transaction status
          </a>
        </p>
        <br />
        <p>
          We'll keep you updated as soon as your order is processed and shipped.
        </p>
      </div>
    );
  };

  render() {
    if (this.state.isErrorState) {
      return (
        <div className="has-text-centered">
          <h5 className="is-size-5">
            An error occured while creating the transaction, please try again
            later...
          </h5>
        </div>
      );
    }

    if (!this.state.formSubmitted) {
      return this.renderCurrencySelection();
    }

    if (this.state.isLoading) {
      return this.renderSpinner();
    }

    return this.renderTransactionInfos();
  }
}

const CREATE_TRANSACTION_MUTATION = gql`
  mutation createTransaction(
    $currency: String!
    $items: Json!
    $shippingAddress: Json!
    $user: Json!
  ) {
    createTransaction(
      currency: $currency
      items: $items
      shippingAddress: $shippingAddress
      user: $user
    ) {
      amount
      paymentAddress
      qrCodeUrl
      statusUrl
      timeout
    }
  }
`;

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({
  emptyCart: user => dispatch({ type: EMPTY_CART, user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(CREATE_TRANSACTION_MUTATION, {
    name: 'createTransaction',
  })(PaymentForm),
);
