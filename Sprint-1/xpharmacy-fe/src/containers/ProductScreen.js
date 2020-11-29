import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductField from '../components/ProductField';
class ProductScreen extends Component {

    state = {
        category: '',
        products: this.props.state.products
    }

    categoryHandler = (value,event) => {
        event.preventDefault();
        this.setState({
            category: value
        }, () => console.log(this.state.category));
    }

    render() {
        return (
            <div>
                <NavBar/>  
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 order-2">
                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                                        <div className="d-flex">
                                            <div className="mr-1 ml-md-auto">
                                                <DropdownButton id="dropdown-basic-button" title="Reference">
                                                    <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Name, A to Z</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Name, Z to A</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href="#/action-3" onSelect={this.sortByPriceAsc}>Price, low to high</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3" onSelect={this.sortByPriceDesc}>Price, high to low</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ProductField category={this.state.category} products={this.props.state.products}/>
                                <div className="row" data-aos="fade-up">
                                    <div className="col-md-12 text-center">
                                        <div className="site-block-27">
                                            <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col-md-3 order-1 mb-5 mb-md-0">
                                <div className="border p-4 rounded mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                                    <ul className="list-unstyled mb-0">
                                    <li className="mb-1">
                                            <a 
                                            href="#"
                                            onClick={(event) => this.categoryHandler("",event)} 
                                            className="d-flex">
                                                <span>All</span> 
                                                {/* <span className="text-black ml-auto">(4,220)</span> */}
                                            </a>
                                    </li>
                                        <li className="mb-1">
                                            <a 
                                            href="#"
                                            onClick={(event) => this.categoryHandler("Summer",event)} 
                                            className="d-flex">
                                                <span>Summer</span> 
                                                {/* <span className="text-black ml-auto">(2,220)</span> */}
                                            </a>
                                        </li>
                                        <li className="mb-1">
                                            <a
                                            href="#" 
                                            onClick={(event) => this.categoryHandler("Winter",event)} 
                                            className="d-flex">
                                                <span>Winter</span> 
                                                {/* <span className="text-black ml-auto">(2,550)</span> */}
                                            </a>
                                        </li>
                                        <li className="mb-1">
                                            <a 
                                            href="#"
                                            onClick={(event) => this.categoryHandler("Autumn",event)} 
                                            className="d-flex"><span>Autumn</span> 
                                            {/* <span className="text-black ml-auto">(2,124)</span> */}
                                            </a>
                                        </li>
                                        <li className="mb-1">
                                            <a 
                                            href="#"
                                            onClick={(event) => this.categoryHandler("Spring",event)} 
                                            className="d-flex"><span>Spring</span> 
                                            {/* <span className="text-black ml-auto">(2,124)</span> */}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ProductScreen;