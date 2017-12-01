import React, { Component } from 'react';

import Adrian from './../../images/planet1.png';
import Dan from './../../images/planet2.png';
import Ivan from './../../images/planet3.png';
import Oliver from './../../images/planet4.png';
import Oli from './../../images/planet5.png';
import Victor from './../../images/planet6.png';
import Nathan from './../../images/planet7.png';

class Team extends Component {
  renderTeamMember(name, role, imageUrl, handle) {
    return (
      <div>
        <img src={imageUrl} alt="" width={100} />
        <p className="title is-4">{name}</p>
        <p className="subtitle is-6">{role}</p>
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
            <div className="columns">
              <div className="column">
                {this.renderTeamMember('Oli H.', 'Founder & Developer', Oliver)}
              </div>
              <div className="column">
                {this.renderTeamMember(
                  'Victor F.',
                  'Head of Engineering',
                  Victor,
                )}
              </div>
              <div className="column">
                {this.renderTeamMember(
                  'Ivan S.W.',
                  'Strategist & Senior Advisor',
                  Ivan,
                )}
              </div>
              <div className="column">
                {this.renderTeamMember('Dan T.', 'Head of Design', Dan)}
              </div>
              <div className="column">
                {this.renderTeamMember('Oli M.', 'Senior Advisor & Tech', Oli)}
              </div>
              <div className="column">
                {this.renderTeamMember('Adrian P.', 'Head of Staff', Adrian)}
              </div>
              <div className="column">
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
