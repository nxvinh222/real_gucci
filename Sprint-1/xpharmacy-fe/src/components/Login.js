import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    Login = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props._onLogin(this.state.username, this.state.password);
    }

    render() {
    
        return (
            <div className="container">
                <h2>Login</h2>
                <div className="FormCenter mx-auto">
                    <form onSubmit={this.Login} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Username</label>
                        <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Login</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;