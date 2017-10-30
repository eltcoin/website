import React, { Component } from 'react';

import Adrian from './images/Adrian.png';
import Dan from './images/Dan.png';
import Ivan from './images/Ivan.png';
import Oliver from './images/Oliver.png';
import Victor from './images/Victor.png';
import Nathan from './images/Nathan.png';

class Team extends Component {
  renderTeamMember(name, role, imageUrl, handle) {
    handle = handle.replace('@', '');
    return (
      <div className="card">
        <div className="card-image">
          <img src={imageUrl} alt="" width={200} />
        </div>
        <div className="card-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{role}</p>
          <p className="handle is-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'https://t.me/' + handle}
            >
              @{handle}
            </a>
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">Team</h1>
            <br />
            <div className="columns is-multiline is-mobile">
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Oli H',
                  'Founder & Developer',
                  Oliver,
                  '@steak_e',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Ivan S.W',
                  'Strategist & Senior Advisor',
                  Ivan,
                  '@augmentedInvestor',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Victor F',
                  'Head of Engineering',
                  Victor,
                  '@vicdu81',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Dan T',
                  'Head of Design',
                  Dan,
                  '@Astroboylambo',
                )}
              </div>

              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Nathan H',
                  'CCO',
                  Nathan,
                  '@DarkImpulse',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Adrian P',
                  'Head of Staff',
                  Adrian,
                  '@moonshot100',
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
