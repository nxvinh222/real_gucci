import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import PrescriptionImage from '../components/PrescriptionImage';

class Order extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <h1>Create your order</h1>
                    {/* <Pagination>
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                    </Pagination> */}
                    <h5>1.Send us your prescriptions</h5>
                    <PrescriptionImage/>
                </div>
            </div>
        );
    }
}

export default Order;