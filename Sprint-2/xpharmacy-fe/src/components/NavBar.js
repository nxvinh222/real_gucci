import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import axios from '../axios';

class NavBar extends Component {
    state = {

    }

    SignOut = (event) => {
        localStorage.removeItem("token")
        localStorage.removeItem('cart')
        this.state.ProfileName = null
        window.location.href='/'
    }
    componentDidMount(){
        if (localStorage.getItem('token')!=null)
            axios
            .get("/api/v1/auth/verify", {
                headers: { token: localStorage.getItem('token')}
            })
            .then(data => {
                // console.log(name)
                this.setState({
                    ProfileName: data.data.name,
                    admin: data.data.admin
                })
                
                
            })         
    }
    render() {
            var token = localStorage.getItem('token')
            
            let LogIn
            let SignUp
            let LogOut
            let DashBoard 
            if (token == null)
                LogIn = (<Nav.Link href="/login">Login</Nav.Link>)
            else
                LogIn = (<Nav.Link href="/#">Welcome, {this.state.ProfileName}</Nav.Link>)
            if (token == null)
                SignUp = (<Nav.Link href="/signup">SignUp</Nav.Link>)
            if (token != null)
                LogOut = (<Nav.Link href="/" onClick={this.SignOut}>LogOut</Nav.Link>)       
            if (this.state.admin == 1)
                DashBoard = (<Nav.Link href="/dashboard">DashBoard</Nav.Link>)
            


        return (
            <div className="container">
                <Navbar bg="navbar-light" expand="lg" style={{padding: '30px'}}>
                    <Navbar.Brand className="navbar-brand active" href="/" style={{color: '#15cda8', fontsize: '2.0rem'}}>xPharmacy.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mt-2 mt-lg-0">
                        {DashBoard}
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/order">Create Order</Nav.Link>
                        {SignUp}
                        {LogIn}
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        {LogOut}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;