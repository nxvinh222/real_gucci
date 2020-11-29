import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';

class DetailProduct extends Component {
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
    render() {
        const displayedProduct = this.props.product ? 
        <div className="detail_Product">
            <div className="row">
                {/* <div className="col-1"></div> */}
                <div className="col-lg-6 px-md-12">          
                    {/* <img className="img-fluid" src={this.props.product.image} style={{width:400,scale:1.5,offset:{vertical:0,horizontal:10}}}/> */}
                    <ImageZoom
                        image={{
                        src: this.props.product.image,
                        className: 'img',
                        style: {transform: "translateZ(0px)", left: "125px", height: "391px", width: "391px"}
                        }}
                        zoomImage={{
                        src: this.props.product.image,
                        }}
                    />
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-lg-6 px-md-5">
                    <h3>{this.props.product.name}</h3>
                    <h2>{this.props.product.price}$</h2>
                    <p>{this.props.product.info}</p>
                    <a href="#" 
                        onClick={this._addToCart} className="btn btn-primary">ADD TO CART
                    </a>
                </div>
            </div>
        </div>
        : ''
        return (
            <div className="container"> 
                {displayedProduct}
            </div>
        );
    }
}

export default DetailProduct;