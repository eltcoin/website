import React from 'react';
import { Link } from 'react-router-dom';
import image0 from './images/0.png';
import image1 from './images/1.png';
import image2 from './images/2.png';

export default () => (
  <div
    className="card container has-text-centered has-text-white"
    style={{
      background: 'radial-gradient(circle, #000000, #53346d)',
      backgroundSize: '100% 200%',
      padding: '1.5rem',
    }}
  >
    <p className="title is-size-1" style={{ color: '#fff' }}>
      ELTSwag
    </p>
    <div className="columns">
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={image0} alt="" />
        </figure>
        <p>The fighter</p>
        <p>$29.99</p>
      </div>
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={image1} alt="" />
        </figure>
        <p>The original</p>
        <p>$39.99</p>
      </div>
      <div className="column">
        <figure className="image" style={{ width: '80%%' }}>
          <img src={image2} alt="" />
        </figure>
        <p>The hodler</p>
        <p>$29.99</p>
      </div>
    </div>
    <p className="is-size-3">Limited supply</p>
    <br />
    <Link to="/store" className="button">
      Shop now
    </Link>
  </div>
);
