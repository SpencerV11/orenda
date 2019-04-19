import React, { Component } from 'react'
import Header from './../Header/Header'
import './Reviews.css'
import ReviewsDisplay from './ReviewsDisplay'
import axios from 'axios';
import {getData} from './../../ducks/clientReducer'
import { connect } from 'react-redux';

class Reviews extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            description: '',
            rating: ''
        }
    }

    componentDidMount() {
        this.getReviews()
        
    }

    getReviews() {
        axios.get('/api/reviews').then(res => {
            this.setState({
                reviews: res.data
            })
        })
    }

    createReview() {
        let { description, rating } = this.state
        // let {firstName, lastName } = this.props.client
        
        axios.post('/api/review', {description, rating}).then(res => {
            this.setState({
                reviews: res.data,
                description: '',
                rating: ''
            })
            this.getReviews()
        }).catch(error => console.log(error))
    }

    deleteReview(review_id) {
        axios.delete(`/api/reviews/${review_id}`).then(() => {
            this.getReviews()
        }).catch(error => console.log(error))
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    render() {
        let { reviews } = this.state
        // console.log(reviews)
        let map = reviews.map(review => {
            return (
                <ReviewsDisplay
                    review={review}
                    key={review.review_id}
                    currentClient={this.props.client.client_id}
                    deleteReview={this.deleteReview} />
            )
        })
        return (
            <div>
                <Header />
                <div className="flex-review-main">
                <div className="create-review">
                    <div className="review-flex">
                        <h3 className="review-title">Help Carlee know how well she is doing by giving her a review!</h3>
                        <input value={this.state.description} name="description" onChange={(e) => this.handleChange('description', e.target.value)} placeholder="Description"></input>
                        <input value={this.state.rating} name="rating" onChange={(e) => this.handleChange('rating', e.target.value)} placeholder="Rating 1/10"></input>
                        <button onClick={() => this.createReview()} className="button submit">SUBMIT</button>
                    </div>
                </div>
                    <div className="reviews-main">

                {map}
                    </div>
                </div>
            </div>
        )
    }
}

let mapToState = (reduxState) => reduxState

export default connect(mapToState, {getData})(Reviews)