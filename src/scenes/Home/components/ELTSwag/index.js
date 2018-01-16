import React from 'react';
import { Link } from 'react-router-dom';
import StarsBackground from '../../../../components/StarsBackground';
import image0 from './images/0.png';
import image1 from './images/1.png';
import image2 from './images/2.png';

const SWAG_ITEMS = [
  {
    image: image0,
    name: 'The fighter',
    price: 'ELT 299',
  },
  {
    image: image1,
    name: 'The original',
    price: 'ELT 399',
  },
  {
    image: image2,
    name: 'The hodler',
    price: 'ELT 299',
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
    <StarsBackground />
    <p className="title is-size-2" style={{ color: '#fff' }}>
      ELTSWAG
    </p>
    <p
      className="subtitle"
      style={{
        color: '#fff',
        fontFamily: "'Pacifico', cursive",
      }}
    >
      Here today, gone tomorrow
    </p>
    <div className="columns">
      {SWAG_ITEMS.map(item => (
        <div className="column" key={item.name}>
          <figure className="image" style={{ margin: 'auto', width: '80%' }}>
            <img src={item.image} alt="" />
          </figure>
          <p>{item.name}</p>
          <p>
            <b>{item.price}</b>
          </p>
        </div>
      ))}
    </div>
    <br />
    <Link
      to="/store"
      className="button is-medium"
      style={{ fontFamily: "'Pacifico', cursive" }}
    >
      Become a Hodler
    </Link>
  </div>
);
