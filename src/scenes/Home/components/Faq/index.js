import React from 'react';

const Faq = () => {
  return (
    <div className="card container has-text-centered">
      <div className="card-content">
        <p className="title is-size-1">FAQ</p>
        <br />
        <p className="subtitle is-size-4">What is ELTCOIN?</p>
        <p className="is-size-5">
          ELTCOIN seeks to be the preeminent ERC20 token with a limited supply.
        </p>
        <br />
        <p className="subtitle is-size-4">Why create ELTCOIN?</p>
        <p className="is-size-5">
          To provide a provably fair currency on the Ethereum Network.
        </p>
        <br />
        <p className="subtitle is-size-4">How many ELTCOIN are there?</p>
        <p className="is-size-5">
          The cap of ELTCOIN is 100,000,000 and can never be altered or modified
        </p>
      </div>
    </div>
  );
};

export default Faq;
