import React from 'react';
import styled from 'styled-components';
import {
  Eltcard,
  Exchanges,
  Footer,
  Header,
  Hero,
  Meta,
  Roadmap,
  Team,
} from '../components';
import background from './images/background.png';
import './styles/index.css';

const AppContainer = styled.div`
  background: url(${background}) repeat-y center;
  min-height: calc(100vh - 200px);
`;

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

export default () => (
  <div>
    <Meta />
    <Header />
    <AppContainer className="cf">
      <Hero />
      <Exchanges />
      <Roadmap />
      <Eltcard />
      <Team />
    </AppContainer>
    <Footer />
  </div>
);
