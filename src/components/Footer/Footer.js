import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="bottom-footer">
                <div className="icons">
                    <div className="big"><i className="fab fa-instagram"></i></div>
                    <div className="big"><i className="fab fa-facebook"></i></div>
                </div>
                <div>Copywrite © All Rights Reserved</div>
                <div></div>
                <div></div>
            </div>
        )
    }
}