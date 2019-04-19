import React, { Component } from 'react'
import Header from '../Header/Header'
import './Services.css'
import ServicesDisplay from './ServicesDisplay';
import axios from 'axios';

class Services extends Component {
    constructor() {
        super()

        this.state = {
            services: []
        }
    }
    componentDidMount() {
        this.getServices()
    }

    getServices() {
        axios.get('/api/services').then(res => {
            this.setState({
                services: res.data
            })
        })
    }

    render() {
        const { services } = this.state
        let map = services.map(service => {
            return (
                <ServicesDisplay
                    service={service}
                    key={service.service_id} />
            )
        })
        return (
            <div>
                <Header />
                {map}
            </div>
        )
    }
}

export default Services