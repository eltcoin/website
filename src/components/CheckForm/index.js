import React, { Component } from 'react';
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
        <div>
        <p className="tag is-success is-large">
          Your are on the whitelist!
        </p>
        <p style={{ marginTop: '1rem' }}>
          Please read <a href="https://medium.com/@officialELTCoin/how-to-participate-in-the-eltcoin-token-sale-a44ae97c6c21" target="_blank" rel="noopener noreferrer">
          this guide
          </a> to learn how buy ELTCOINs.
        </p>
        </div>

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
            To guarantee your spot, please ensure you complete the form below.
            <br/>
            <br/>
            <a className="button is-danger" href="https://docs.google.com/forms/d/e/1FAIpQLSdaIL0XW0h3HSZAuigPCG-2RoPlxPKaQ8x7ELDyGuuJSe5DvA/viewform" target="_blank" rel="noopener noreferrer" >Here!</a>
          </span>
          <br />
          <br />
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
