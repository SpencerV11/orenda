import React, { Component } from 'react'
import './ReviewsDisplay.css'
import {getData} from './../../ducks/clientReducer'
import { connect } from 'react-redux'
import Reviews from './Reviews';

class ReviewsDisplay extends Component {
    render() {
        console.log(12123123123, this.props.client)
        return (
            <div className="reviews-box">
                <h4>{this.props.review.first_name} {this.props.review.last_name}</h4>
                <div className="rating">Rating- {this.props.review.rating}/10</div> 
                <div className="desc">Description- {this.props.review.description}</div>
            </div>
        )    
    }
}
// if the reviews_client_id matches whats in the redux initalState 

let mapToState = (reduxState) => reduxState

export default connect(mapToState, {getData})(ReviewsDisplay)