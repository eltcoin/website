import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

class Roadmap extends Component {
  state = {};

  render() {
    return (
      <section id="roadmap" className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">ROADMAP</h1>
            <br />
            <ul className="timeline is-centered">
              <li className="timeline-header">
                <span className="tag is-medium is-primary">
                  <b>ELTCEPTION</b>
                </span>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-success is-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        isOctoberVisible: !this.state.isOctoberVisible,
                      });
                    }}
                  >
                    October 2017 - "Foundation"
                  </p>
                  <Collapse isOpened={this.state.isOctoberVisible || false}>
                    <p>Token launch</p>
                    <p>AIRDROP distribution</p>
                    <p>ELTCOIN Swag Store store beta launch</p>
                    <p>Luxury e-commerce partner announcement</p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-primary" />
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        isNovemberVisible: !this.state.isNovemberVisible,
                      });
                    }}
                  >
                    November 2017 - "Constitution"
                  </p>
                  <Collapse isOpened={this.state.isNovemberVisible || false}>
                    <p>Token unlock</p>
                    <p>Exchange partner launch</p>
                    <p>
                      <i>ELTWallet</i> iOS app release
                    </p>
                    <p>
                      PoS interest funds (10% supply) Visible until Jan 2018
                    </p>
                    <p>PoS community driven interest policy adoption</p>
                    <p>ELTCOIN Swag Store opening</p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-primary" />
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        isDecemberVisible: !this.state.isDecemberVisible,
                      });
                    }}
                  >
                    December 2017 - "Airborne"
                  </p>
                  <Collapse isOpened={this.state.isDecemberVisible || false}>
                    <p>Harpoon contract intro</p>
                    <p>
                      Special announcement for <b>HODLR</b>s
                    </p>
                    <p>PoS interest faucet dAPP preview</p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-primary" />
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        isQ1Visible: !this.state.isQ1Visible,
                      });
                    }}
                  >
                    Q1 2018 - "Evolution"
                  </p>
                  <Collapse isOpened={this.state.isQ1Visible || false}>
                    <p>
                      <i>ELTWallet</i> Android app release
                    </p>
                    <p>PoS interest funds unlock and dApp launch</p>
                    <p>E-commerce partner program launch</p>
                    <p>ELTCOIN / Fiat bridge announcement</p>
                    <p>Regulated fiat to crypto partners announcement</p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-primary" />
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        isQ2Visible: !this.state.isQ2Visible,
                      });
                    }}
                  >
                    Q2 2018 - "Foodchain"
                  </p>
                  <Collapse isOpened={this.state.isQ2Visible || false}>
                    <p>ELTCOIN payment SDK launch</p>
                    <p>
                      Roadmap for P2P lending DAO <i>ELTCLUB</i>
                    </p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-primary" />
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        isQ3Visible: !this.state.isQ3Visible,
                      });
                    }}
                  >
                    Q3 2018 - "Phase 2"
                  </p>
                  <Collapse isOpened={this.state.isQ3Visible || false}>
                    <p>
                      White paper released for <i>DeadLetters</i>
                      <br /> a Location enabled, P2P sales & exchange DAO
                    </p>
                    <p>
                      <i>ELTCLUB</i> dApp beta launch
                    </p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-primary" />
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        isQ4Visible: !this.state.isQ4Visible,
                      });
                    }}
                  >
                    Q4 2018 - "Realisation"
                  </p>
                  <Collapse isOpened={this.state.isQ4Visible || false}>
                    <p>
                      <i>ELTCLUB</i> dApp launch
                    </p>
                    <p>
                      <i>ELTCelerator</i> program launch
                    </p>
                    <p>
                      <i>DeadLetters</i> dApp beta launch
                    </p>
                    <p>
                      <i>ELTCARD</i> announcement with preview & early access
                      program
                    </p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-item is-primary">
                <div className="timeline-marker is-primary" />
                <div className="timeline-content">
                  <p
                    className="heading is-size-6"
                    onClick={() => {
                      this.setState({
                        is2019Visible: !this.state.is2019Visible,
                      });
                    }}
                  >
                    Q1 2019 and beyond - "Phase 3"
                  </p>
                  <Collapse isOpened={this.state.is2019Visible || false}>
                    <p>
                      <i>DeadLetters</i> app launch
                    </p>
                    <p>
                      <i>ELTCARD</i> launch
                    </p>
                  </Collapse>
                </div>
              </li>
              <li className="timeline-header">
                <span className="tag is-medium is-primary">
                  <span
                    role="img"
                    aria-label="m00n"
                    style={{ fontSize: 1.5 + 'em' }}
                  >
                    🤔
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Roadmap;
