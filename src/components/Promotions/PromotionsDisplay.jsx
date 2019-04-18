import React, { Component } from 'react'

class PromotionsDisplay extends Component {
    render() {
        return (
            <div>
                <div>{this.props.promotions.promotion_title}</div>
                <div>{this.props.promotions.description}</div>
            </div>


        )
    }
}

export default PromotionsDisplay