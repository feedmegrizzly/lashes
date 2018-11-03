import React from 'react';
import axios from 'axios'
import Productcard from '../Productcard/Productcard'

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          product: [],
        }
      }
    

    componentDidMount() {
      // debugger
      axios.get('/api/product')
      .then((res) => {
        // debugger
            this.setState({ product: res.data })
          })
          .catch(err => console.log('axios create error', err))
          
      }
    render() {
      let productCards = this.state.product.map((product)=>{
        return <Productcard key={product.id} id={product.id} productname={product.productname} description={product.description} price={product.price} img={product.img} />
      })
      return (
        <div className="Product">
         {productCards}
        </div>
      );
    }
  }
  
  export default Product;