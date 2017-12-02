import React from 'react';
import PropTypes from 'prop-types';

function renderStep(isCompleted, isActive, description) {
  return (
    <div
      className={`step-item ${isCompleted ? ' is-completed is-success' : ''} ${
        isActive ? ' is-active' : ''
      }`}
    >
      <div className="step-marker" />
      <div className="step-details">
        <p>{description}</p>
      </div>
    </div>
  );
}

const Steps = ({ pageNumber }) => (
  <div className="steps">
    {renderStep(pageNumber >= 1, pageNumber === 0, 'Review order')}
    {renderStep(pageNumber >= 2, pageNumber === 1, 'Your informations')}
    {renderStep(pageNumber === 3, pageNumber === 2, 'Payment')}
  </div>
);

Steps.propTypes = {
  pageNumber: PropTypes.number.isRequired,
};

export default Steps;
