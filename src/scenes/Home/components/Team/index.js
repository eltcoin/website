import React, { Component } from 'react';

import Adrian from './images/planet1.jpg';
import Dan from './images/planet2.jpg';
import Ivan from './images/planet3.jpg';
import Oliver from './images/planet4.jpg';
import Oli from './images/planet5.jpg';
import Victor from './images/planet6.jpg';
import Nathan from './images/planet7.jpg';

class Team extends Component {
  renderTeamMember(name, role, imageUrl, handle) {
    return (
      <div className="card">
        <img className="main planetStyle" src={imageUrl} alt="" width={200} />
        <div className="card-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{role}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="team" className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">Meet the Team</h1>
            <br />
            <div className="columns is-multiline is-mobile">
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember('Oli H.', 'Founder & Developer', Oliver)}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Victor F.',
                  'Head of Engineering',
                  Victor,
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Ivan S.W.',
                  'Strategist & Senior Advisor',
                  Ivan,
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember('Dan T.', 'Head of Design', Dan)}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember('Oli M.', 'Senior Advisor & Tech', Oli)}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember('Adrian P.', 'Head of Staff', Adrian)}
              </div>
              <div className="column is-half-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Nathan H.',
                  'Head of Community',
                  Nathan,
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
