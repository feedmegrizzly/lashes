import React, { Component } from 'react';
import './Productcard.css'



export default class Prodductcard extends Component {

    render() {
        const { productname, description, price, img } = this.props
        return (
            <div className="productCard">
                <div className="card">
                    <h1>{productname}</h1>
                    <img src={img} alt="" />
                    <p>
                        {description}
                    </p>
                    <p>
                        Price: ${price}
                    </p>
                </div>
            </div>
        )
    }
}