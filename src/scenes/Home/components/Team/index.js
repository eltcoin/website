import React from 'react';
import Adrian from './images/Adrian.png';
import Oli from './images/Oli.png';
import Ivan from './images/Ivan.png';
import Oliver from './images/Oliver.png';
import Dan from './images/Dan.png';
import Victor from './images/Victor.png';
import Community from './images/Bot.png';

const TEAM_MEMBERS = [
  {
    image: Oliver,
    name: 'Oli H.',
    title: {
      __html: 'Co-founder &<br/>Developer',
    },
    linkedinLink: 'https://uk.linkedin.com/in/oliver-hirst-2075a3a0',
    twitterLink: 'https://twitter.com/Steake',
  },
  {
    image: Victor,
    name: 'Victor F.',
    title: {
      __html: 'Co-founder &<br/>Head of<br/>Engineering',
    },
    linkedinLink: 'https://www.linkedin.com/in/victorfaramond',
    twitterLink: 'https://twitter.com/vfaramond',
  },
  {
    image: Ivan,
    name: 'Ivan S.W.',
    title: {
      __html: 'Co-founder &<br/>Head of<br/>Strategy',
    },
    linkedinLink: 'https://www.linkedin.com/in/isotowright',
    twitterLink: 'https://twitter.com/isotowright',
  },
  {
    image: Dan,
    name: 'Dan T.',
    title: {
      __html: 'Co-founder &<br/>Head of<br/>Design',
    },
    linkedinLink: 'https://www.linkedin.com/in/daniel-tracey-a1022989',
    twitterLink: '',
  },
  {
    image: Oli,
    name: 'Oli M.',
    title: {
      __html: 'Head of<br/>Mobile',
    },
    linkedinLink: 'https://www.linkedin.com/in/oliver-mahoney-713a4027',
    twitterLink: 'https://twitter.com/olivermahoney',
  },
  {
    image: Adrian,
    name: 'Adrian P.',
    title: {
      __html: 'Head of<br/>Staff',
    },
    linkedinLink: 'https://www.linkedin.com/in/adriankpang/',
    twitterLink: 'https://twitter.com/adriankpang',
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
    <h1 className="title is-size-2">THE TEAM</h1>
    <p
      className="subtitle"
      style={{
        fontFamily: "'Pacifico', cursive",
      }}
    >
      Entrepreneurs, engineers and eclectics
    </p>
    <br />
    <div className="columns">
      {TEAM_MEMBERS.map(member => (
        <div className="column" key={member.name}>
          <img src={member.image} alt="" width={100} />
          <p className="title is-6">{member.name}</p>
          <p
            className="subtitle is-7"
            dangerouslySetInnerHTML={member.title}
            style={{
              marginBottom: '0.1rem',
            }}
          />
          <div>
            {member.twitterLink && (
              <a
                className="is-medium"
                href={member.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: '0.2rem',
                }}
              >
                <i className="fa fa-twitter" />
              </a>
            )}
            <a
              className="is-medium"
              href={member.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: member.twitterLink ? '0.2rem' : 0,
              }}
            >
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </div>
      ))}
      <div className="column">
        <a
          href="https://t.me/ELTCOIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Community} alt="" width={100} />
          <p className="title is-6">You</p>
          <p className="subtitle is-7">
            We{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>
            <br />Community
          </p>
        </a>
      </div>
    </div>
  </div>
);
