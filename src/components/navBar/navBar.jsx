import React from 'react';
import styled from 'styled-components';

const NavBarStyle = styled.nav`
  background-color: #0074d9;
  width: 100%;
  height: 56px;
  position: fixed;
  grid-column: 1 / span 3;
  color: #ffffff;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0px;
  align-items: center;
  justify-items: baseline;
`;

const NavItemBase = styled.li`
  padding-left: 10px;
  padding-right: 10px;
`;

const NavItem = styled(NavItemBase)`
  font-size: 14px;
`;

const TitleItem = styled(NavItemBase)`
  flex-grow: 1;
  font-size: 24px;
`;

const NavBarA = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.getWindowWidth = this.getWindowWidth.bind(this);
  }

  componentDidMount() {
    this.getWindowWidth();
    window.addEventListener('resize', this.getWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowWidth);
  }

  getWindowWidth() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    return (
      <NavBarStyle>
        <NavList>
          <TitleItem>
            <NavBarA href="#home">Lecture Goggles</NavBarA>
          </TitleItem>
          {width > 600 && (
            <>
              <NavBarA href="#video">
                <NavItem>Video</NavItem>
              </NavBarA>
              <NavBarA href="#team">
                <NavItem>Team</NavItem>
              </NavBarA>
              <NavBarA href="#description">
                <NavItem>Description</NavItem>
              </NavBarA>
              <NavBarA href="#resources">
                <NavItem>Resources</NavItem>
              </NavBarA>
            </>
          )}
        </NavList>
      </NavBarStyle>
    );
  }
}

export default NavBar;
