import React, { Component } from 'react';
import Product from '../components/Product';
import SearchField from './SearchField';

class ProductField extends Component {
    state = {
        productfield: "product"
    }
    render() {
        const filteredProducts = this.props.products.filter(item => item.category.includes(this.props.category))
                                                    .filter(item => item.name.includes(this.props.searchString));
        const allproduct = filteredProducts.map(item => <Product field={this.state.productfield} product={item}/>)
        console.log(this.props.products)
        return (
            <div>
                <SearchField onSearchChanged={this.props.onSearchChanged}/>
                <div className="row mb-5">
                    {allproduct}
                </div>
            </div>

        );
    }
}

export default ProductField;