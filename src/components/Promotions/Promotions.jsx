import React, { Component } from 'react'
import Header from './../Header/Header'
import './Promotions.css'
import axios from 'axios'
import PromotionsDisplay from './PromotionsDisplay'


class Promotions extends Component {
    constructor() {
        super()

        this.state = {
            promotions: [],
            promotion_title: '',
            promotion_description: '',
            promotion_expiration: ''
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

    createPromotion() {
    
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
                    <div className="create-promo">
                        <input placeholder="Promotion Title"></input>
                        <input placeholder="Promotion Description"></input>
                        <input placeholder="Expiration Date"></input>
                        <button>Submit</button>
                    </div>
                    <h1 className="title">Promotions</h1>
                    <div className="map-box">
                        {map}
                    </div>
                </div>
            </div>
        )
    }
}

export default Promotions