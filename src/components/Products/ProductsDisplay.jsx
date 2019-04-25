import React, { Component } from 'react'
import './ProductsDisplay.css'

class ProductsDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.product.product_line}
            </div>
        )
    }
}

export default ProductsDisplay