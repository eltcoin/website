import React from 'react';
import { Link } from 'react-router-dom';
import image0 from './images/0.png';
import image1 from './images/1.png';
import image2 from './images/2.png';

const SWAG_ITEMS = [
  {
    image: image0,
    name: 'The fighter',
    price: '$29.99',
  },
  {
    image: image1,
    name: 'The original',
    price: '$39.99',
  },
  {
    image: image2,
    name: 'The hodler',
    price: '$29.99',
  },
];

export default () => (
  <div
    className="card container has-text-centered has-text-white"
    style={{
      background: 'linear-gradient(0deg, #500d33, #000000)',
      borderRadius: '5px',
      padding: '1.5rem',
    }}
  >
    <p className="title is-size-1" style={{ color: '#fff' }}>
      ELTSwag
    </p>
    <div className="columns">
      {SWAG_ITEMS.map(item => (
        <div className="column" key={item.name}>
          <figure className="image" style={{ margin: 'auto', width: '80%' }}>
            <img src={item.image} alt="" />
          </figure>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
    <p className="is-size-3">Limited Total</p>
    <br />
    <Link to="/store" className="button">
      Shop now
    </Link>
  </div>
);
