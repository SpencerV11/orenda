import React, { Component } from 'react'
import Header from './../Header/Header'
import './Promotions.css'
import axios from 'axios'
import PromotionsDisplay from './PromotionsDisplay'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class Promotions extends Component {
    constructor() {
        super()

        this.state = {
            promotions: [],
            promo_title: '',
            promo_desc: '',
            promo_exp: ''
        }
    }
    
    componentDidMount() {
        this.getPromotions()
        this.props.getData()
    }

    getPromotions = () => {
        axios.get(`/api/promotions`).then(res => {
            // console.log("PROMOTIONS", res.data)
            this.setState({
                promotions: res.data
            })
        })
    }

    createPromotion = () => {
        let { promo_title, promo_desc, promo_exp } = this.state
        axios.post(`/api/promotion`, { promo_title, promo_desc, promo_exp }).then(res => {
            this.setState({
                promotions: res.data,
                promo_title: '',
                promo_desc: '',
                promo_exp: ''
            })
        })
    }
    
    deletePromotion = (promotion_id) => {
        axios.delete(`/api/promotion/${promotion_id}`).then(res => {
            this.setState({
                promotions: res.data
            })
        }).catch(error => console.log(error))
    }

    updatePromotion = (promotion_id, promo_title, promo_desc, promo_exp) => {
        axios.put(`/api/promotion/${promotion_id}`, {promo_title, promo_desc, promo_exp}).then(res => {
            this.setState({
                promotions: res.data
            })
        }).catch(error => console.log(error))
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        let { admin } = this.props.client
        let { promotions } = this.state
        let map = promotions.map((promo, i) => {
            return (<PromotionsDisplay
                promotions={promo}
                key={i}
                deletePromotion={this.deletePromotion}
                updatePromotion={this.updatePromotion}
            />
            )
        })
        return admin ? (
            <div>
                <Header />
                <div className="display-promo">
                    <div className="create-promo">
                        <input onChange={(e) => this.handleChange('promo_title', e.target.value)} name="promo_title" value={this.state.promo_title} placeholder="Promotion Title"></input>
                        <input onChange={(e) => this.handleChange('promo_desc', e.target.value)} name="promo_desc" value={this.state.promo_desc} placeholder="Promotion Description"></input>
                        <input onChange={(e) => this.handleChange('promo_exp', e.target.value)} name="promo_exp" value={this.state.promo_exp} placeholder="Expiration Date"></input>
                        <button onClick={this.createPromotion}>Submit</button>
                    </div>
                    <h1 className="title">Promotions</h1>
                    <div className="map-box">
                        {map}
                    </div>
                </div>
            </div>
        ) :
            (
                <div>
                    <Header />
                    <div className="display-promo">
                        <h1 className="title">Promotions</h1>
                        <div className="map-box">
                            {map}
                        </div>
                    </div>
                </div>
            )
    }
}

let mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(Promotions)