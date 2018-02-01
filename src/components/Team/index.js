import React from 'react';
import Adrian from './images/Adrian.png';
import Dan from './images/Dan.png';
import Ivan from './images/Ivan.png';
import OliH from './images/Oliver.png';
import OliM from './images/Oli.png';
import Victor from './images/Victor.png';

const teamMembers = [
  {
    description: {
      __html:
        'Adrian is responsible for looking after business operations & partnerships at ELTCOIN.<br/><br/>He enjoys building relations within teams, nurturing product pipeline and coordinating ELTCOIN community projects. He has experience working in startups and fintech across Europe and China.',
    },
    image: Adrian,
    linkedinLink: 'https://www.linkedin.com/in/adriankpang',
    name: 'Adrian P.',
    title: 'Head of Staff',
    twitterLink: 'https://twitter.com/adriankpang',
  },
  {
    description: {
      __html:
        "Dan is a Graphic Designer & Creative Consultant with a keen interest in cryptocurrency.<br/><br/>He has previously worked in finance specialising in info-graphics and branding. He's also involved in fintech startups.",
    },
    image: Dan,
    linkedinLink: 'https://www.linkedin.com/in/daniel-tracey-a1022989',
    name: 'Dan T.',
    title: 'Head of Design',
  },
  {
    description: {
      __html:
        'Ivan is ultimately responsible for the roadmap, managing external communications, and ensuring that ELTCOIN hits its development milestones on time.<br/><br/>He is a serial entrepreneur, investor, and early crypto adopter. He is Managing Partner of HODL.vc, which is an incubation fund and DAO to a number of crypto ventures he has co-founded including Apollo and Moonassets.',
    },
    image: Ivan,
    linkedinLink: 'https://www.linkedin.com/in/isotowright',
    name: 'Ivan S. W.',
    title: 'Head of Strategy',
    twitterLink: 'https://twitter.com/isotowright',
  },
  {
    description: {
      __html:
        'Oli co-founded ELTCOIN and is Lead Architect. His vision for ELTCOIN is to create a resilient, community-backed currency, staking into an ecosystem of open-source DAOs.<br/><br/>He is a gifted self-taught programmer and innovator. He has a keen interest in economics, game theory, and social programming.',
    },
    githubLink: 'https://github.com/steake',
    image: OliH,
    linkedinLink: 'https://uk.linkedin.com/in/oliver-hirst-2075a3a0',
    name: 'Oli H.',
    title: 'Lead Architect',
    twitterLink: 'https://twitter.com/Steake',
  },
  {
    description: {
      __html:
        'Oli is advising ELTCOIN team and helped on the ELTWALLET app.<br/><br/> Previously Head of Engineering at Velocity, he has been responsible for a number of successful product launches whilst building and scaling engineering teams spanning Europe and North America.',
    },
    githubLink: 'https://github.com/olliem36',
    image: OliM,
    linkedinLink: 'https://www.linkedin.com/in/oliver-mahoney-713a4027',
    name: 'Oli M.',
    title: 'Head of Mobile',
    twitterLink: 'https://twitter.com/olivermahoney',
  },
  {
    description: {
      __html:
        'Victor is a talented and highly skilled engineer that coordinates engineering efforts within ELTCOIN ecosystem.<br/><br/> He enjoys facing new challenges in designing innovative solutions and technologies, inventing and producing the world of tomorrow with some aesthetic sensibility.',
    },
    githubLink: 'https://github.com/vfaramond',
    image: Victor,
    linkedinLink: 'https://www.linkedin.com/in/victorfaramond',
    name: 'Victor F.',
    title: 'Head of Engineering',
    twitterLink: 'https://twitter.com/vfaramond',
  },
];

