import React, { Component } from 'react'
import './PromotionsDisplay.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class PromotionsDisplay extends Component {
    constructor() {
        super()

        this.state = {
            promo_title: '',
            promo_desc: '',
            promo_exp: '',
            editToggle: false
        }
    }

    componentDidMount = () => {
        this.props.getData()
    }

    handleDelete = () => {
        console.log(this.props.promotions.promotion_id)
        let { promotion_id } = this.props.promotions
        this.props.deletePromotion(promotion_id)
    }

    handleEdit = () => {
        let { promo_title, promo_desc, promo_exp } = this.state
        let { promotion_id } = this.props.promotions
        this.props.updatePromotion(promotion_id, promo_title, promo_desc, promo_exp)
        this.setState({
            editToggle: false
        })
    }

    toggleEdit = () => {
        this.setState({
            editToggle: true,
            promo_title: '',
            promo_desc: '',
            promo_exp: ''
        })
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log(this.state)
        let { admin } = this.props.client
        return admin ? (
            <div>
                {this.state.editToggle ? (
                    <div className="circle-display-toggled">
                        <button onClick={() => this.setState({editToggle: false})} className="button">Back</button>
                        <input className="margin-back" onChange={(e) => this.handleChange('promo_title', e.target.value)} value={this.state.promo_title} name="promo_title" placeholder="Promotion Title"></input>
                        <input onChange={(e) => this.handleChange('promo_desc', e.target.value)} value={this.state.promo_desc} name="promo_desc" placeholder="Promotion Description"></input>
                        <input onChange={(e) => this.handleChange('promo_exp', e.target.value)} value={this.state.promo_exp} name="promo_exp" placeholder="Expiration Date"></input>
                        <button onClick={this.handleEdit}>Submit</button>
                    </div>
                ) : (
                        <div className="circle-display">
                            <div className="promo-title">{this.props.promotions.promo_title}</div>
                            <div className="promo-desc">{this.props.promotions.promo_desc}</div>
                            <div className="promo-date-delete-edit">
                                <button onClick={() => this.toggleEdit()} className="button">Edit</button>
                                <div>Expires- {this.props.promotions.promo_exp}</div>
                                <button onClick={this.handleDelete} className="button">X</button>
                            </div>
                        </div>
                    )

                }
            </div>
        ) : (
                <div className="circle-display">
                    <div className="promo-title">{this.props.promotions.promo_title}</div>
                    <div className="promo-desc">{this.props.promotions.promo_desc}</div>
                    <div className="promo-date">Expires- {this.props.promotions.promo_exp}</div>
                </div>
            )
    }
}

let mapToState = reduxState => reduxState

export default connect(mapToState, { getData })(PromotionsDisplay)