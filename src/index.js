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
        Lecture Goggles is a web application that is built to store and share helpful resources. Resources can be HTTPS
        links or files provided by students or teachers. This will be limit file sizes to an appropriate size which has
        not been determined yet. To provide a safe environment for all users, each link will be checked for malicious
        content or inappropriate HTTPS forwards. The first implementation will limit resource contribution to authorized
        college students and college professor accounts. To authorize accounts, the application will use third-party
        SheerID software to get access to 180+ million student verified email addresses from the US and around the
        world.
      </p>
      <p>
        The UI design behind Lecture Goggles is an expanding tree method. By using this method of design Lecture Goggles
        can continue to grow with little administration interaction. As users add new subjects and resources to the
        website, the website will grow to contain all academic subjects needed. Each resource link will afford a system
        to upvote and downvote. As demonstrated in websites like reddit.com, this seems highly successful at increasing
        visibility to useful additions.
      </p>
      <p>
        Due to the size, scope, and dynamic capability of Lecture Goggles, there will need to be a web server to
        communicate with each users’ requests. Django is a web framework that can be used as an intermediary between the
        user requests and database. Although Django can also be the web server for Lecture Goggles, for easier
        deployment and scalability Team 22 will be using Apache Web Servers to contain Django.
      </p>
      <p>
        To contain and organize all the user account data, provided resources, and any other necessary data, a database
        will be needed. MongoDB, which is classified as a NoSQL database program, was previously going to be used for
        initial implementation. Because Django does not support NoSQL out of the box, our group will need to use a
        PostgreSQL database instead. Django web framework will access the database directly when user requests are
        received then communicate pertinent information back to the user.
      </p>
      <p>
        The project will run with multiple servers communicating to provide separation between the project. Firstly,
        there will be a web server to communicate with the https requests sent from individuals on the web. The web
        server will also send requests to the API server to provide dynamic webpage interaction with the user. The API
        server is the second server in the chain, communicating with both the web server and the database server.
        Lastly, the database server will communicate directly to and only to the API server. Each of these servers will
        be running with an Ubuntu operating system using Azure server hosting. Originally the servers were going to use
        Windows 10 as the operating system, this was changed to reduce the cost of Azure hosting. Using Ubuntu on Azure
        is approximately 7 cents an hour.
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
