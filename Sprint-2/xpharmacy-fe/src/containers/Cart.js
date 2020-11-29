import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import axios from '../axios';
import { Collapse } from 'react-bootstrap';

import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
class Cart extends Component {

    state = {
        name: '',
        address: '',
        phone: '',
        email: '',
        note: '',
        total: 0
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios
        .post("/api/v1/orders",{
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            date: new Date().toLocaleString(),
            total: this.state.total,
            products: JSON.parse(localStorage.getItem('cart')),
            status: "Delivering"
        })
        .then(data => {
            console.log(data)
            localStorage.removeItem('cart')
            window.location.href='/'
        })
        .catch(err => console.log(err));
        
    }

    componentDidMount(){
        var cart = JSON.parse(localStorage.getItem('cart'))
        var totalPrice = 0
        // console.log(cart)
        if (cart != null)
            for (let item of cart){
                totalPrice += (item.quantity * item.price)
                // console.log(item)
            }
        // console.log(totalPrice)
        this.setState({total: totalPrice})
    }

    render() {
        var cart = JSON.parse(localStorage.getItem('cart'))
        // this.setState({cart: cart})
        // var filteredCart = cart.filter((item,index) => cart.indexOf(item) === index).map(item => {
        //     return {
        //         item,
        //         quantity: cart.reduce((total, current)=>{
        //             return total + (current === item ? 1 : 0);
        //         }, 0)
        //     }
        // })

        if (cart != null){
            var allItems = cart.map(item => <CartItem id={item.id} quantity={item.quantity} />)
        }
        
        // var totalPrice = 0
        // for (let item in cart){
        //     totalPrice += item.quantity * item.price
        // }
        // this.setState({price: totalPrice})
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className="font-weight-bold">MY CART</h1>
                    <hr/>
                    {allItems}
                    Total = {this.state.total}
                    <hr/>
                    <h1 className="font-weight-bold">DELIVERY</h1>
                    <div className="FormCenter">
                        <form onSubmit={this.handleSubmit} className="FormFields">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="name">Full name</label>
                                <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="address">Address</label>
                                <input type="text" id="address" className="FormField__Input" placeholder="Enter your address" name="address" value={this.state.address} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="phone">Phone number</label>
                                <input type="text" id="phone" className="FormField__Input" placeholder="Enter your phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">Email</label>
                                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="note">Note</label>
                                <textarea type="text" id="note" className="FormField__Input" name="note" placeholder="Enter your note" value={this.state.note} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <button className="FormField__Button mr-20">Done</button>
                            </div>

                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Cart;