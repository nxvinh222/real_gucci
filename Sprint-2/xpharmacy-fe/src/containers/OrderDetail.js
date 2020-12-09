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
                products: data.data.products
            })
            console.log(this.state.products);
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
                <Footer/>
            </div>
        );
    }
}

export default Cart;