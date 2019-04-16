import React from 'react'
import {UncontrolledDropdown, DropdownToggle, DropdownItem, 
    NavbarToggler, NavLink, DropdownMenu, Navbar, Nav, Collapse, 
    NavItem, NavbarBrand} from 'reactstrap'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            view: "<App />"
        };
        this.toggle = this.toggle.bind(this);
        this.updateView = this.updateView.bind(this);
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateView(e){
        e.preventDefault();
        const { view } = this.state;
        const { updateView } = this.props;
    }

    render(){
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">NH Urban Sport</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                <NavItem>NH Urban Sport</NavItem>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink href ='/pages/About.js'>About</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href ='/'>Contact</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }

}

export default Header;
