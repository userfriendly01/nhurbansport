import React, { useState } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import styled from 'styled-components';
import {UncontrolledDropdown, DropdownToggle, DropdownItem, 
    DropdownMenu, Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap'

const Header = () => {

    const StyledNavBar = styled(Navbar)`
        font-size: 20px;
        display: flex;
        color: black;
        
    `
    const StyledNavItem = styled(NavItem)`
        display: block;
        font-size: 10px;
        padding-right: 0.5px;
        padding-left: 0.5px;
        font-size: 15px;
        color: #737373;
        &:hover {
            color: rgba(0, 0, 0, 0.7);
        }
    `;

    const StyledLink = styled(Link)`
        padding: 5px;
        color: #16181b;
        &:hover {
            color: #16181b;
            text-decoration: none;
        }
    `;

    return (
        <Router>
            <StyledNavBar color="light" light expand="md">
                <NavbarBrand href="/">NH Urban Sport</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>
                            NH Urban Sport
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <StyledLink to="/about">About</StyledLink>
                            </DropdownItem>
                            <DropdownItem> Contact </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Sports Leagues
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem> FAQ </DropdownItem>
                            <DropdownItem> Liability Waiver </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown >
                        <DropdownToggle nav caret>
                            Player Portal
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem> Log In </DropdownItem>
                            <DropdownItem> How To </DropdownItem>
                            <DropdownItem> Schedules </DropdownItem>
                            <DropdownItem> Rule Books </DropdownItem>
                            <DropdownItem> Roster </DropdownItem>
                            <DropdownItem> League Standings </DropdownItem>
                            <DropdownItem> League Leader </DropdownItem>
                            <DropdownItem> How Can We Improve? </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <StyledLink to="/">Social Events</StyledLink>
                    <StyledLink to="/">Veterans</StyledLink>                    
                    <StyledLink to="/">Corporate Sponsors</StyledLink>     
                </Nav>
            </StyledNavBar>
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route path = "/about" component={About} />
            </Switch>
        </Router>
    );
};

export default Header;