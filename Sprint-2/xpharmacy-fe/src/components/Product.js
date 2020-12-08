import React, { Component, useState } from 'react';
import axios from '../axios';
import { Modal, Button } from 'react-bootstrap';
import 'styles/Product.css'

class product extends Component {
    state = {
        field: this.props.field,
        show: false
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
      };

      _addToCart = (event) => {
        var cart;
        if (localStorage.getItem('cart')==null){
                cart = []
                cart.push({
                    id: this.props.product._id,
                    quantity: 1,
                    price: this.props.product.price,
                    name: this.props.product.name
                });
        }
        else{
            cart = JSON.parse(localStorage.getItem('cart'));
            var flag = false
            for (let element of cart){
                if (element.id == this.props.product._id){
                    element.quantity++;
                    flag = true;
                    break;
                }              
            }
            if (flag!=true){
                cart.push({
                    id: this.props.product._id,
                    quantity: 1,
                    price: this.props.product.price,
                    name: this.props.product.name
                });
            }
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        event.preventDefault();
    }

    _deleteProd = () => {
        axios
            .delete(`/api/v1/products/${this.props.product._id}`)
            .then(function(response){
                alert("Item deleted")
                window.location = "/dashboard"
            })
            .catch(err => console.log(err));
    }

    render() {
        const func = () => {
            let button
            if(this.state.field === "product") {
                button = (
                    <a href="#" 
                        onClick={this._addToCart} className="btn btn-primary">ADD TO CART
                    </a>
                )
            } else if(this.state.field === "delete") {
                button = (
                    <>
                        <Button variant="primary" onClick={this.showModal}>
                        Delete
                        </Button>

                        <Modal show={this.state.show} onHide={this.hideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Verify</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you wish to delete this item?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.hideModal}>
                            No
                            </Button>
                            <Button variant="primary" onClick={this._deleteProd}>
                            Yes
                            </Button>
                        </Modal.Footer>
                        </Modal>
                    </>
                )
            }
            return button;
        }
        const hello = () => console.log(this.state.field);
        return (
            <div className="col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch" data-aos="fade-up">
                <div className="card text-center h-100">

                        <img className="card-img-top img-fluid" src={this.props.product.image} alt="Image placeholder"/>
                        <div className="card-body p-4">
                            <a href={`/products/${this.props.product._id}`}>
                                <h6 className="card-title">{this.props.product.name}</h6>
                            </a>
                            <p className="text-primary font-weight-bold">{this.props.product.price}$</p>
                            {func()}
                        </div>

                </div>
            </div>
        );
    }
}

export default product;