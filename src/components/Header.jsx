import React, { useState } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import Leagues from '../pages/Leagues.jsx';
import styled from 'styled-components';
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'
import LiabilityWaiver from '../pages/LiabilityWaiver.jsx';
import SocialEvents from '../pages/SocialEvents.jsx';

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
                        <DropdownItem><StyledLink to="/liability">Liability Waiver</StyledLink></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <StyledLink to="/">Player Portal</StyledLink>
                <StyledLink to="/events">Social Events</StyledLink>
                <StyledLink to="/">Veterans</StyledLink>  
                <StyledLink to="/">Corporate Sponsors</StyledLink>
            </StyledNavBar>
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route path = "/about" component={Home} />
                <Route path = "/leagues" component={Leagues} />
                <Route path = "/liability" component={LiabilityWaiver} />
                <Route path = "/events" component={SocialEvents} />
                <Route path = "/*" component={Home} />
            </Switch>
        </Router>
    );
};

export default Header;