import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        
      <div className="menu">
        <p className="name">
        <Link className= "name" to="/">
        Shayla Bryant
        </Link> 
        </p>
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
          <p>Schedule</p>
        </Link>
        <Link to="/karter">
          <p>Cart</p>
        </Link>
      </div>
      <div className="login">
        <Link to="/login">
        <p>Login</p>
        </Link>
      </div>
        { routes }

      </div>
    );
  }
}

export default App;