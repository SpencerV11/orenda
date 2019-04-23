import React, { Component } from 'react'
import './ReviewsDisplay.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class ReviewsDisplay extends Component {
    constructor() {
        super()

        this.state = {
            editDesc: '',
            editRating: '',
            toggleEdit: true
        }
    }

    handleDelete = () => {
        let review_id = this.props.review.review_id
        this.props.deleteReview(review_id)
    }

    toggleEdit() {
        this.setState({
            toggleEdit: false
        })
    }

    toggleEditUpdate() {
        this.setState({
            toggleEdit: true
        })
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    handleUpdate = () => {
        this.props.editReview(this.props.review.review_id, this.state.editDesc, this.state.editRating)
        this.setState({
            editDesc: '',
            editRating: '',
            toggleEdit: true
        })
    }

    render() {
        let { toggleEdit, editDesc, editRating } = this.state
        let { currentClient } = this.props
        let { review_client_id } = this.props.review
        let { admin } = this.props.client
        return currentClient === review_client_id || admin === true ? (
            <div>
                {toggleEdit ? (
                    <div className="reviews-box">
                        <div className="button absolute2">
                            <button onClick={() => this.toggleEdit()} className="button">Edit</button>
                        </div>
                        <div className="button absolute1"> <button className="button" onClick={() => this.handleDelete()}>X</button></div>
                        <h4>{this.props.review.first_name} {this.props.review.last_name}</h4>
                        <div className="rating">Rating- {this.props.review.rating}/10</div>
                        <div className="desc">Description- {this.props.review.description}</div>
                    </div>
                ) : (
                        <div className="reviews-box">
                            <div className="button absolute2">
                                <button onClick={() => this.toggleEditUpdate()} className="button">Back</button>
                            </div>
                            <div className="button absolute1"> <button className="button" onClick={() => this.handleDelete()}>X</button></div>
                            <h4>{this.props.review.first_name} {this.props.review.last_name}</h4>
                            <input name="editRating" value={editRating} onChange={(e) => this.handleChange('editRating', e.target.value)} placeholder="change rating"></input>
                            <input name="editDesc" value={editDesc} onChange={(e) => this.handleChange('editDesc', e.target.value)} placeholder="change description"></input>
                            <button onClick={this.handleUpdate} className="button button-margin">Update</button>
                        </div>
                    )

                }
            </div>
        ) :
            < div className="reviews-box" >
                <h4>{this.props.review.first_name} {this.props.review.last_name}</h4>
                <div className="rating">Rating- {this.props.review.rating}/10</div>
                <div className="desc">Description- {this.props.review.description}</div>
            </div >
    }
}


let mapToState = (reduxState) => reduxState

export default connect(mapToState, { getData })(ReviewsDisplay)