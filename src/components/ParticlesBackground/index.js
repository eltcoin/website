import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesBackground extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
            },
            color: {
              value: '#b5b5b5',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 80,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 80,
              color: '#fafafa',
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 8,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    );
  }
}

export default ParticlesBackground;
