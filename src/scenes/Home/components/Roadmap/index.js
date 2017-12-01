import React, { Component } from 'react';
import planetImage from './images/planet.png';
import roadmapItems from './roadmap.json';

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
          background: 'radial-gradient(circle, #000000, #53346d)',
          backgroundSize: '100% 200%',
          padding: '1.5rem',
          marginTop: '2rem',
        }}
      >
        <p className="title is-size-1" style={{ color: '#fff' }}>
          Flight Plan
        </p>
        <div className="columns">
          <div className="column">
            <img
              src={planetImage}
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
              src={planetImage}
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
              src={planetImage}
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
              src={planetImage}
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
              src={planetImage}
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
              src={planetImage}
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
              src={planetImage}
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
