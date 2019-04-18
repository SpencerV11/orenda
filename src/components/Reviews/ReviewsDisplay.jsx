import React, { Component } from 'react'
import './ReviewsDisplay.css'

class ReviewsDisplay extends Component {
    render() {
        return (
            <div className="reviews-box">
                <div>{this.props.review.first_name}</div>
                <div>{this.props.review.last_name}</div>
                <div>{this.props.review.description}</div>
                <div>{this.props.review.rating}</div> 
            </div>
        )    
    }
}

export default ReviewsDisplay