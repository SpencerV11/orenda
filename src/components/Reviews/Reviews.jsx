import React, { Component } from 'react'
import Header from './../Header/Header'
import './Reviews.css'
import ReviewsDisplay from './ReviewsDisplay'
import axios from 'axios';
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux';


class Reviews extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            description: '',
            rating: '',
            editReviewId: null
        }
        this.getReviews = this.getReviews.bind(this)
    }

    componentDidMount() {
        this.getReviews()

    }

    async getReviews() {
        await axios.get(`/api/reviews`).then(res => {
            this.setState({
                reviews: res.data
            })
        })
    }

    createReview = () => {
        let { description, rating } = this.state
        // let {firstName, lastName } = this.props.client

        axios.post(`/api/review`, { description, rating }).then(res => {
            this.setState({
                reviews: res.data,
                description: '',
                rating: ''
            })
        }).catch(error => console.log(error))
    }

    deleteReview = (review_id) => {
        axios.delete(`/api/reviews/${review_id}`).then((res) => {

            this.setState({
                reviews: res.data
            })

        }).catch(error => console.log(error))
    }

    editReview = (review_id, editDesc, editRating) => {
        axios.put(`/api/reviews/${review_id}`, { editDesc, editRating }).then(res => {

            this.setState({
                reviews: res.data
            })
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
        let map = reviews.map((review, i) => {
            return (
                <ReviewsDisplay
                    review={review}
                    key={review.review_id}
                    currentClient={this.props.client.client_id}
                    deleteReview={this.deleteReview}
                    editReview={this.editReview}
                    id={i} />
            )
        })
        return (
            <div>
                <Header />
                <h1 className="link-title">Reviews</h1>
                <div className="flex-review-main">
                    <div className="reviews-main">

                        {map}
                    </div>
                    <div className="create-review">
                        <div className="review-flex">
                            <h3 className="review-title">Submit a review to Carlee!</h3>
                            <input className="input-style" value={this.state.description} name="description" onChange={(e) => this.handleChange('description', e.target.value)} placeholder="Description"></input>
                            <input className="input-style" value={this.state.rating} name="rating" onChange={(e) => this.handleChange('rating', e.target.value)} placeholder="Rating 1 - 10"></input>
                            <button onClick={() => this.createReview()} className="button">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapToState = (reduxState) => reduxState

export default connect(mapToState, { getData })(Reviews)