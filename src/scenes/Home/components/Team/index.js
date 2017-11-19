import React, { Component } from 'react';

import Adrian from './images/Adrian.png';
import Dan from './images/Dan.png';
import Ivan from './images/Ivan.png';
import Oliver from './images/Oliver.png';
import OliverHover from './images/Oliver.hover.png';
import Oli from './images/Oli.png';
import Victor from './images/Victor.png';
import Nathan from './images/Nathan.png';
import Bot from './images/Bot.png';

class Team extends Component {
  renderTeamMember(name, role, imageUrl, handle) {
    handle = handle.replace('@', '');
    return (
      <div className="card">
        <div className={handle + ' card-image'}>
          <img class="main" src={imageUrl} alt="" width={200} />
          <img
            id="oHover"
            style={{ opacity: 0, display: 'none' }}
            src={OliverHover}
            alt=""
            width={200}
          />
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
      <section id="team" className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">TEAM</h1>
            <br />
            <div className="columns is-multiline is-mobile">
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Oli H.',
                  'Founder & Developer',
                  Oliver,
                  '@steak_e',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Victor F.',
                  'Head of Engineering',
                  Victor,
                  '@vicdu81',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Ivan S.W.',
                  'Strategist & Senior Advisor',
                  Ivan,
                  '@augmentedInvestor',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Dan T.',
                  'Head of Design',
                  Dan,
                  '@Astroboylambo',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Oli M.',
                  'Senior Advisor & Tech',
                  Oli,
                  '@olliemoon',
                )}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Adrian P.',
                  'Head of Staff',
                  Adrian,
                  '@moonshot100',
                )}
              </div>
              <div className="column is-half-tablet is-half-mobile">
                {this.renderTeamMember(
                  'Nathan H.',
                  'Head of Community',
                  Nathan,
                  '@DarkImpulse',
                )}
              </div>
              <div className="column is-half-tablet is-half-mobile">
                {this.renderTeamMember(
                  'ELTBOT',
                  'Head of Automation',
                  Bot,
                  '@eltcoin_bot',
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
