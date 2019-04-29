import React, { Component } from 'react'
import './ProductsDisplay.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class ProductsDisplay extends Component {
    constructor() {
        super()

        this.state = {
            product_line: '',
            product_desc: '',
            product_img: '',
            toggleEdit: true
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    handleDelete = () => {
        let { product_id } = this.props.product
        this.props.deleteProduct(product_id)
    }

    render() {
        let { admin } = this.props.client
        return admin ? (
            <div className="product-box">
                <div className="center-product-title">
                    <div className="product-title">{this.props.product.product_line}</div>
                    <div className="product-desc">{this.props.product.product_desc}</div>
                    <div className="product-edit-delete">
                        <button onClick={() => this.handleDelete()}>X</button>
                    </div>
                </div>
                <img className="product-image" src={this.props.product.url} alt="" width="300px" />
            </div>
        ) : (
                <div className="product-box">
                    <div className="center-product-title">
                        <div className="product-title">{this.props.product.product_line}</div>
                        <div className="product-desc">{this.props.product.product_desc}</div>
                    </div>
                    <img className="product-image" src={this.props.product.url} alt="" width="300px" />
                </div>
            )
    }
}

let mapToState = (reduxState) => reduxState

export default connect(mapToState, { getData })(ProductsDisplay)