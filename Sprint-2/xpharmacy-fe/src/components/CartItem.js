import React, { Component } from 'react';
import axios from '../axios'

class CartItem extends Component {
    state = {
        image: "",
        price: ""
    }
    componentDidMount() { 
        axios
        .get(`/api/v1/products/${this.props.id}`)
        .then(data =>{ 
            this.setState({
                image: data.data.image,
                price: data.data.price,
                name: data.data.name,
                id: this.props.id
            })
            // console.log(data.data)
            }
        )
    }
    arrayRemove(arr, value) {

        return arr.filter(function(ele){
            return ele.id != value;
        });
     
     }
    Delete = (event) => {
        event.preventDefault();
        console.log("ok")
        var cart = JSON.parse(localStorage.getItem('cart'))
        console.log(cart[0].id)
        localStorage.setItem('cart', JSON.stringify(this.arrayRemove(cart, this.props.id)));
        window.location.href='/cart'
    }



    render() {
        let deleteButton
        if (this.props.order != true) 
            deleteButton = (<form onClick={this.Delete} className="FormFields">
                                <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Delete</a>
                            </form>
            )

        return (
            <div className="row" >
                <div className="col-md-2 mb-2">
                    <img src={this.state.image} alt="Image placeholder" className="img-fluid"/>
                </div>
                <div className="col-md-2">
                    {this.state.name}
                </div>
                <div className="col-md-2 ml-auto">
                    <input className="w-25" type="number" value={this.props.quantity}></input> x {this.state.price}
                </div>
                <div className="col-md-2">
                    {this.state.price * this.props.quantity}$
                </div>
                {/* <form onClick={this.Delete} className="FormFields">
                    <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Delete</a>
                </form> */}
                {deleteButton}
                
            </div>
            
        );
    }
}

export default CartItem;