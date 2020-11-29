import React, { Component } from 'react';
import Product from '../components/Product';

class ProductField extends Component {
    state = {
        productfield: "product"
    }
    render() {
        const filteredProducts = this.props.products.filter(item => item.category.includes(this.props.category));
        const allproduct = filteredProducts.map(item => <Product field={this.state.productfield} product={item}/>)
        console.log(this.props.products)
        return (
            <div className="row mb-5">
                {allproduct}
            </div>
        );
    }
}

export default ProductField;