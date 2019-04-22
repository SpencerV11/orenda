import React, { Component } from 'react'
import Header from './../Header/Header'
import './Promotions.css'
import axios from 'axios'
import PromotionsDisplay from './PromotionsDisplay'


class Promotions extends Component {
    constructor() {
        super()

        this.state = {
            promotions: []
        }
    }
    componentDidMount() {
        this.getPromotions()
    }

    getPromotions() {
        axios.get('/api/promotions').then(res => {
            // console.log("PROMOTIONS", res.data)
            this.setState({
                promotions: res.data
            })
        })
    }

    render() {
        let { promotions } = this.state
        let map = promotions.map((promo, i) => {
            return (<PromotionsDisplay
                promotions={promo}
                key={i}
            />
            )
        })
        return (
            <div>
                <Header />
                <div className="display-promo">
                    <h1 className="title">Promotions</h1>
                    {map}
                </div>
            </div>
        )
    }
}

export default Promotions