import React from 'react';

const roadmapBlocks = [
  {
    title: 'Foundation',
    date: 'October 2017',
    content: [
      'ELTCOIN ($ELT) token launch',
      '80% of supply distributed in Airdrop',
      '10% of supply time-locked for Community vote',
      '10% of supply allocated for R&D',
      'ELTBOT first release on Telegram',
      '$ELT lists on Etherdelta',
    ],
    passed: true,
  },
  {
    title: 'Constitution',
    date: 'November 2017',
    content: [
      'ELTWALLET first release on App Store',
      'ELT Community whitepaper first version',
      '$ELT lists on Mercatox',
    ],
    passed: true,
  },
  {
    title: 'Airborne',
    date: 'December 2017',
    content: [
      'ELTWALLET 2.0 release on Play Store',
      'ELTMOVIE released in English & Japanese',
      'ELTBOT second release with HODLER rankings',
      '$ELT lists on Coinexchange',
    ],
    passed: true,
  },
  {
    title: 'Evolution',
    date: 'January 2018',
    content: [
      'Community vote on 10% time-locked ELTCOIN supply',
      'Community whitepaper second version',
      '$ELT lists on Apollo (private beta)',
      'Website rebranding',
    ],
    passed: true,
  },
  {
    title: 'Evolution (2)',
    date: 'February 2018',
    content: [
      'ELTWALLET 2.0 release on App Store',
      '$ELT accepted on Moonassets',
      '$ELT lists on Apollo (public launch)',
      'ELTCARD preview',
    ],
  },
  {
    title: 'Evolution (3)',
    date: 'March 2018',
    content: [
      'ELTCARD alpha program launch',
      'ELTBOT third release with HODLER games',
      '$ELT lists on a top 50 exchange by volume',
    ],
  },
  {
    title: 'Metamorphosis',
    date: 'Q2 2018',
    content: [
      'ELTCARD beta program launch',
      'ELTWALLET 3.0 release (sync with Eltcard)',
      '$ELT lists on a top 20 exchange by volume',
    ],
  },
  {
    title: 'Realisation',
    date: 'Q3 2018',
    content: [
      'ELTCARD public launch',
      'ELTCOIN payment SDK launch',
      '$ELT lists on a top 10 exchange by volume',
    ],
  },
  {
    title: 'Reincarnation',
    date: 'Q4 2018',
    content: ['Community-driven updates'],
  },
];

export default () => (
  <section id="roadmap" className="cf tc mw9 center pt5">
    <h2 className="f2 normal tracked-mega pb3">ROADMAP</h2>
    <div id="cd-timeline">
      {roadmapBlocks.map((block, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="cd-timeline-block" key={index}>
          <div className="cd-timeline-img" />
          <div className="cd-timeline-content br2 tl tc-ns">
            <h2 className="f3-ns f4 mt0">{block.title}</h2>
            {block.content.map((element, index2) => (
              // eslint-disable-next-line react/no-array-index-key
              <p className="silver mb0" key={index2}>
                • {element}
              </p>
            ))}
            <span className="cd-date b">
              {block.passed && (
                <img
                  className="w1 v-top pr2"
                  alt="checked"
                  src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNC41MDIsNzUuNDk2Yy05Ljk5Ny05Ljk5OC0yNi4yMDUtOS45OTgtMzYuMjA0LDBMMTYxLjU5NCwzODIuMjAzTDQzLjcwMiwyNjQuMzExYy05Ljk5Ny05Ljk5OC0yNi4yMDUtOS45OTctMzYuMjA0LDAgICAgYy05Ljk5OCw5Ljk5Ny05Ljk5OCwyNi4yMDUsMCwzNi4yMDNsMTM1Ljk5NCwxMzUuOTkyYzkuOTk0LDkuOTk3LDI2LjIxNCw5Ljk5LDM2LjIwNCwwTDUwNC41MDIsMTExLjcgICAgQzUxNC41LDEwMS43MDMsNTE0LjQ5OSw4NS40OTQsNTA0LjUwMiw3NS40OTZ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                />
              )}
              {block.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
