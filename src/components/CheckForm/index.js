import React, { Component } from 'react';
import MailInput from '../MailInput';
import { I18n } from 'react-i18next';

class CheckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      isLoading: false,
      validStatus: null,
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const address = event.target.value;
    const isDisabled = address === '';

    this.setState({
      address,
      isDisabled,
    });
  }

  handleSubmit(event) {
    this.setState({
      validStatus: null,
    });

    if (this.state.address !== '') {
      this.setState({
        isLoading: true,
      });

      fetch(
        `${process.env.REACT_APP_API_URL}/users/${this.state.address.trim()}`,
      )
        .then(response => {
          return response.json();
        })
        .then(users => {
          this.setState({
            validStatus: users.length > 0,
            isLoading: false,
          });
        });
    }
    event.preventDefault();
  }

  renderMessage() {
    if (this.state.validStatus === true) {
      return (
        <span className="tag is-success is-large">
          Congratulations you have been elected!
          <br />
        </span>
      );
    } else if (this.state.validStatus === false) {
      return (
        <div>
          <span className="is-size-5" style={{ color: '#ff3860' }}>
            We're sorry, but unfortunately you did not make it to the first tier
            of our whitelist.{' '}
            <span role="img" aria-label="SAD">
              😑
            </span>
            <br />
            We'll be announcing the next batch soon, please be patient.{' '}
            <span role="img" aria-label="WELCOME">
              🤗
            </span>
            <br />
            For KYC purposes, please enter your email below.
          </span>
          <br />
          <br />
          <MailInput ethAddress={this.state.address} />
        </div>
      );
    } else {
      return;
    }
  }

  render() {
    let buttonClasses = 'button is-primary';

    if (this.state.isLoading) {
      buttonClasses += ' is-loading';
    }

    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title is-size-1">Pre-Sale Check</h1>
                <div>
                  <input
                    className="input"
                    type="text"
                    value={this.state.address}
                    placeholder="Enter your ETH address"
                    style={{ maxWidth: '30rem', textAlign: 'center' }}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <div>
                  <a
                    onClick={this.handleSubmit}
                    className={buttonClasses}
                    disabled={this.state.isDisabled}
                  >
                    Check
                  </a>
                </div>
                <br />
                {this.renderMessage()}
              </div>
            </div>
          </section>
        )}
      </I18n>
    );
  }
}

export default CheckForm;
