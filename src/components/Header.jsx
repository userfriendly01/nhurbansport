import React, { useState } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import Leagues from '../pages/Leagues.jsx';
import About from './About.jsx';
import styled from 'styled-components';
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'

const Header = () => {

    const StyledNavBar = styled.div`
        display: flex;
        white-space: nowrap;
        font-size: 16px;
        color: #A9A9A9;
        align-items: center;
        background-color: #D8D8D8;
    `
    const NavHeader = styled.div`
        margin-right: auto;
        font-size: 20px;
    `

    const StyledDropdownToggle = styled(DropdownToggle)`
        color: #696969;
        padding: 5px 5px;
        &:hover {
            color: #16181b;
            text-decoration: none;
        }
    `;

    const StyledLink = styled(Link)`
        display: block;    
        padding: 5px 10px;
        color:  #696969;
        &:hover {
            color: #16181b;
            text-decoration: none;
            
        }
    `;

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const aboutLink = {
        pathname: '/',
        search: '',
        hash: '#about' ,
        state: {}
    }

    return (
        <Router>
            <StyledNavBar expand="md">
                <UncontrolledDropdown isOpen={isOpen1} onMouseEnter={() => setIsOpen1(true)} onMouseLeave={() => setIsOpen1(false)}>
                    <StyledDropdownToggle nav>
                        <StyledLink to="/">NH Urban Sport</StyledLink>
                    </StyledDropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <StyledLink to={aboutLink}>About</StyledLink>
                        </DropdownItem>
                        <DropdownItem> 
                            <StyledLink to="/">Contact</StyledLink>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown isOpen={isOpen2} onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)}>
                    <StyledDropdownToggle nav>
                        <StyledLink to="/leagues">Sports Leagues</StyledLink>
                    </StyledDropdownToggle>
                    <DropdownMenu>
                        <DropdownItem><StyledLink to="/">FAQ</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">Liability Waiver</StyledLink></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown isOpen={isOpen3} onMouseEnter={() => setIsOpen3(true)} onMouseLeave={() => setIsOpen3(false)}>
                    <StyledDropdownToggle nav>
                        <StyledLink to="/about">Player Portal</StyledLink>
                    </StyledDropdownToggle>
                    <DropdownMenu>
                        <DropdownItem><StyledLink to="/">Log In</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">How To</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">Schedules</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">Rule Books</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">Roster</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">League Standings</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">League Leader</StyledLink></DropdownItem>
                        <DropdownItem><StyledLink to="/">How Can We Improve?</StyledLink></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <StyledLink to="/">Social Events</StyledLink>
                <StyledLink to="/">Veterans</StyledLink>  
                <StyledLink to="/">Corporate Sponsors</StyledLink>
            </StyledNavBar>
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route path = "/about" component={Home} />
                <Route path = "/leagues" component={Leagues} />
                <Route path = "/*" component={Home} />
            </Switch>
        </Router>
    );
};

export default Header;