import React, { Component } from 'react'
import Header from '../Header/Header'
import './Home.css'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import background from './../../components/Carousel/backgrounds/background1.jpeg'

class Home extends Component {

    render() {
        return (
            <div>
                

                <Header />
                
                <div className="main-content">
                    <img className="background" src={background} alt="pic" />
                </div>
                <div className="display-carousel">
                <Carousel />
                </div>
                <div className="under-main">
                    <div className="home-line"></div>
                    <div className="home-line2"></div>
                    <div className="box-display">
                        <div className="home-title">Promotions</div>
                        <p className="box-p">Click here to Check Out Orenda Aesthetics Promotions and Special Deals! *Some specials are for a limited time Only*</p>
                        <Link to="/promotions"><button className="button">PROMOTIONS</button></Link>
                    </div>
                    <div className="box-display2">
                        <div className="home-title">Services</div>
                        <p className="box-p">Click Here to Check Out Orenda Aesthetics Services and Treatments! Orenda Aesthetics also offer FREE Skin Consults. *Click Here to also Book an Appointment*</p>
                        <Link to="/services"><button className="button">SERVICES</button></Link>
                    </div>
                    <div className="box-display">
                        <div className="home-title">About Me</div>
                        <p className="box-p">Click Here to Learn More About Orenda Aesthetics and How It Came To Be. *Meet our Master Esthetician, Carlee Voorhees*</p>
                        <Link to="/aboutme"><button className="button">ABOUT ME</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home