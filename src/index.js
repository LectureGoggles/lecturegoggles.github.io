/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavBar from './components/navBar/navBar';
import GridBody from './components/gridBody';
import LectureGogglesLogo from './components/logo/logo';
import ZackImage from './images/zack.png';
import DascaluImage from './images/dascalu.jpg';
import DevrinImage from './images/devrin.jpg';
import PersonCard from './components/personCard/personCard';

const EmptyDiv = styled.div`
  grid-column: 1 / span 3;
`;

const ContentDiv = styled.div`
  grid-column: 2;
  text-align: center;
  border-bottom: 1px solid #efefef;
  width: 100%;
`;

const BlueTextContentDiv = styled(ContentDiv)`
  color: #0d47a1;
`;

const TeamDiv = styled.div`
  grid-column: 2;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const InstructorDiv = styled.div`
  grid-column: 2;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AdvisorDiv = styled.div`
  grid-column: 2;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const App = () => (
  <GridBody>
    <EmptyDiv />
    <NavBar />
    <BlueTextContentDiv id="home">
      <h1>Lecture Goggles</h1>
      <h2>CS 426 - Senior Projects in Computer Science</h2>
      <h2>Spring 2019</h2>
      <LectureGogglesLogo width={200} height={200} />
      <h2>Team 22 - Lecture Goggles</h2>
      <h2>University of Nevada, Reno</h2>
      <h2>Department of Computer Science and Engineering</h2>
    </BlueTextContentDiv>
    <ContentDiv id="video">
      <h1>Video</h1>
      <h2>Coming soon...</h2>
      <br />
    </ContentDiv>
    <ContentDiv id="team">
      <h1>Team</h1>
      <TeamDiv>
        <PersonCard name="Zachary Johnson" imageSrc={ZackImage} />
        <PersonCard name="Logan Long" />
        <PersonCard name="Nathan Yocum" />
      </TeamDiv>
      <h2>Instructors</h2>
      <InstructorDiv>
        <PersonCard name="Sergieu Dascalu" imageSrc={DascaluImage} />
        <PersonCard name="Devrin Lee" imageSrc={DevrinImage} />
      </InstructorDiv>
      <h2>Advisor</h2>
      <AdvisorDiv>
        <PersonCard name="Shamik Sengupta" />
      </AdvisorDiv>
    </ContentDiv>
    <ContentDiv id="description">
      <h1>Description</h1>
      <p>
        Lecture Goggles is a free, open-source, educational resource repository to help students gain a better
        understanding of school subjects.
      </p>
    </ContentDiv>
    <ContentDiv id="resources">
      <h1>Resources</h1>
      <p>Coming soon...</p>
    </ContentDiv>
    <ContentDiv>
      <a href="https://github.com/LectureGoggles">
        <img src="GitHub-Mark-64px.png" alt="github logo" />
      </a>
    </ContentDiv>
  </GridBody>
);

ReactDOM.render(<App />, document.getElementById('root'));
