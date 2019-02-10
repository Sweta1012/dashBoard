import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Student.css';

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardImgOverlay, ListGroup, ListGroupItem, Table, Button, Progress
} from 'reactstrap';


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

                <div>
                    <Row className="bgImage">
                        <Col xs="4" className="user">
                            <Card body outline color="info" className="scale">
                               
                                <img width="100%" src="https://i1.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1" alt="Profile Picture" />
                                <CardBody className="bgColor scale">
                                    <CardTitle className="userInfo">Sweta Patel</CardTitle>
                                    <CardLink className="userInfo" href="#">LinkedIn</CardLink>
                                    <CardLink className="userInfo" href="#">Github</CardLink>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="6">
                            <Row className="batchRow">
                                <ListGroup className="batchGroup">
                                    <ListGroupItem className="batchItem" color="info">React Trainning Batch</ListGroupItem>
                                </ListGroup>

                            </Row>
                            <Row>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="userInfo">Courses</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="userInfo">1</th>
                                            <td>HTML <Progress color="success" value="100">You did it!</Progress></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="userInfo">2</th>
                                            <td>CSS <Progress color="info" value="88">WOW!</Progress></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="userInfo">3</th>
                                            <td>BOOTSTRAP <Progress color="warning" value="65">Cool!!</Progress></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="userInfo">4</th>
                                            <td>JAVASCRIPT<Progress color="danger" value="75">Almost there!</Progress></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="userInfo">5</th>
                                            <td>REACT <Progress value="22">Starting Soon!</Progress></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                            <Row className="testRow">
                                {/* <Card body outline color="black" className="testCard">
                                    <CardTitle className="cardTitle">Take the test to attend the next Batch!!</CardTitle>
                                    <Button className="cardButton" color="secondary">Go To Test</Button>
                                </Card> */}
                                
                                <ListGroup className="batchGroup">
                                    <ListGroupItem className="batchItem" color="info">Go to the Test to attend the next batch!!</ListGroupItem>
                                    <a className="goTest" href="#">Go to Test -></a>
                                </ListGroup>
                     
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ListGroupItem className="footer">CopyRight   @Protek   Consulting</ListGroupItem>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Student;