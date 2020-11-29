import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import Feature from '../components/Feature';
import ProductField from '../components/ProductField';
import Footer from '../components/Footer';

class MainScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Banner bannerText="Hello World"/>
                {/* <Carousel/> */}
                <Feature/>
                <ProductField products={this.props.state.products}/>
                <Footer/>
            </div>
        );
    }
}

export default MainScreen;