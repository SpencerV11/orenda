import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="bottom-footer">
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.instagram.com/orenda.aesthetics/"><div className="big"><i className="fab fa-instagram footer-icons border"></i></div></a>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://facebook.com/orenda.aesthetics/"><div className="big"><i className="fab fa-facebook footer-icons border"></i></div></a>
                <div>Copyright © All Rights Reserved</div>
                <div>1025 10Th Street <br></br> Idaho Falls, ID 83404</div>
                <div className="open-time">
                    <div><strong>Sun</strong> Closed</div>
                    <div><strong>Mon</strong> 10:00 AM - 7:15 PM</div>
                    <div><strong>Tue</strong> 9:00 AM - 3:00 PM</div>
                    <div><strong>Wed</strong> 10:00 AM - 7:15 PM</div>
                    <div><strong>Thu</strong> 9:00 AM - 3:00 PM</div>
                    <div><strong>Fri</strong> 9:00 AM - 3:00 PM</div>
                    <div><strong>Sat</strong> Closed</div>
                </div>
            </div>
        )
    }
}