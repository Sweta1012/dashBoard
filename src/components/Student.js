import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class Student extends Component {
      
    constructor(props) {
          super(props);
      
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
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Welcome to your Dashboard</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Logout</NavLink>
                            </NavItem>
                           
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                         Your Profile
                                     </DropdownItem>
                                    <DropdownItem>
                                         Notifications
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Logout
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

export default Student;