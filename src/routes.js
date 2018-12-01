import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Dashboard from './Componenets/Dashboard/Dashboard';
import Product from './Componenets/Product/Product_cd';
import Pictures from './Componenets/Pictures/Pictures';
import Cart from './Componenets/Cart/Cart'
import Login from "./Componenets/Login/Login"
import Carter from "./Componenets/Carter/Carter"

export default (
  <Switch>
    <Route path="/products" component={ Product } />
    <Route path="/pictures" component={ Pictures } />
    <Route path="/cart" component={ Cart } />
    <Route path="/login" component = { Login } />
    <Route path="/karter" component = { Carter } />
    <Route exact path="/" component={ Dashboard } />
  </Switch>
)