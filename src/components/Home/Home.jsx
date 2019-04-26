import React, { Component } from 'react'
import Header from '../Header/Header'
import './Home.css'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                {/* <div className="main-content">
                    <img className="background" src={background} alt="pic" />
                </div> */}
                <Carousel />
                <div className="under-main">
                    <div className="home-line"></div>
                    <div className="home-line2"></div>
                    <div className="box-display">
                        <div className="home-title">Promotions</div>
                        <p className="box-p">Click here to Check Out Orenda Aesthetics Promotions and Special Deals! <br></br> *Some specials are for a limited time Only*</p>
                        <Link to="/promotions"><button className="button">Promotions</button></Link>
                    </div>
                    <div className="box-display2">
                        <div className="home-title">Services</div>
                        <p className="box-p">Click Here to Check Out Orenda Aesthetics Services and Treatments! Orenda Aesthetics also offer FREE Skin Consults. <br></br> *Click Here to also Book an Appointment*</p>
                        <Link to="/services"><button className="button">Services</button></Link>
                    </div>
                    <div className="box-display">
                        <div className="home-title">About Me</div>
                        <p className="box-p">Click Here to Learn More About Orenda Aesthetics and How It Came To Be. <br></br> *Meet our Master Esthetician, Carlee Voorhees*</p>
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