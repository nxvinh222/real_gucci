import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import axios from '../axios';
import { Collapse } from 'react-bootstrap';

import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
class Cart extends Component {

    state = {
        total: 0,
        products: []
    }


    componentDidMount(){

        axios
        .get(`/api/v1/orders/${this.props.match.params.orderId}`, {
            headers: { token: localStorage.getItem('token')}
        })
        .then( data => {
            this.setState({
                total: data.data.total,
                products: data.data.products,
                name: data.data.name,
                phone: data.data.phone,
                address: data.data.address,
                date: data.data.date,
                status: data.data.status
            })
            console.log(this.state.products);
            console.log(data.data)
        })
        .catch (err => console.log(err));
    }

    render() {
        var orderItem = this.state.products

        if (orderItem != null){
            var allItems = orderItem.map(item => <CartItem id={item.id} quantity={item.quantity} order={true}/>)
        }

        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className="font-weight-bold">Order Details</h1>
                    <hr/>
                    {allItems}
                    Total = {this.state.total}$
                    <hr/>
                </div>
                <div className="container text-left">
                    <p className="lead">Customer name: {this.state.name}</p>
                    <p className="lead">Address: {this.state.address}</p>
                    <p className="lead">Phone number: {this.state.phone}</p>
                    <p className="lead">Note: {this.state.note}</p>
                    <p className="lead">Order date: {this.state.date}</p>
                    <p className="lead">Status: {this.state.status}</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Cart;