import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

class SignUpScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SignUp/>
                <Footer/>
            </div>
        );
    }
}

export default SignUpScreen;