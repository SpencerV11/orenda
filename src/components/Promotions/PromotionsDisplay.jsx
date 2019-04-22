import React, { Component } from 'react'
import './PromotionsDisplay.css'

class PromotionsDisplay extends Component {
    render() {
        return (
            <div className="promotions-display">
                <div>{this.props.promotions.promotion_title}</div>
                <div>{this.props.promotions.description}</div>
                <div>{this.props.promotions.ex_date}</div>
            </div>


        )
    }
}

export default PromotionsDisplay