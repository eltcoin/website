import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div className="moon">
        <img
          src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png"
          style={{ width: '30px', height: '20px' }}
          className="rocket"
          alt=""
        />
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}

export default Spinner;
