import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Wrapper, DisplayCard } from "../components"
import { routes } from "../util/Routes.jsx"
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;    
  padding: 5px 10px;
  color:  #696969;
  &:hover {
      color: #16181b;
      text-decoration: none;
  }
`;

const StyledHeader = styled(Wrapper)`
  z-index: 3;
  height: 40;
  width: 760;
  &:hover {
    cursor: pointer;
}
`
const DropdownWrapper = styled(Wrapper)`
  display: block;    
  padding: 5px 10px;
  width: 135;
  color:  #696969;
  &:hover {
      color: #16181b;
      text-decoration: none;
  }
`;

const DropdownHeader = styled(Link)`
  display: block;
  width: 120; 
  color:  #696969;
  margin: 0 0 5 0;
  text-align: center;
  &:hover {
      color: #16181b;
      text-decoration: none;
  }
`;

const DropdownDisplayCard = styled(DisplayCard)`
  display: block;
  width: 150%;
  margin: 0;
  padding: 0;
  &:hover {
    color: pink;
}
`
const DropdownEntry = styled(Link)`
  display: block;    
  margin: 0 0 0 15;
  padding: 12;
  color:  #696969;
  &:hover {
    color: #16181b;
    text-decoration: none;
  }
`;

const Header = () => {
  const [home, setHome] = useState(false);
  const [league, setLeague] = useState(false);

  return (
    <Router>
      <StyledHeader>
        <DropdownWrapper
          onMouseEnter={() => setHome(true)}
          onMouseLeave={() => setHome(false)}
          >
          <DropdownHeader to="/">NH Urban Sport</DropdownHeader>
          {home ?
            <DropdownDisplayCard direction="column">
              <DropdownEntry to="/about">About</DropdownEntry>
              <DropdownEntry to="/contact">Contact</DropdownEntry>
            </DropdownDisplayCard>
            : null
          }
        </DropdownWrapper>
        <Wrapper>
        <DropdownWrapper direction="column"
              onMouseEnter={() => setLeague(true)}
              onMouseLeave={() => setLeague(false)}
          >
          <DropdownHeader to="/leagues">Sports Leagues</DropdownHeader>
          {league ?
            <DropdownDisplayCard direction="column">
              <DropdownEntry to="/liability">Liability Waiver</DropdownEntry>
            </DropdownDisplayCard>
            :
            null
          }
        </DropdownWrapper>
        <StyledLink to="/playerportal">Player Portal</StyledLink>
        <StyledLink to="/events">Social Events</StyledLink>
        <StyledLink to="/veterans">Veterans</StyledLink>
        <StyledLink to="/sponsors">Corporate Sponsors</StyledLink>
        </Wrapper>
      </StyledHeader>
      <Switch>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
                render={route.render}
            />
        ))}
      </Switch>
    </Router>
  )
}

export default Header;
