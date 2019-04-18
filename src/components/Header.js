import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import styled from 'styled-components';
import {UncontrolledDropdown, DropdownToggle, DropdownItem, 
    NavbarToggler, DropdownMenu, Navbar, Nav, Collapse, 
    NavbarBrand} from 'reactstrap'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        const StyledNavItem = styled.nav`
            font-size: 10px;
            padding: 10px;
            font-size: 15px;
            color: #737373;
        `;
        
        return (
            <Router>
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand><Link to="/">NH Urban Sport</Link></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            NH Urban Sport
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to="/about">About</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    Contact
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Sports Leagues
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    FAQ
                                </DropdownItem>
                                <DropdownItem>
                                    Liability Waiver
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Player Portal
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Log In
                                </DropdownItem>
                                <DropdownItem>
                                    How To
                                </DropdownItem>
                                <DropdownItem>
                                    Schedules
                                </DropdownItem>
                                <DropdownItem>
                                    Rule Books
                                </DropdownItem>
                                <DropdownItem>
                                    Roster
                                </DropdownItem>
                                <DropdownItem>
                                    League Standings
                                </DropdownItem>
                                <DropdownItem>
                                    League Leader
                                </DropdownItem>
                                <DropdownItem>
                                    How Can We Improve?
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <StyledNavItem>
                            Social Events
                        </StyledNavItem>
                        <StyledNavItem>
                            Veterans
                        </StyledNavItem>
                        <StyledNavItem>
                            Corporate Sponsors
                        </StyledNavItem>
                        <StyledNavItem>
                            News
                        </StyledNavItem>
                    </Nav>
                </Collapse>
                </Navbar>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route path = "/about" component={About} />
                </Switch>
            </div>
            </Router>
        );
    }

}

export default Header;
