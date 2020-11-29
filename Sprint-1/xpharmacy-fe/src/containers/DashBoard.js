import React, { Component } from 'react';
import axios from '../axios';
import { Nav, Row, Tab, Col } from 'react-bootstrap';
import Add from '../components/Add';
import Delete from '../components/Delete';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Order from '../components/Order';

class DashBoard extends Component {
    state = {

    }
    render() {
        axios
        .get("/api/v1/auth/verify", {
            headers: { token: localStorage.getItem('token')}
        })
        .then(data => {
            // console.log(name)
            if (data.data.admin == 1)
            this.setState({
                admin: data.data.admin
            })      
        })      
        const display = this.state.admin ? (           
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Add Product</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Delete Product</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                <Nav.Link eventKey="third">Orders</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Add/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"> 
                                    <Delete onSearchChanged={this.props.onSearchChanged} searchString={this.props.state.searchString} products={this.props.state.products}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Order/>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>              
        ) : (
            <div>
                Hello
            </div>
        )
        return (         
            <div className="container">
                <NavBar/>
                <h1>Dashboard</h1>
                <div className="Dashboard">
                    {display}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default DashBoard;