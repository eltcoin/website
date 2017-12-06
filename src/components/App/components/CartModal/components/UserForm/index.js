import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Select from 'react-select';
import { UPDATE_USER_INFOS } from '../../../../../../config/actionTypes';

class UserForm extends Component {
  static propTypes = {
    loadNextPage: PropTypes.func.isRequired,
    loadPreviousPage: PropTypes.func.isRequired,
    onUserUpdate: PropTypes.func.isRequired,
  };

  state = {
    fullName: '',
    email: '',
    address: '',
    postalCode: '',
    city: '',
    state: null,
    countriesList: [],
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.data.allCountries) return;

    this.setState({
      countriesList: newProps.data.allCountries,
    });
  }

  handleFullNameChange = event => {
    this.setState({
      fullName: event.target.value,
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
  };

  handleAddressChange = event => {
    this.setState({
      address: event.target.value,
    });
  };

  handlePostalCodeChange = event => {
    this.setState({
      postalCode: event.target.value,
    });
  };

  handleCityChange = event => {
    this.setState({
      city: event.target.value,
    });
  };

  handleStateChange = state => {
    this.setState({
      state,
    });
  };

  handleCountryChange = country => {
    this.setState({
      country,
      state: null,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onUserUpdate({
      ...this.state,
      state: this.state.state ? this.state.state.value.code : null,
      country: this.state.country.value.code,
    });
    this.props.loadNextPage();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="country">
              Country <small>*</small>
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <Select
                  required
                  autoComplete="shipping address-level1"
                  clearable={false}
                  value={this.state.country}
                  options={this.state.countriesList.map(country => ({
                    value: country,
                    label: country.name,
                  }))}
                  onChange={this.handleCountryChange}
                  name="country"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="name">
              Full name <small>*</small>
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  required
                  autoComplete="name"
                  className="input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={this.state.fullName}
                  onChange={this.handleFullNameChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="email">
              Email <small>*</small>
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  required
                  autoComplete="email"
                  className="input"
                  name="email"
                  type="email"
                  placeholder="john@doe.com"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="address">
              Address <small>*</small>
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  required
                  name="address"
                  autoComplete="shipping street-address"
                  className="textarea"
                  placeholder="Ethereum Mainnet"
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <span className="label">
              {this.state.country && this.state.country.value.code === 'US'
                ? 'Zip code'
                : 'Postal code'}
            </span>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  autoComplete="shipping postal-code"
                  name="postalCode"
                  className="input"
                  placeholder="10011"
                  value={this.state.postalCode}
                  onChange={this.handlePostalCodeChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="city">
              City <small>*</small>
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  required
                  autoComplete="shipping address-level2"
                  name="city"
                  className="input"
                  placeholder="New York"
                  value={this.state.city}
                  onChange={this.handleCityChange}
                />
              </div>
            </div>
          </div>
        </div>

        {this.state.country &&
          this.state.country.value.states &&
          this.state.country.value.states.length > 0 && (
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label" htmlFor="state">
                  State <small>*</small>
                </label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <div className="control">
                      <Select
                        required
                        autoComplete="shipping address-level1"
                        name="state"
                        clearable={false}
                        value={this.state.state}
                        options={this.state.country.value.states.map(state => ({
                          value: state,
                          label: state.name,
                        }))}
                        onChange={this.handleStateChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        <div
          className="field is-grouped"
          style={{ justifyContent: 'flex-end' }}
        >
          <p className="control">
            <button
              className="button is-text"
              onClick={() => {
                this.props.loadPreviousPage();
              }}
            >
              Back
            </button>
          </p>
          <p className="control">
            <button type="submit" className="button is-dark">
              Payment
            </button>
          </p>
        </div>
      </form>
    );
  }
}

const GET_COUNTRIES_QUERY = gql`
  {
    allCountries {
      code
      name
      states
    }
  }
`;

const mapDispatchToProps = dispatch => ({
  onUserUpdate: user => dispatch({ type: UPDATE_USER_INFOS, user }),
});

export default connect(() => ({}), mapDispatchToProps)(
  graphql(GET_COUNTRIES_QUERY, {
    options: {
      errorPolicy: 'all',
    },
  })(UserForm),
);
