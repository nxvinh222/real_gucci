import React, { Component } from 'react';
import SearchField from './SearchField';
import Product from './Product'

class Delete extends Component {
    state = {
        deletefield: "delete"
    }
    render() {
        const filteredProducts = this.props.products.filter(item => item.name.includes(this.props.searchString));
        const displayedProducts = filteredProducts.map(item => <Product field={this.state.deletefield} product={item}/>)
        return (
            <div>
                <h2>Product Overview</h2>
                <SearchField onSearchChanged={this.props.onSearchChanged}/>
                <div className="row mb-5">
                {displayedProducts}
                </div>
            </div>
        );
    }
}

export default Delete;