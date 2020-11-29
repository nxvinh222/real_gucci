import React, { Component } from 'react';
import axios from '../axios';
import axiosUpload from 'axios';

class Add extends Component {
    state = {
        name: '',
        price: 0,
        info: '',
        image: null,
        category: '',
        sold: 0
    };

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

            this.setState({
                [name]: value
            })
        console.log(event.target.value);
    }

    handleImage = (event) => {
        let image = event.target.files[0]
        this.setState({image: image})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        let image = new FormData()
        image.append("image", this.state.image)
        axiosUpload.post('https://api.imgur.com/3/image', image, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Client-ID 3cebd03a2911a36'
            }
        })
        .then(data => {
            console.log(data)
            console.log(data.data.data.link)
            axios
                .post('/api/v1/products',{
                    name: this.state.name,
                    price: this.state.price,
                    info: this.state.info,
                    image: data.data.data.link,
                    category: this.state.category,
                    sold: this.state.sold
                })
                .then(()=>{
                    window.location.href='/dashboard'
                })
        }).catch(err => console.log(err))
        
    }
    render() {
        return (
            <div>
                <h3>Add product</h3>
                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields" >
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Product's Name" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="price">Price</label>
                        <input type="number" id="price" className="FormField__Input" placeholder="Price" name="price" value={this.state.price} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="info">Info</label>
                        <input type="text" id="info" className="FormField__Input" placeholder="Information" name="info" value={this.state.info} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="image">Image</label>
                        <input type="file" id="image" className="FormField__Input" placeholder="Image" name="image" onChange={this.handleImage} />
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="category">Category</label>
                        <select className="FormField__Input" id="category" name="category" value={this.state.category} onChange={this.handleChange}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Spring">Spring</option>
                        </select>
                        </div>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="sold">Sold</label>
                        <input type="number" id="sold" className="FormField__Input" placeholder="Sold" name="sold" value={this.state.sold} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Add;