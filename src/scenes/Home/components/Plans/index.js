import React, { Component } from 'react';

class Plans extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {
    clearInterval(this.state.emojiInterval);
  }

  render() {
    return (
      <section
        className="hero"
        style={{
          minHeight: 'calc(100vh - 40px)',
          width: '100vw',
          margin: 'auto',
        }}
      >
        <div
          className="hero-body"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          />
        </div>
      </section>
    );
  }
}

export default Plans;
