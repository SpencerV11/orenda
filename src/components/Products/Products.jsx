import React, { Component } from 'react'
import Header from './../Header/Header'
import './Products.css'
import axios from 'axios';
import ProductDisplay from './ProductsDisplay'
import Dropzone from 'react-dropzone'
import { v4 as randomString } from 'uuid';


class Products extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            product_line: '',
            product_desc: '',
            url: 'http://via.placeholder.com/450x450'
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

    createProduct = () => {
        let { product_line, product_desc, url } = this.state
        axios.post('/api/product', {product_line, product_desc, url}).then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    //Amazon S3
    getSignedRequest = ([file]) => {
        this.setState({
            isUploading: true
        })

        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`

        axios.get(`/api/signs-s3`, {
            params: {
                'file-name': fileName,
                'file-type': file.type
            }
        }).then((response) => {
            const { signedRequest, url } = response.data
            this.uploadFile(file, signedRequest, url)
        }).catch(error => console.log(error))
    }

    uploadFile = (file, signedRequest, url) => {
        const options = {
            headers: {
                'Content-Type': file.type
            }
        }
        axios.put(signedRequest, file, options)
            .then(res => {
                this.setState({ isUploading: false, url })
            })
            .catch(error => {
                this.setState({
                    isUploading: false
                })
                if (error.response.status === 403) {
                    alert(`Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
                        error.stack
                        }`)
                } else {
                    alert(`Error: ${error.status}\n ${error.stack}`)
                }
            })
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log(this.state.url)
        let { products } = this.state
        let map = products.map(product => {
            return (
                <ProductDisplay
                key={product.product_id}
                product={product} />
            )
        })
        let { url } = this.state
        return (
            <div>
                <Header />
                <div className="header-back"></div>
                <div className="under-header">
                    <input onChange={(e) => this.handleChange('product_line', e.target.value)} name="product_line" value={this.state.product_line} placeholder="Product Line"></input>
                    <input onChange={(e) => this.handleChange('product_desc', e.target.value)} name="product_desc" value={this.state.product_desc} placeholder="Product Description"></input>
                    <div className="flex-test-image">
                            <img src={url} alt="" width="100px" height="90px" />
                            <Dropzone
                                onDropAccepted={this.getSignedRequest}
                                style={{
                                    position: 'relative',
                                    width: 200,
                                    height: 200,
                                    borderWidth: 7,
                                    marginTop: 100,
                                    borderColor: 'rgb(102, 102, 102)',
                                    borderStyle: 'dashed',
                                    borderRadius: 5,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: 28,
                                }}
                                accept='image/*'
                                multiple={false} >
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p>Select File</p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                    <button onClick={this.createProduct}>Create</button>
                </div>
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