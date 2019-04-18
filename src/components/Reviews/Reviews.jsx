import React, { Component } from 'react'
import Header from './../Header/Header'
import './Reviews.css'
import ReviewsDisplay from './ReviewsDisplay'
import axios from 'axios';

class Reviews extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
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

    render() {
        let { reviews } = this.state
        console.log(reviews)
        let map = reviews.map(review => {
            return (
                <ReviewsDisplay
                    review={review}
                    key={review.review_id} />
            )
        })
        return (
            <div>
                <Header />
                <div className="flex-review-main">
                    <div className="reviews-main">

                {map}
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews