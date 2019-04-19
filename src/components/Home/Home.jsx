import React, { Component } from 'react'
import Header from '../Header/Header'
import './Home.css'
import background from './backgrounds/background1.jpeg'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="main-content">
                    <img className="background" src={background} alt="pic" />
                </div>
                <div className="under-main">
                    <div className="box-display">
                        <div className="title">Promotions</div>
                        <p className="box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla veritatis iure possimus tempore deleniti, tempora expedita perspiciatis.</p>
                        <Link to="/promotions"><button className="button">Promotions</button></Link>
                    </div>
                    <div className="box-display">
                        <div className="title">Services</div>
                        <p className="box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla veritatis iure possimus tempore deleniti, tempora expedita perspiciatis.</p>
                        <Link to="/services"><button className="button">Services</button></Link>
                    </div>
                    <div className="box-display">
                        <div className="title">About Me</div>
                        <p className="box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla veritatis iure possimus tempore deleniti, tempora expedita perspiciatis.</p>
                        <Link to="/aboutme"><button className="button">About Me</button></Link>
                    </div>
                </div>
                <div className="book-now">
                    <h2>Schedule your appointment today!</h2>
                    <button className="button appointment">Book Now</button>
                </div>
                
            </div>
        )
    }
}

export default Home