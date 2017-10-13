import React, { Component } from 'react';

import './index.css';

class AnimatedCard extends Component {
  render() {
    const { position, digit, animation } = this.props;
    return (
      <div className={`flipCard ${position} ${animation}`}>
        <span>{digit}</span>
      </div>
    );
  }
}

class StaticCard extends Component {
  render() {
    const { position, digit } = this.props;
    return (
      <div className={position}>
        <span>{digit}</span>
      </div>
    );
  }
}

class FlipUnitContainer extends Component {
  render() {
    const { digit, shuffle, unit } = this.props;

    let now = digit;
    let after = digit + 1;

    // to prevent a negative value
    if (unit !== 'hours') {
      after = after === -1 ? 59 : after;
    }

    // add zero
    if (now < 10) now = `0${now}`;
    if (after < 10) after = `0${after}`;

    // shuffle digits
    const digit1 = shuffle ? after : now;
    const digit2 = !shuffle ? after : now;

    // shuffle animations
    const animation1 = shuffle ? 'fold' : 'unfold';
    const animation2 = !shuffle ? 'fold' : 'unfold';

    return (
      <div className={'flipUnitContainer'}>
        <StaticCard position={'upperCard'} digit={now} />
        <StaticCard position={'lowerCard'} digit={after} />
        <AnimatedCard
          position={'first'}
          digit={digit1}
          animation={animation1}
        />
        <AnimatedCard
          position={'second'}
          digit={digit2}
          animation={animation2}
        />
      </div>
    );
  }
}

class FlipClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countDownDate: new Date('Sun Oct 15 2017 22:00:00 GMT').getTime(),
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const time = new Date().getTime();

    const distance = this.state.countDownDate - time;

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle,
      });
    }

    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle,
      });
    }

    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle,
      });
    }
  }

  render() {
    const {
      hours,
      minutes,
      seconds,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <div className={'flipClock'} style={{ margin: 'auto' }}>
        <FlipUnitContainer
          unit={'hours'}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={'minutes'}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={'seconds'}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}

export default FlipClock;
