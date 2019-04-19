import React, { Component } from 'react'
import './ReviewsDisplay.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class ReviewsDisplay extends Component {

    handleDelete = () => {
        let review_id = this.props.review.review_id
        this.props.deleteReview(review_id)
    }

    
    render() {
        return this.props.currentClient === this.props.review.review_client_id || this.props.client.admin === true   ? (
            <div className="reviews-box">
                <div className="button absolute2">
                    <button className="button">Edit</button>
                </div>
                <div className="button absolute1"> <button className="button" onClick={() => this.handleDelete()}>X</button></div>
                <h4>{this.props.review.first_name} {this.props.review.last_name}</h4>
                <div className="rating">Rating- {this.props.review.rating}/10</div>
                <div className="desc">Description- {this.props.review.description}</div>
            </div>
        ) :
            (
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

export default connect(mapToState, { getData })(ReviewsDisplay)