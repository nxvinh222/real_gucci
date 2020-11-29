import React, { Component } from 'react';
import SearchField from './SearchField';
import Product from './Product';

class Update extends Component {
    state = {
        updatefield: "update"
    }

    render() {
        const filteredProducts = this.props.products.filter(item => item.name.includes(this.props.searchString));
        const displayedProducts = filteredProducts.map(item => <Product field={this.state.updatefield} product={item}/>)
        return (
            <div>
                <h2>Update product</h2>
                <SearchField onSearchChanged={this.props.onSearchChanged}/>
                <div className="row mb-5">
                {displayedProducts}
                </div>
            </div>
        );
    }
}

export default Update;