import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Col, Row, Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import './register.css';

class Register extends Component {

  state = {
      firstName: '',
      lastName:'',
      email:'',
      contact:'',
      education:'',
      workStatus:'',
      Register: false
  }

  register = (event) => {
    event.preventDefault();

      let firstName = this.fname.value,
      lastName = this.lname.value,
      email = this.email.value,
      contact = this.contact.value,
      education = this.education.value,
      workStatus = this.otherStatus.value;

      console.log(this.fname);

      this.setState({
        firstName,
        lastName,
        email,
        contact,
        education,
        workStatus
      });
    
  }

 change = (event) => {
      let workStatus = event.target.value;
      this.setState({
        workStatus
      })
 }

    render() {

      return (

        <div>

           <div>
                  <div className="links">
                    <a href="#">Home</a>
                    <a href="#">Login</a>
                  </div>

                  
            
                <Container fluid>
                  <h1 className="display-3">Register With Us!!</h1>
                  <p className="lead">Fill out the form today to become the member of Protek World..</p>
                </Container>
          </div>
    
          <div className="bgImage">
                    <div className="container" id="registerForm">   
                        <Form>
                        <Row form>
                        <Col md={6}>
                            <FormGroup>
                              <Label for="fname">First Name</Label>
                              <Input type="text"  innerRef={(input) => { this.fname = input}} name="fname" id="fname" placeholder="First Name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="lname">Last Name</Label>
                            <Input type="text" innerRef={(input) => {this.lname = input}} name="lname" id="lname" placeholder="Last Name" />
                            </FormGroup>
                        </Col>
                        </Row>

                        <Row form>
                        <Col md={6}>
                              <FormGroup>
                              <Label for="email">Email</Label>
                              <Input type="email" innerRef={(input) => {this.email = input}} name="email" id="email" placeholder="Email Address"/>
                              </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                            <Label for="contact">Phone</Label>
                            <Input type="text" innerRef={(input) => {this.contact = input}} name="contact" id="contact" placeholder="Mobile Number"/>
                            </FormGroup>
                          </Col>
                          </Row>
                        <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="education">Education</Label>
                            <Input type="text" innerRef={(input) => {this.education = input}} name="education" id="education" placeholder="Highest Level of Education"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="workStatus">Work Status</Label>
                                <Input type="select" onChange={this.change} name="workStatus" id="workStatus">
                                    <option value="GC">GC</option>
                                    <option value="H1B">H1B</option>
                                    <option value="OPT">OPT</option>
                                    <option value="Other">Other</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row form>
                        <Col md={12}>
                            <FormGroup>
                            <Label for="otherStatus">please specify if other:</Label>
                            <Input type="text" id="otherStatus" name="otherStatus" placeholder="If other please specify" innerRef={(input) => {this.otherStatus = input}}/>

                            </FormGroup>  
                        </Col>
                        </Row>

                        <Button outline color="success" type="submit" id="register" name="register" onClick={this.register}>Register</Button>{' '}
                  </Form>
                    </div>
              <ul>
                      <li>Firstname: {this.state.firstName}</li>
                      <li>Lastname: {this.state.lastName}</li>
                      <li>Email: {this.state.email}</li>
                      <li>Contact: {this.state.contact}</li>
                      <li>Education: {this.state.education}</li>
                      <li>Work Status: {this.state.workStatus}</li>
              </ul>

    </div>
  </div>
      );
    }
  }
  
  export default Register;