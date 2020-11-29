import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../axios';

import Login from '../components/Login';
import NavBar from '../components/NavBar'
import axios from '../axios';
import Footer from '../components/Footer';

class LoginScreen extends Component {

    state = {

    }
    // _onLogin = () => {
    //     axios
    //       .post("/api/v1/login", {
    
    //       })
    // }

    componentDidMount() {
        axios
            .get("/api/v1/auth/verify", {
                headers: { token: localStorage.getItem('token')}
            })
            .then(response => {
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
                <NavBar/>
               <Login _onLogin={this.props._onLogin}/> 
               <Footer/>
            </div>
        );
    }
}

export default LoginScreen;