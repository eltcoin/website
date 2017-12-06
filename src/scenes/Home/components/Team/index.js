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
    title: {
      __html: 'Founder &<br/>Developer',
    },
  },
  {
    image: Victor,
    name: 'Victor F.',
    title: {
      __html: 'Head of<br/>Engineering',
    },
  },
  {
    image: Ivan,
    name: 'Ivan S.W.',
    title: {
      __html: 'Head of<br/>Strategy',
    },
  },
  {
    image: Dan,
    name: 'Dan T.',
    title: {
      __html: 'Head of<br/>Design',
    },
  },
  {
    image: Oli,
    name: 'Oli M.',
    title: {
      __html: 'Head of<br/>Mobile',
    },
  },
  {
    image: Adrian,
    name: 'Adrian P.',
    title: {
      __html: 'Head of<br/>Staff',
    },
  },
  {
    image: Nathan,
    name: 'Nathan H.',
    title: {
      __html: 'Head of<br/>Community',
    },
  },
];

export default () => (
  <div
    className="card container has-text-centered"
    id="team"
    style={{
      padding: '1.5rem',
    }}
  >
    <h1 className="title is-size-1">Meet the Team</h1>
    <br />
    <div className="columns">
      {TEAM_MEMBERS.map(member => (
        <div className="column" key={member.name}>
          <img src={member.image} alt="" width={100} />
          <p className="title is-4">{member.name}</p>
          <p className="subtitle is-6" dangerouslySetInnerHTML={member.title} />
        </div>
      ))}
    </div>
  </div>
);
