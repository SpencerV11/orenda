import React, { Component } from 'react'
import './ReviewsDisplay.css'

class ReviewsDisplay extends Component {
    render() {
        return (
            <div className="reviews-box">
                <h4>{this.props.review.first_name} {this.props.review.last_name}</h4>
                <div className="rating">Rating- {this.props.review.rating}/10</div> 
                <div className="desc">Description- {this.props.review.description}</div>
            </div>
        )    
    }
}

export default ReviewsDisplay