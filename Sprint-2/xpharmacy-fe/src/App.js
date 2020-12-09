import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './axios';
import { BrowserRouter, Route} from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';
import LoginScreen from './containers/LoginScreen';
import ProductScreen from './containers/ProductScreen';
import axios from './axios';
import DashBoard from './containers/DashBoard';
import Cart from './containers/Cart';
import Order from './containers/Prescription';
import OrderDetail from './containers/OrderDetail';
import SignUpScreen from './containers/SignUpScreen';
import DetailProduct from './containers/DetailScreen';

class App extends Component {

  state = {
    products: [],
    searchString: ''
  }

  _onLogin = (username, password) => {
    axios
      .post("/api/v1/auth", {
        username: username,
        password: password
      })
      .then(response => {
        if (response.data.success!=false){
          localStorage.setItem('token', response.data.token)
          window.location.href='/'
        }
        else {
          alert("Wrong username or password");
        }
        
        // console.log(response);     
      })
  }

  _onSearchChanged = text => this.setState({searchString : text});

  componentDidMount(){
    axios
      .get("/api/v1/products", {
        headers: { token: localStorage.getItem('token')}
      })
      .then(data => {
        this.setState({products: data.data})
        console.log(this.state.products);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <HomeScreen {...props} state={this.state} _onSearchChanged={this._onSearchChanged}/>
          }} />
          <Route exact path="/login" render={(props) => {
            return <LoginScreen {...props} state={this.state} _onLogin={this._onLogin}/>
          }} />
          <Route exact path="/signup" render={(props) => {
            return <SignUpScreen {...props} state={this.state} _onLogin={this._onLogin}/>
          }} />
          <Route exact path="/products" render={(props) => {
            return <ProductScreen {...props} state={this.state}/>
          }} />
          <Route exact path="/products/:productId" render={(props) => {
            return <DetailProduct {...props} state={this.state}/>
          }} />
          <Route exact path="/dashboard" render={(props) => {
            return <DashBoard {...props} state={this.state} onSearchChanged={this._onSearchChanged}/>
          }} />
          <Route exact path="/cart" render={(props) => {
            return <Cart {...props} state={this.state}/>
          }} />
          <Route exact path="/order" render={(props) => {
            return <Order {...props} state={this.state}/>
          }} />
           <Route exact path="/order/:orderId" render={(props) => {
            return <OrderDetail {...props} state={this.state}/>
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
