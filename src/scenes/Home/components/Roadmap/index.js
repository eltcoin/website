import React, { Component } from 'react';
import planetImage from './images/planet.png';
import roadmapItems from './roadmap.json';

import planet1 from './../../images/planet1.png';
import planet2 from './../../images/planet2.png';
import planet3 from './../../images/planet3.png';
import planet4 from './../../images/planet4.png';
import planet5 from './../../images/planet5.png';
import planet6 from './../../images/planet6.png';
import planet7 from './../../images/planet7.png';

const PLANETS = [
  planet1,
  planet2,
  planet3,
  planet4,
  planet5,
  planet6,
  planet7,
  planetImage,
];

class Roadmap extends Component {
  state = {
    index: 0,
  };

  render() {
    const roadmapItem = roadmapItems[this.state.index];

    return (
      <div
        id="roadmap"
        className="card container has-text-centered has-text-white"
        style={{
          background: 'linear-gradient(0deg, #500d33, #000000)',
          padding: '1.5rem',
          marginTop: '2rem',
        }}
      >
        <p className="title is-size-1" style={{ color: '#fff' }}>
          Flight Plan
        </p>
        <div className="columns is-mobile">
          {PLANETS.map((planet, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="column" key={index}>
              <img
                src={planet}
                alt=""
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  this.setState({
                    index,
                  });
                }}
              />
            </div>
          ))}
        </div>
        <div className="has-text-left">
          <p className="is-size-5">{roadmapItem.title}</p>
          <ul>
            {roadmapItem.items.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Roadmap;
