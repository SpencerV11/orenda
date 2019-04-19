import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="bottom-footer">
                <div className="icons">
                    <a style={{textDecoration: 'none', color: 'black'}} href="https://www.instagram.com/orenda.aesthetics/"><div className="big"><i className="fab fa-instagram footer-icons border"></i></div></a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="https://facebook.com/orenda.aesthetics/"><div className="big"><i className="fab fa-facebook footer-icons border"></i></div></a>
                </div>
                <div>Copyright © All Rights Reserved</div>
                <div></div>
                <div></div>
            </div>
        )
    }
}