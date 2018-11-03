import React, { Component } from 'react';
import './Productcard.css'



export default class Prodductcard extends Component {

    render() {
        return (
            <div className="productCard">
                <div className="card">
                    <h1>{this.props.productname}</h1>
                    <img src={this.props.img} alt="" />
                    <p>
                        {this.props.description}
                    </p>
                    <p>
                        Price: ${this.props.price}
                    </p>
                </div>
            </div>
        )
    }
}