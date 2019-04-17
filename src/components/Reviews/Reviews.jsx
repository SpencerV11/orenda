import React, { Component } from 'react'
import Header from './../Header/Header'
import './Reviews.css'
import ReviewsDisplay from './ReviewsDisplay'

    class Reviews extends Component {
        render() {
            return (
                <div>
                    <Header />
                    
                    <ReviewsDisplay />
                </div>
            )
        }
    }

    export default Reviews