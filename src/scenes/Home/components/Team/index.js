import React from 'react';
import Adrian from './../../images/planet1.png';
import Dan from './../../images/planet2.png';
import Ivan from './../../images/planet3.png';
import Oliver from './../../images/planet4.png';
import Oli from './../../images/planet5.png';
import Victor from './../../images/planet6.png';
import Nathan from './../../images/planet7.png';

const TEAM_MEMBERS = [
  {
    image: Oliver,
    name: 'Oli H.',
    title: 'Founder & Developer',
  },
  {
    image: Victor,
    name: 'Victor F.',
    title: 'Head of Engineering',
  },
  {
    image: Ivan,
    name: 'Ivan S.W.',
    title: 'Strategist & Senior Advisor',
  },
  {
    image: Dan,
    name: 'Dan T.',
    title: 'Head of Design',
  },
  {
    image: Oli,
    name: 'Oli M.',
    title: 'Senior Advisor & Tech',
  },
  {
    image: Adrian,
    name: 'Adrian P.',
    title: 'Head of Staff',
  },
  {
    image: Nathan,
    name: 'Nathan H.',
    title: 'Head of Community',
  },
];

export default () => (
  <section id="team" className="hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-size-1">Meet the Team</h1>
        <br />
        <div className="columns">
          {TEAM_MEMBERS.map(member => (
            <div className="column" key={member.name}>
              <img src={member.image} alt="" width={100} />
              <p className="title is-4">{member.name}</p>
              <p className="subtitle is-6">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
