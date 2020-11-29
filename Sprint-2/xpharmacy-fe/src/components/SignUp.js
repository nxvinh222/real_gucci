import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';

class SignUpForm extends Component {

    state = {
            email: '',
            password: '',
            name: '',
            username: '',
            hasAgreed: false
    };

    handleChange = (event) => {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post('/api/v1/users',{
              username: this.state.username,
              password: this.state.password,
              name: this.state.name,
              email: this.state.email
          })
          .then(data => {
            console.log('The form was submitted with the following data:');
            console.log(data.data);
            alert("Signup success");
            setTimeout(function(){ window.location.href='/login'; }, 1000);          
          })
          .catch(err => console.log(err))
    }

    render() {
        return (
          <div className="container">
            <h2>Sign Up</h2>
            <div className="FormCenter mx-auto">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Full name</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="username">Username</label>
                  <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                  <label className="FormField__CheckboxLabel">
                      <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                  </label>
                </div>

                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button> <Link to="/login" className="FormField__Link">I'm already member</Link>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
export default SignUpForm;