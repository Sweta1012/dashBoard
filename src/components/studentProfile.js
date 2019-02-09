import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';
import { Input } from 'reactstrap';
import './studentProfile.css';


class StudentProfile extends Component {
    render() {
      return (
        <div>
                <div className="links">
                 
                        <Input type="select" name="Account" id="account" className="account">
                                    <option value="account">Account</option>
                                    <option value="Setting">Setting</option>
                                    <option value="PersonalInfo">Personal Information</option>
                                    <option value="ChangePsw">Change Password</option>
                         </Input>
                  
                    <a href="#">Logout</a>   
                </div>

                <div className="content">
                    <Media>
                        <img
                            className="mr-3"
                            src="http://images.clipartpanda.com/female-clipart-female-icon.jpg"
                            alt="img doesn't work :("
                        />
                        
                        <Media.Body className="info">
                            <ListGroup className="batch">
                                <ListGroup.Item variant="success">UI Trainning Batch</ListGroup.Item>
                            </ListGroup>
                             
                            <ListGroup className="courses">
                                <ListGroup.Item action variant="light">HTML</ListGroup.Item>
                                <ListGroup.Item action variant="light">CSS</ListGroup.Item>
                                <ListGroup.Item action variant="light">Bootstrap</ListGroup.Item>
                                <ListGroup.Item action variant="light">JavaScript</ListGroup.Item>
                                <ListGroup.Item action variant="light">React</ListGroup.Item>
                            </ListGroup>
                        </Media.Body>
                    </Media>
                </div>

        </div>
      );
    }
  }
  
  export default StudentProfile;