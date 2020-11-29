import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from '../axios';
import DetailProduct from '../components/DetailProduct';
import Footer from '../components/Footer';

class DetailScreen extends Component {
    state = {

    }

    componentDidMount() {
        axios
        .get(`/api/v1/products/${this.props.match.params.productId}`)
        .then( data => {
            console.log(data.data)
            this.setState({
                product: data.data
            })
            console.log(this.state)
        })
        .catch( err => console.log(err))
    }

    render() {
        return (
            <div className='container'>
                <NavBar/>
                <div className="mx-auto">
                    <DetailProduct product={this.state.product}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default DetailScreen;