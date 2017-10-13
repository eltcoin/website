import React, { Component } from 'react';
import certificateImage from './images/moongang.jpg'

class Certificate extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <img src={certificateImage} alt="" style={{width: '100%', maxWidth: '35rem'}} />
      </div>
    );
  }
}

export default Certificate;
