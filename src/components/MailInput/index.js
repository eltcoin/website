import React, { Component } from 'react';

class MailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoading: false,
      isErrorState: false,
      isSuccessState: false,
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
    this.renderSuccessMessage = this.renderSuccessMessage.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  handleChange(event) {
    const email = event.target.value;
    const isDisabled = email === '';

    this.setState({
      email,
      isDisabled,
      isErrorState: false,
      errorMessage: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateEmail()) {
      this.setState({
        isLoading: true,
      });

      fetch(`${process.env.REACT_APP_API_URL}/users/eltcoin_user`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          ethAddress: this.props.ethAddress,
        }),
      })
        .then(() => {
          this.setState({
            isLoading: false,
            isSuccessState: true,
          });
        })
        .catch(() => {
          this.setState({
            isLoading: false,
            isErrorState: true,
            errorMessage: 'Something went wrong, please try again. ☺️',
          });
        });
    } else {
      this.setState({
        isErrorState: true,
        errorMessage: 'Enter a valid email adress',
      });
    }
  }

  validateEmail() {
    const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

    return emailPattern.test(this.state.email);
  }

  renderSubmitButton() {
    if (this.state.isSuccessState) {
      return;
    }

    let buttonClasses = 'button is-primary';

    if (this.state.isLoading) {
      buttonClasses += ' is-loading';
    }

    return (
      <a
        onClick={this.handleSubmit}
        className={buttonClasses}
        disabled={this.state.isDisabled}
      >
        Submit
      </a>
    );
  }

  renderSuccessMessage() {
    if (!this.state.isSuccessState) return;

    return (
      <div>
        <br />
        <p className="is-size-5" style={{ color: '#23d160' }}>
          Thanks, your email has been submitted!
        </p>
      </div>
    );
  }

  renderErrorMessage() {
    if (!this.state.errorMessage) return;

    return (
      <div>
        <br />
        <p className="is-size-5" style={{ color: '#ff3860' }}>
          {this.state.errorMessage}
        </p>
      </div>
    );
  }

  renderInput() {
    if (this.state.isSuccessState) {
      return;
    }

    return (
      <input
        className="input"
        type="email"
        value={this.state.email}
        placeholder="Enter your email"
        style={{ maxWidth: '30rem', textAlign: 'center' }}
        onChange={this.handleChange}
      />
    );
  }

  render() {
    return (
      <div>
        <div>{this.renderInput()}</div>
        <br />
        {this.renderSubmitButton()}
        <br />
        {this.renderErrorMessage()}
        {this.renderSuccessMessage()}
      </div>
    );
  }
}

export default MailInput;
