import React, { Component } from 'react';

class Steps extends Component {
  renderStep(isCompleted, isActive, description) {
    return (
      <div
        className={`step-item ${isCompleted
          ? ' is-completed is-success'
          : ''} ${isActive ? ' is-active' : ''}`}
      >
        <div className="step-marker" />
        <div className="step-details">
          <p>{description}</p>
        </div>
      </div>
    );
  }

  render() {
    const { pageNumber } = this.props;

    return (
      <div className="steps">
        {this.renderStep(pageNumber >= 1, pageNumber === 0, 'Review order')}
        {this.renderStep(
          pageNumber >= 2,
          pageNumber === 1,
          'Your informations',
        )}
        {this.renderStep(pageNumber === 3, pageNumber === 2, 'Payment')}
      </div>
    );
  }
}

export default Steps;
