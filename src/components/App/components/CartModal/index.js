import React, { Component } from 'react';
import OrderSummary from './components/OrderSummary';
import PaymentForm from './components/PaymentForm';
import Steps from './components/Steps';
import UserForm from './components/UserForm';

class CartModal extends Component {
  state = {
    pageNumber: 0,
  };

  setPageNumber = pageNumber => {
    this.setState({
      pageNumber,
    });
  };

  renderCurrentPage = () => {
    switch (this.state.pageNumber) {
      case 0:
        return (
          <OrderSummary
            loadNextPage={() => {
              this.setPageNumber(1);
            }}
          />
        );
      case 1:
        return (
          <UserForm
            loadNextPage={() => {
              this.setPageNumber(2);
            }}
            loadPreviousPage={() => {
              this.setPageNumber(0);
            }}
          />
        );
      case 2:
      case 3:
        return (
          <PaymentForm
            loadPreviousPage={() => {
              this.setPageNumber(1);
            }}
            onSuccess={() => {
              this.setPageNumber(3);
            }}
          />
        );
      default:
        return;
    }
  };

  render() {
    return (
      <div className={`modal ${this.props.isOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={this.props.closeModal} />
        <div className="modal-content">
          <div className="box" style={{ color: '#0a0a0a' }}>
            <Steps
              key={1}
              pageNumber={this.state.pageNumber}
              setPageNumber={this.setPageNumber}
            />
            {this.renderCurrentPage()}
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.props.closeModal}
        />
      </div>
    );
  }
}

export default CartModal;
