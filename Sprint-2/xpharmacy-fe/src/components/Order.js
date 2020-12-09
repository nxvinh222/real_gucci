import React, { Component } from 'react';
import axios from '../axios';
import { Table, Dropdown } from 'react-bootstrap';

class Order extends Component {
    state = {
        orders: [],
        expandedRows : []
    }

    componentDidMount(){
        axios
            .get('/api/v1/orders', {
                headers: { token: localStorage.getItem('token')}
            })
            .then( data => {
                this.setState({
                    orders: data.data
                })
                console.log(this.state.orders);
            })
            .catch (err => console.log(err));
    }

    _deleteOrder = () => {
        axios
            .delete(`/api/v1/products/${this.props.product._id}`)
            .then(alert("Delete success"))
            .catch(err => console.log(err));
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        
        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(id => id !== rowId) : 
			currentExpandedRows.concat(rowId);
        
        this.setState({expandedRows : newExpandedRows});
    }

    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item._id);
        const productRows = item.products.map(product => (
            <>
                <div className="row" >
                    {/* <div className="col-md-2 mb-2">
                        <img src={product.image} alt="Image placeholder" className="img-fluid"/>
                    </div> */}
                    <div className="col-md-2">
                        {product.name}
                    </div>
                    <div className="col-md-2">
                        {product.price}
                    </div>
                </div>
            </>
        ))
        const itemRows = [
			<tr onClick={clickCallback} key={"row-data-" + item._id}>
			    {/* <td>{item._id}</td> */}
                <td>{item.name}</td>
			    <td>{item.status}</td>
                <td>{item.date}</td>
                <td>{item.total}</td>
                <td>
                    <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    </Dropdown.Toggle>
                    </Dropdown>
                </td>
			</tr>
        ];
        
        if(this.state.expandedRows.includes(item._id)) {

            itemRows.push(

                    <div key={"row-expanded-" + item._id}>
                        {/* <td>Image</td> */}
                        <tr className="">{item.products[0].name}, Item price: {item.products[0].price} </tr>
                        <tr className="">{item.products[0].name}, Item price: {item.products[0].price} </tr>
                        <p></p>
                    </div>


            );
        }
        
        return itemRows;    
    }

    render() {
        let allItemrows = [];
        this.state.orders.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemrows = allItemrows.concat(perItemRows);
        })
        return (
            <div>
                <h2>Orders</h2>
                <Table bordered>
                    <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {allItemrows}
                    </tbody>
                    
                </Table>
            </div>
        );
    }
}

export default Order;