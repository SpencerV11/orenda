import React, { Component } from 'react'
import './PromotionsDisplay.css'

class PromotionsDisplay extends Component {
    render() {
        return (
            <div className="circle-display">
                <div className="promo-title">{this.props.promotions.promotion_title}</div>
                <div className="promo-desc">{this.props.promotions.description}</div>
                <div className="promo-date">{this.props.promotions.ex_date}</div>
            </div>
        )
    }
}

export default PromotionsDisplay