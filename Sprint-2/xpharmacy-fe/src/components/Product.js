import React, { Component, useState } from 'react';
import axios from '../axios';
import { Modal, Button } from 'react-bootstrap';

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
            .then(alert("Delete success"))
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
            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                    <figure className="block-4-image">
                    <a href={`/products/${this.props.product._id}`}><img src={this.props.product.image} alt="Image placeholder" className="img-fluid"/></a>
                    </figure>
                    <div className="block-4-text p-4">
                        <h3><a href={`/products/${this.props.product._id}`}>{this.props.product.name}</a></h3>
                        <p className="text-primary font-weight-bold">{this.props.product.price}$</p>
                        {func()}
                    </div>
                </div>
            </div>
        );
    }
}

export default product;