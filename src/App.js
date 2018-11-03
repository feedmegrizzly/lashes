import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        
      <div className="menu">
        <p className="name">Shayla Bryant</p>
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/products">
          <p>Products</p>
        </Link>

        <Link to="/pictures">
          <p>Pictures</p>
        </Link>
        
        <Link to="/cart">
          <p>Cart</p>
        </Link>
      </div>
        { routes }

      </div>
    );
  }
}

export default App;