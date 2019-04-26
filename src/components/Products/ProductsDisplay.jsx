import React, { Component } from 'react'
import './ProductsDisplay.css'

class ProductsDisplay extends Component {
    render() {
        return (
            <div className="product-box">
                {this.props.product.product_line}
                {this.props.product.product_desc}
                <img src={this.props.product.url} alt="" width="300px" />
            </div>
        )
    }
}

export default ProductsDisplay