export default () => (
  <section id="team" className="tc mw8 center pt5 ph3">
    <h2 className="f2 normal tracked-mega">TEAM</h2>
    <div className="cf">
      <div className="fl w-100 w-50-l ph4-ns ph3">
        {teamMembers
          .filter((member, index) => index % 2 === 0)
          .map((member, index) => (
            <div
              className="br2 bg-white shadow-4 pv3 center mb3 mb5-l"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={{
                minHeight: '440px',
              }}
            >
              <img className="w4" src={member.image} alt={member.name} />
              <p className="f3-ns f4 mt0 mb1 black">{member.name}</p>
              <p className="mt1 mb2 silver">{member.title}</p>
              <div>
                {member.twitterLink && (
                  <a
                    className="dim"
                    href={member.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w1 pr2"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTAuMTU1IDQxMC4xNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4xNTUgNDEwLjE1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM3NkE5RUE7IiBkPSJNNDAzLjYzMiw3NC4xOGMtOS4xMTMsNC4wNDEtMTguNTczLDcuMjI5LTI4LjI4LDkuNTM3YzEwLjY5Ni0xMC4xNjQsMTguNzM4LTIyLjg3NywyMy4yNzUtMzcuMDY3ICBsMCwwYzEuMjk1LTQuMDUxLTMuMTA1LTcuNTU0LTYuNzYzLTUuMzg1bDAsMGMtMTMuNTA0LDguMDEtMjguMDUsMTQuMDE5LTQzLjIzNSwxNy44NjJjLTAuODgxLDAuMjIzLTEuNzksMC4zMzYtMi43MDIsMC4zMzYgIGMtMi43NjYsMC01LjQ1NS0xLjAyNy03LjU3LTIuODkxYy0xNi4xNTYtMTQuMjM5LTM2LjkzNS0yMi4wODEtNTguNTA4LTIyLjA4MWMtOS4zMzUsMC0xOC43NiwxLjQ1NS0yOC4wMTQsNC4zMjUgIGMtMjguNjcyLDguODkzLTUwLjc5NSwzMi41NDQtNTcuNzM2LDYxLjcyNGMtMi42MDQsMTAuOTQ1LTMuMzA5LDIxLjktMi4wOTcsMzIuNTZjMC4xMzksMS4yMjUtMC40NCwyLjA4LTAuNzk3LDIuNDgxICBjLTAuNjI3LDAuNzAzLTEuNTE2LDEuMTA2LTIuNDM5LDEuMTA2Yy0wLjEwMywwLTAuMjA5LTAuMDA1LTAuMzE0LTAuMDE1Yy02Mi43NjItNS44MzEtMTE5LjM1OC0zNi4wNjgtMTU5LjM2My04NS4xNGwwLDAgIGMtMi4wNC0yLjUwMy01Ljk1Mi0yLjE5Ni03LjU3OCwwLjU5M2wwLDBDMTMuNjc3LDY1LjU2NSw5LjUzNyw4MC45MzcsOS41MzcsOTYuNTc5YzAsMjMuOTcyLDkuNjMxLDQ2LjU2MywyNi4zNiw2My4wMzIgIGMtNy4wMzUtMS42NjgtMTMuODQ0LTQuMjk1LTIwLjE2OS03LjgwOGwwLDBjLTMuMDYtMS43LTYuODI1LDAuNDg1LTYuODY4LDMuOTg1bDAsMGMtMC40MzgsMzUuNjEyLDIwLjQxMiw2Ny4zLDUxLjY0Niw4MS41NjkgIGMtMC42MjksMC4wMTUtMS4yNTgsMC4wMjItMS44ODgsMC4wMjJjLTQuOTUxLDAtOS45NjQtMC40NzgtMTQuODk4LTEuNDIxbDAsMGMtMy40NDYtMC42NTgtNi4zNDEsMi42MTEtNS4yNzEsNS45NTJsMCwwICBjMTAuMTM4LDMxLjY1MSwzNy4zOSw1NC45ODEsNzAuMDAyLDYwLjI3OGMtMjcuMDY2LDE4LjE2OS01OC41ODUsMjcuNzUzLTkxLjM5LDI3Ljc1M2wtMTAuMjI3LTAuMDA2ICBjLTMuMTUxLDAtNS44MTYsMi4wNTQtNi42MTksNS4xMDZjLTAuNzkxLDMuMDA2LDAuNjY2LDYuMTc3LDMuMzUzLDcuNzRjMzYuOTY2LDIxLjUxMyw3OS4xMzEsMzIuODgzLDEyMS45NTUsMzIuODgzICBjMzcuNDg1LDAsNzIuNTQ5LTcuNDM5LDEwNC4yMTktMjIuMTA5YzI5LjAzMy0xMy40NDksNTQuNjg5LTMyLjY3NCw3Ni4yNTUtNTcuMTQxYzIwLjA5LTIyLjc5MiwzNS44LTQ5LjEwMyw0Ni42OTItNzguMjAxICBjMTAuMzgzLTI3LjczNywxNS44NzEtNTcuMzMzLDE1Ljg3MS04NS41ODl2LTEuMzQ2Yy0wLjAwMS00LjUzNywyLjA1MS04LjgwNiw1LjYzMS0xMS43MTJjMTMuNTg1LTExLjAzLDI1LjQxNS0yNC4wMTQsMzUuMTYtMzguNTkxICBsMCwwQzQxMS45MjQsNzcuMTI2LDQwNy44NjYsNzIuMzAyLDQwMy42MzIsNzQuMThMNDAzLjYzMiw3NC4xOHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                      alt="Twitter"
                    />
                  </a>
                )}
                <a
                  className="dim"
                  href={member.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={`w1 ${member.githubLink ? 'pr2' : ''}`}
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzODIgMzgyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODIgMzgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzAwNzdCNzsiIGQ9Ik0zNDcuNDQ1LDBIMzQuNTU1QzE1LjQ3MSwwLDAsMTUuNDcxLDAsMzQuNTU1djMxMi44ODlDMCwzNjYuNTI5LDE1LjQ3MSwzODIsMzQuNTU1LDM4MmgzMTIuODg5ICBDMzY2LjUyOSwzODIsMzgyLDM2Ni41MjksMzgyLDM0Ny40NDRWMzQuNTU1QzM4MiwxNS40NzEsMzY2LjUyOSwwLDM0Ny40NDUsMHogTTExOC4yMDcsMzI5Ljg0NGMwLDUuNTU0LTQuNTAyLDEwLjA1Ni0xMC4wNTYsMTAuMDU2ICBINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYgIGM1LjU1NCwwLDEwLjA1Niw0LjUwMiwxMC4wNTYsMTAuMDU2VjMyOS44NDR6IE04Ni43NDgsMTIzLjQzMmMtMjIuNDU5LDAtNDAuNjY2LTE4LjIwNy00MC42NjYtNDAuNjY2UzY0LjI4OSw0Mi4xLDg2Ljc0OCw0Mi4xICBzNDAuNjY2LDE4LjIwNyw0MC42NjYsNDAuNjY2UzEwOS4yMDgsMTIzLjQzMiw4Ni43NDgsMTIzLjQzMnogTTM0MS45MSwzMzAuNjU0YzAsNS4xMDYtNC4xNCw5LjI0Ni05LjI0Niw5LjI0NkgyODYuNzMgIGMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OSAgYzAsNS4xMDYtNC4xMzksOS4yNDYtOS4yNDYsOS4yNDZoLTQ0LjQyNmMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2VjE0OS41OTNjMC01LjEwNiw0LjE0LTkuMjQ2LDkuMjQ2LTkuMjQ2aDQ0LjQyNiAgYzUuMTA2LDAsOS4yNDYsNC4xNCw5LjI0Niw5LjI0NnYxNS42NTVjMTAuNDk3LTE1Ljc1MywyNi4wOTctMjcuOTEyLDU5LjMxMi0yNy45MTJjNzMuNTUyLDAsNzMuMTMxLDY4LjcxNiw3My4xMzEsMTA2LjQ3MiAgTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    alt="Linkedin"
                  />
                </a>
                {member.githubLink && (
                  <a
                    className="dim"
                    href={member.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w1"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDM4LjUzNiA0MzguNTM2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzguNTM2IDQzOC41MzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                      alt="GitHub"
                    />
                  </a>
                )}
              </div>
              <p
                className="black pv2 ph3 mt0"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={member.description}
              />
            </div>
          ))}
      </div>
      <div className="fl w-100 w-50-l ph4-ns ph3 pt4-l">
        {teamMembers
          .filter((member, index) => index % 2 !== 0)
          .map((member, index) => (
            <div
              className="bg-white br2 shadow-4 pv3 center mb3 mb5-l"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={{
                minHeight: '440px',
              }}
            >
              <img className="w4" src={member.image} alt={member.name} />
              <p className="f3-ns f4 mt0 mb1 black">{member.name}</p>
              <p className="mt1 mb2 silver">{member.title}</p>
              <div>
                {member.twitterLink && (
                  <a
                    className="dim"
                    href={member.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w1 pr2"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTAuMTU1IDQxMC4xNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4xNTUgNDEwLjE1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM3NkE5RUE7IiBkPSJNNDAzLjYzMiw3NC4xOGMtOS4xMTMsNC4wNDEtMTguNTczLDcuMjI5LTI4LjI4LDkuNTM3YzEwLjY5Ni0xMC4xNjQsMTguNzM4LTIyLjg3NywyMy4yNzUtMzcuMDY3ICBsMCwwYzEuMjk1LTQuMDUxLTMuMTA1LTcuNTU0LTYuNzYzLTUuMzg1bDAsMGMtMTMuNTA0LDguMDEtMjguMDUsMTQuMDE5LTQzLjIzNSwxNy44NjJjLTAuODgxLDAuMjIzLTEuNzksMC4zMzYtMi43MDIsMC4zMzYgIGMtMi43NjYsMC01LjQ1NS0xLjAyNy03LjU3LTIuODkxYy0xNi4xNTYtMTQuMjM5LTM2LjkzNS0yMi4wODEtNTguNTA4LTIyLjA4MWMtOS4zMzUsMC0xOC43NiwxLjQ1NS0yOC4wMTQsNC4zMjUgIGMtMjguNjcyLDguODkzLTUwLjc5NSwzMi41NDQtNTcuNzM2LDYxLjcyNGMtMi42MDQsMTAuOTQ1LTMuMzA5LDIxLjktMi4wOTcsMzIuNTZjMC4xMzksMS4yMjUtMC40NCwyLjA4LTAuNzk3LDIuNDgxICBjLTAuNjI3LDAuNzAzLTEuNTE2LDEuMTA2LTIuNDM5LDEuMTA2Yy0wLjEwMywwLTAuMjA5LTAuMDA1LTAuMzE0LTAuMDE1Yy02Mi43NjItNS44MzEtMTE5LjM1OC0zNi4wNjgtMTU5LjM2My04NS4xNGwwLDAgIGMtMi4wNC0yLjUwMy01Ljk1Mi0yLjE5Ni03LjU3OCwwLjU5M2wwLDBDMTMuNjc3LDY1LjU2NSw5LjUzNyw4MC45MzcsOS41MzcsOTYuNTc5YzAsMjMuOTcyLDkuNjMxLDQ2LjU2MywyNi4zNiw2My4wMzIgIGMtNy4wMzUtMS42NjgtMTMuODQ0LTQuMjk1LTIwLjE2OS03LjgwOGwwLDBjLTMuMDYtMS43LTYuODI1LDAuNDg1LTYuODY4LDMuOTg1bDAsMGMtMC40MzgsMzUuNjEyLDIwLjQxMiw2Ny4zLDUxLjY0Niw4MS41NjkgIGMtMC42MjksMC4wMTUtMS4yNTgsMC4wMjItMS44ODgsMC4wMjJjLTQuOTUxLDAtOS45NjQtMC40NzgtMTQuODk4LTEuNDIxbDAsMGMtMy40NDYtMC42NTgtNi4zNDEsMi42MTEtNS4yNzEsNS45NTJsMCwwICBjMTAuMTM4LDMxLjY1MSwzNy4zOSw1NC45ODEsNzAuMDAyLDYwLjI3OGMtMjcuMDY2LDE4LjE2OS01OC41ODUsMjcuNzUzLTkxLjM5LDI3Ljc1M2wtMTAuMjI3LTAuMDA2ICBjLTMuMTUxLDAtNS44MTYsMi4wNTQtNi42MTksNS4xMDZjLTAuNzkxLDMuMDA2LDAuNjY2LDYuMTc3LDMuMzUzLDcuNzRjMzYuOTY2LDIxLjUxMyw3OS4xMzEsMzIuODgzLDEyMS45NTUsMzIuODgzICBjMzcuNDg1LDAsNzIuNTQ5LTcuNDM5LDEwNC4yMTktMjIuMTA5YzI5LjAzMy0xMy40NDksNTQuNjg5LTMyLjY3NCw3Ni4yNTUtNTcuMTQxYzIwLjA5LTIyLjc5MiwzNS44LTQ5LjEwMyw0Ni42OTItNzguMjAxICBjMTAuMzgzLTI3LjczNywxNS44NzEtNTcuMzMzLDE1Ljg3MS04NS41ODl2LTEuMzQ2Yy0wLjAwMS00LjUzNywyLjA1MS04LjgwNiw1LjYzMS0xMS43MTJjMTMuNTg1LTExLjAzLDI1LjQxNS0yNC4wMTQsMzUuMTYtMzguNTkxICBsMCwwQzQxMS45MjQsNzcuMTI2LDQwNy44NjYsNzIuMzAyLDQwMy42MzIsNzQuMThMNDAzLjYzMiw3NC4xOHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                      alt="Twitter"
                    />
                  </a>
                )}
                <a
                  className="dim"
                  href={member.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={`w1 ${member.githubLink ? 'pr2' : ''}`}
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzODIgMzgyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODIgMzgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzAwNzdCNzsiIGQ9Ik0zNDcuNDQ1LDBIMzQuNTU1QzE1LjQ3MSwwLDAsMTUuNDcxLDAsMzQuNTU1djMxMi44ODlDMCwzNjYuNTI5LDE1LjQ3MSwzODIsMzQuNTU1LDM4MmgzMTIuODg5ICBDMzY2LjUyOSwzODIsMzgyLDM2Ni41MjksMzgyLDM0Ny40NDRWMzQuNTU1QzM4MiwxNS40NzEsMzY2LjUyOSwwLDM0Ny40NDUsMHogTTExOC4yMDcsMzI5Ljg0NGMwLDUuNTU0LTQuNTAyLDEwLjA1Ni0xMC4wNTYsMTAuMDU2ICBINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYgIGM1LjU1NCwwLDEwLjA1Niw0LjUwMiwxMC4wNTYsMTAuMDU2VjMyOS44NDR6IE04Ni43NDgsMTIzLjQzMmMtMjIuNDU5LDAtNDAuNjY2LTE4LjIwNy00MC42NjYtNDAuNjY2UzY0LjI4OSw0Mi4xLDg2Ljc0OCw0Mi4xICBzNDAuNjY2LDE4LjIwNyw0MC42NjYsNDAuNjY2UzEwOS4yMDgsMTIzLjQzMiw4Ni43NDgsMTIzLjQzMnogTTM0MS45MSwzMzAuNjU0YzAsNS4xMDYtNC4xNCw5LjI0Ni05LjI0Niw5LjI0NkgyODYuNzMgIGMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OSAgYzAsNS4xMDYtNC4xMzksOS4yNDYtOS4yNDYsOS4yNDZoLTQ0LjQyNmMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2VjE0OS41OTNjMC01LjEwNiw0LjE0LTkuMjQ2LDkuMjQ2LTkuMjQ2aDQ0LjQyNiAgYzUuMTA2LDAsOS4yNDYsNC4xNCw5LjI0Niw5LjI0NnYxNS42NTVjMTAuNDk3LTE1Ljc1MywyNi4wOTctMjcuOTEyLDU5LjMxMi0yNy45MTJjNzMuNTUyLDAsNzMuMTMxLDY4LjcxNiw3My4xMzEsMTA2LjQ3MiAgTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    alt="Linkedin"
                  />
                </a>
                {member.githubLink && (
                  <a
                    className="dim"
                    href={member.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w1"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDM4LjUzNiA0MzguNTM2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzguNTM2IDQzOC41MzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU4LjE3MywzNTIuNTk5Yy0zLjA0OSwwLjU2OC00LjM4MSwxLjk5OS0zLjk5OSw0LjI4MWMwLjM4LDIuMjgzLDIuMDkzLDMuMDQ2LDUuMTM4LDIuMjgzICAgIGMzLjA0OS0wLjc2LDQuMzgtMi4wOTUsMy45OTctMy45OTdDMTYyLjkzMSwzNTMuMDc0LDE2MS4yMTgsMzUyLjIxNiwxNTguMTczLDM1Mi41OTl6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTE0MS44OTgsMzU0Ljg4NWMtMy4wNDYsMC00LjU2OCwxLjA0MS00LjU2OCwzLjEzOWMwLDIuNDc0LDEuNjE5LDMuNTE4LDQuODUzLDMuMTM4YzMuMDQ2LDAsNC41Ny0xLjA0Nyw0LjU3LTMuMTM4ICAgIEMxNDYuNzUzLDM1NS41NTMsMTQ1LjEzNCwzNTQuNTAyLDE0MS44OTgsMzU0Ljg4NXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMTE5LjYyOSwzNTQuMDIyYy0wLjc2LDIuMDk1LDAuNDc4LDMuNTE5LDMuNzExLDQuMjg0YzIuODU1LDEuMTM3LDQuNjY0LDAuNTY4LDUuNDI0LTEuNzE0ICAgIGMwLjU3Mi0yLjA5MS0wLjY2Ni0zLjYxLTMuNzExLTQuNTY4QzEyMi4xOTcsMzUxLjI2NSwxMjAuMzksMzUxLjkyMiwxMTkuNjI5LDM1NC4wMjJ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMyNiw4LjA0MiwzNzguOTY0LDAsMzU2LjMwOSwwSDgyLjIyNUM1OS41NzcsMCw0MC4yMDgsOC4wNDIsMjQuMTIzLDI0LjEyMyAgICBDOC4wNDIsNDAuMjA3LDAsNTkuNTc2LDAsODIuMjI1djI3NC4wODhjMCwyMi42NSw4LjA0Miw0Mi4wMTcsMjQuMTIzLDU4LjA5OGMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNmg2My45NTMgICAgYzQuMTg0LDAsNy4zMjctMC4xNDQsOS40Mi0wLjQyNGMyLjA5Mi0wLjI4OCw0LjE4NC0xLjUyNiw2LjI3OS0zLjcxN2MyLjA5Ni0yLjE4NywzLjE0LTUuMzc2LDMuMTQtOS41NjIgICAgYzAtMC41NjgtMC4wNS03LjA0Ni0wLjE0NC0xOS40MTdjLTAuMDk3LTEyLjM3NS0wLjE0NC0yMi4xNzYtMC4xNDQtMjkuNDFsLTYuNTY3LDEuMTQzYy00LjE4NywwLjc2LTkuNDY5LDEuMDk1LTE1Ljg0NiwwLjk5OSAgICBjLTYuMzc0LTAuMDk2LTEyLjk5LTAuNzYtMTkuODQxLTEuOTk4Yy02Ljg1NS0xLjIzOS0xMy4yMjktNC4wOTMtMTkuMTMtOC41NjJjLTUuODk4LTQuNDc3LTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU5ICAgIGwtMi44NTYtNi41NzFjLTEuOTAzLTQuMzczLTQuODk5LTkuMjI5LTguOTkyLTE0LjU1NGMtNC4wOTMtNS4zMzItOC4yMzItOC45NDktMTIuNDE5LTEwLjg1MmwtMS45OTktMS40MjggICAgYy0xLjMzMS0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDEtMS4zMzUtMS45OTctMi42NjktMi41NjgtMy45OTdjLTAuNTcxLTEuMzM1LTAuMDk3LTIuNDMsMS40MjctMy4yODkgICAgYzEuNTI0LTAuODU1LDQuMjgxLTEuMjc5LDguMjgtMS4yNzlsNS43MDgsMC44NTVjMy44MDgsMC43Niw4LjUxNiwzLjA0MiwxNC4xMzQsNi44NTFjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDMgICAgYzQuMzgsNy44MDYsOS42NTcsMTMuNzUsMTUuODQ2LDE3Ljg0M2M2LjE4NCw0LjA5NywxMi40MTksNi4xNDMsMTguNjk5LDYuMTQzczExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjQgICAgYzQuNTY1LTAuOTU0LDguODQ4LTIuMzg1LDEyLjg0Ny00LjI4OGMxLjcxMy0xMi43NTEsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MWMtMTAuODQ4LTEuMTQzLTIwLjYwMi0yLjg1NC0yOS4yNjUtNS4xNCAgICBjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5NS0yNi44MzUtMTEuMTM2Yy05LjIzNC01LjE0LTE2Ljg5NC0xMS41MTItMjIuOTg1LTE5LjEzYy02LjA5LTcuNjE4LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc4ICAgIGMtMy45MDEtMTIuMzc1LTUuODUyLTI2LjY1Mi01Ljg1Mi00Mi44MjljMC0yMy4wMjksNy41MjEtNDIuNjM3LDIyLjU1Ny01OC44MTRjLTcuMDQ0LTE3LjMyLTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNDIgICAgYzUuNTItMS43MTQsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1NWMxMC44NSw0LjI4NiwxOC43OTQsNy45NTEsMjMuODQsMTAuOTkyYzUuMDQ2LDMuMDQyLDkuMDg5LDUuNjE0LDEyLjEzNSw3LjcxICAgIGMxNy43MDUtNC45NDksMzUuOTc2LTcuNDIzLDU0LjgxOC03LjQyM2MxOC44NDEsMCwzNy4xMTUsMi40NzQsNTQuODIxLDcuNDIzbDEwLjg0OS02Ljg1MmM3LjQyNi00LjU3LDE2LjE4LTguNzU3LDI2LjI2OS0xMi41NjIgICAgYzEwLjA4OC0zLjgwNiwxNy43OTUtNC44NTQsMjMuMTI3LTMuMTRjOC41NjIsMjEuNTEsOS4zMjgsNDAuOTIyLDIuMjc5LDU4LjI0MWMxNS4wMzYsMTYuMTc5LDIyLjU1OSwzNS43ODYsMjIuNTU5LDU4LjgxNSAgICBjMCwxNi4xOC0xLjk1MSwzMC41MDUtNS44NTIsNDIuOTY5Yy0zLjg5OCwxMi40NjctOC45MzksMjIuNDYzLTE1LjEzLDI5Ljk4MWMtNi4xODQsNy41MTktMTMuODk0LDEzLjg0My0yMy4xMjQsMTguOTg2ICAgIGMtOS4yMzIsNS4xMzctMTguMTc4LDguODUzLTI2Ljg0LDExLjEzMmMtOC42NjEsMi4yODYtMTguNDE0LDQuMDA0LTI5LjI2Myw1LjE0N2M5Ljg5MSw4LjU2MiwxNC44MzksMjIuMDcyLDE0LjgzOSw0MC41Mzh2NjguMjM4ICAgIGMwLDMuMjM3LDAuNDcyLDUuODUyLDEuNDI0LDcuODUxYzAuOTU4LDEuOTk4LDIuNDc4LDMuMzc0LDQuNTcxLDQuMTQxYzIuMTAyLDAuNzYsMy45NDksMS4yMzUsNS41NzEsMS40MjQgICAgYzEuNjIyLDAuMTkxLDMuOTQ5LDAuMjg3LDYuOTk1LDAuMjg3aDYzLjk1M2MyMi42NDgsMCw0Mi4wMTgtOC4wNDIsNTguMDk1LTI0LjEyNmMxNi4wODQtMTYuMDg0LDI0LjEyNi0zNS40NTQsMjQuMTI2LTU4LjEwMiAgICBWODIuMjI1QzQzOC41MzMsNTkuNTc2LDQzMC40OTEsNDAuMjA0LDQxNC40MSwyNC4xMjN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTg2Ljc5MywzMTkuMTk1Yy0xLjMzMSwwLjk0OC0xLjE0MSwyLjQ3MSwwLjU3Miw0LjU2NWMxLjkwNiwxLjkwMiwzLjQyNywyLjE4OSw0LjU3LDAuODU1ICAgIGMxLjMzMS0wLjk0OCwxLjE0MS0yLjQ3MS0wLjU3NS00LjU2OUM4OS40NTgsMzE4LjMzNiw4Ny45MzYsMzE4LjA0OSw4Ni43OTMsMzE5LjE5NXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNzcuMzc0LDMxMi4wNTdjLTAuNTcsMS4zMzUsMC4wOTYsMi40NzgsMS45OTksMy40MjZjMS41MjEsMC45NTUsMi43NjIsMC43NjcsMy43MTEtMC41NjggICAgYzAuNTctMS4zMzUtMC4wOTYtMi40NzgtMS45OTktMy40MzNDNzkuMTgyLDMxMC45MSw3Ny45NDUsMzExLjEwMiw3Ny4zNzQsMzEyLjA1N3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNOTUuNjQ2LDMzMC4zMzFjLTEuNzE1LDAuOTQ4LTEuNzE1LDIuNjY2LDAsNS4xMzdjMS43MTMsMi40NzgsMy4zMjgsMy4xNDIsNC44NTMsMS45OThjMS43MTQtMS4zMzQsMS43MTQtMy4xNDIsMC01LjQyNyAgICBDOTguOTc4LDMyOS41NzEsOTcuMzU5LDMyOC45OTMsOTUuNjQ2LDMzMC4zMzF6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTEwNS42NDEsMzQzLjE3NGMtMS43MTQsMS41MjYtMS4zMzYsMy4zMjcsMS4xNDIsNS40MjhjMi4yODEsMi4yNzksNC4xODUsMi41NjYsNS43MDgsMC44NDkgICAgYzEuNTI0LTEuNTE5LDEuMTQzLTMuMzI2LTEuMTQyLTUuNDJDMTA5LjA2OCwzNDEuNzUxLDEwNy4xNjQsMzQxLjQ2MywxMDUuNjQxLDM0My4xNzR6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                      alt="GitHub"
                    />
                  </a>
                )}
              </div>
              <p
                className="black pv2 ph3 mt0"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={member.description}
              />
            </div>
          ))}
      </div>
    </div>
  </section>
);
