/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavBar from './components/navBar/navBar';
import GridBody from './components/gridBody';
import LectureGogglesLogo from './components/logo/logo';

const EmptyDiv = styled.div`
  grid-column: 1 / span 3;
`;

const ContentDiv = styled.div`
  margin-top: 3px;
  grid-column: 2;
  color: #0d47a1;
  text-align: center;
`;

const App = () => (
  <GridBody>
    <EmptyDiv />
    <NavBar />
    <ContentDiv>
      <LectureGogglesLogo width={200} height={200} />
      <h1>Coming soon...</h1>
    </ContentDiv>
    <ContentDiv>
      <a href="https://github.com/LectureGoggles">
        <img src="GitHub-Mark-64px.png" alt="github logo" />
      </a>
    </ContentDiv>
  </GridBody>
);

ReactDOM.render(<App />, document.getElementById('root'));
