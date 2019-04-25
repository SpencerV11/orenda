import React, { Component } from 'react'
import Header from './../Header/Header'
import './Products.css'
import axios from 'axios';
import ProductDisplay from './ProductsDisplay'


class Products extends Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
        axios.get(`/api/products`).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        let { products } = this.state
        let map = products.map(product => {
            return (
                <ProductDisplay
                key={product.product_id}
                product={product} />
            )
        })
        return (
            <div>
                <Header />
                <div className="header-back"></div>
                {/* <div className="under-header"></div> */}
                <div className="products">
                    <div className="products-main">
                        {map}
                    </div>
                </div>
            </div>
        )
    }
}

export default Products