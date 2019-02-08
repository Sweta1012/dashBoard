import React, { Component } from 'react';

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
      education = this.education.value;

      this.setState({
        firstName,
        lastName,
        email,
        contact,
        education
      })
  }

 

    render() {

      return (
        <div>
            <a href="#">Home</a>
            <a href="#">Login</a>
          <form>
              <label>Firstname:  </label>
              <input type="text" ref={(input) => {this.fname = input}} placeholder="firstname" id="fname"></input>
                <br/> <br/>
              <label>Lastname:  </label>
              <input type="text" ref={(input) => {this.lname = input}} placeholder="lastname" id="lname"></input>
                <br/> <br/>
              <label>Email:  </label>
              <input type="text" ref={(input) => {this.email = input}} placeholder="email address" id="email"></input>
                <br/> <br/>
              <label>Phone Number:  </label>
              <input type="text" ref={(input) => {this.contact = input}} placeholder="contact" id="contact"></input>
                <br/> <br/>
              <label>Education:  </label>
              <input type="text" ref={(input) => {this.education = input}} placeholder="Highest Education" id="education"></input>
                <br/> <br/>
              <label>Work Status:  </label>
                <select id="workstatus">
                    <option>GC</option>
                    <option>H1B</option>
                    <option>OPT</option>
                    <option>Other</option>
                </select>
              <br/> <br/>
            <button type="submit" id="register" onClick={this.register}>Register</button>
              <br/> <br/>
            <ul>
                <li>Firstname: {this.state.firstName}</li>
                <li>Lastname: {this.state.lastName}</li>
                <li>Email: {this.state.email}</li>
                <li>Contact: {this.state.contact}</li>
                <li>Education: {this.state.education}</li>
            </ul>
          </form>
        </div>
      );
    }
  }
  
  export default Register;