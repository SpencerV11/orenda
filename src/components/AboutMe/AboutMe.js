import React, { Component } from 'react'
import Header from './../Header/Header'
import './AboutMe.css'
import carlee from './backgrounds/carlee.jpeg'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="aboutme-display">
                    <div className="desc-display">
                        <p>ORENDA: A force present in all people that empowers them to affect the world or effect changes in their own lives.</p>
                        <div>
                            <p className="padding-p">My name is Carlee Voorhees and Orenda Aesthetics is my business name. I have been in the medical aesthetic world since 2016. I received my Master Medical Aesthetics certification and schooling in Utah at Acaydia Aesthetic School and Spa. </p>
                            <p>Before I started Orenda Aesthetics, in January 2019, I previously worked at High-End Medical Spas, both in Utah and Idaho, and worked directly with Plastic Surgeons. Where I also held two aesthetic manager positions.
                            I am very grateful for my past experiences and past job positions, but I also learned a lot of things that lead me to start my own business. I knew I wanted to make some changes to what I was exposed to and the first one most of all is to have “Quality over Quantity”. </p>
                            <p>My husband tells me I am a makeup artist worst nightmare, because my goal is to have all my clients be able to show off their own natural beauty and not cover it up! I want all my clients to be confident and to embrace the skin that they have! Aging is beautiful, we need to embrace it, but it’s important to age healthy and take care of our largest Organ! </p>
                            <p>There is a lot of information and a lot of products and services out there. It can be very overwhelming! I have seen so many misdiagnosed services and products for clients and have seen so much false information everywhere about the skin constantly, especially on social media.</p>
                            <p>I of course want to help everyone correctly figure out what is best for them, for both services and products. It’s ok to not be a good candidate for something, so that is why my top goal is to help everyone know what they’re a good candidate for when it comes to treatments and of course what products their skin individually needs to receive optic results.</p>
                            <p>The skin is the largest organ and needs to be fed; but also needs to be fed correctly so it can be healthy and strong like our bodies.</p>
                            <p>I love what I do and I love the people I associate with. I am so very grateful and blessed to be able to do what I love all the time and most importantly, use and perform services and products that I personally believe in. </p>
                        </div>
                    </div>
                    <img className="carlee" src={carlee} alt="Carlee Voorhees" />
                </div>
            </div>
        )
    }
}

export default AboutMe