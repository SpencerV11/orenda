import React, { Component } from 'react'
import pic from './../../logo/OrendaAesthetics.png'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor() {
        super() 

        this.state = {

        }
    }

    render() {
        return (
            <div className="body">
                <div className="top-header">
                    <Link to="/"><img className="logo" src={pic} alt="logo" width="250" height="100" /></Link>
                    <div className="top-header-links">
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/products"><div className="link">Products</div></Link>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/promotions"><div className="link">Promotions</div></Link>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/gallery"><div className="link">Gallery</div></Link>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/reviews"><div className="link">Reviews</div></Link>
                            <button onClick={this.props.toggleSignUp} className="button">SIGN UP</button>
                        
                        <button onClick={this.props.toggleLogin} className="button">LOGIN</button>
                    </div>
                </div>
            </div>
        )
    }
}