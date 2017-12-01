import React, { Component } from 'react';
import planetImage from './images/planet.png';
import roadmapItems from './roadmap.json';

import Planet1 from './../../images/planet1.png';
import Planet2 from './../../images/planet2.png';
import Planet3 from './../../images/planet3.png';
import Planet4 from './../../images/planet4.png';
import Planet5 from './../../images/planet5.png';
import Planet6 from './../../images/planet6.png';
import Planet7 from './../../images/planet7.png';

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
          <div className="column">
            <img
              src={Planet1}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 0,
                });
              }}
            />
          </div>
          <div className="column">
            <img
              src={Planet2}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 1,
                });
              }}
            />
          </div>
          <div className="column">
            <img
              src={Planet3}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 2,
                });
              }}
            />
          </div>
          <div className="column">
            <img
              src={Planet4}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 3,
                });
              }}
            />
          </div>
          <div className="column">
            <img
              src={Planet5}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 4,
                });
              }}
            />
          </div>
          <div className="column">
            <img
              src={Planet6}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 5,
                });
              }}
            />
          </div>
          <div className="column">
            <img
              src={Planet7}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 6,
                });
              }}
            />
          </div>
          <div className="column">
            <img
              src={planetImage}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  index: 7,
                });
              }}
            />
          </div>
        </div>
        <div className="has-text-left">
          <p className="is-size-5">{roadmapItem.title}</p>
          <ul>
            {roadmapItem.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Roadmap;
