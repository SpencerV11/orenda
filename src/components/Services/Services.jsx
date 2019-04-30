import React, { Component } from 'react'
import Header from '../Header/Header'
import './Services.css'
import ServicesDisplay from './ServicesDisplay';
import axios from 'axios';
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class Services extends Component {
    constructor() {
        super()

        this.state = {
            services: [],
            service_title: '',
            service_desc: '',
            time_limit: '',
            service_cost: ''
        }
    }
    componentDidMount() {
        this.props.getData()
        this.getServices()
    }

    getServices = () => {
        axios.get(`/api/services`).then(res => {
            this.setState({
                services: res.data
            })
        })
    }

    createService = () => {
        let { service_title, service_desc, time_limit, service_cost } = this.state
        axios.post(`/api/service`, { service_title, service_desc, time_limit, service_cost }).then(res => { 
            this.setState({
                services: res.data,
                service_title: '',
                service_desc: '',
                time_limit: '',
                service_cost: ''
            })
        }).catch(error => console.log(error))
    }

    deleteService = (service_id) => {
        axios.delete(`/api/services/${service_id}`).then( res => {
            this.setState({
                services: res.data
            })
        }).catch(error => console.log(error))
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    editService = (service_id, service_title, service_desc, time_limit, service_cost) => {
        axios.put(`/api/services/${service_id}`, {service_title, service_desc, time_limit, service_cost}).then(res => {
            this.setState({
                services: res.data
            })
        }).catch(error => console.log(error))
    }

    render() {
        const { services } = this.state
        let { admin } = this.props.client
        let map = services.map(service => {
            return (
                <ServicesDisplay
                    deleteService={this.deleteService}
                    services={service}
                    key={service.service_id}
                    editService={this.editService} />
            )
        })
        return admin ? (
            <div>
                <Header />
                <div className="create-center">
                    <input className="input-style" value={this.state.time_limit} name="time_limit" onChange={(e) => this.handleChange('time_limit', e.target.value)} placeholder="Time limit of service"></input>
                    <input className="input-style" value={this.state.service_cost} name="service_cost" onChange={(e) => this.handleChange('service_cost', e.target.value)}  placeholder="Cost of service"></input>
                    <input className="input-style" value={this.state.service_title} name="service_title" onChange={(e) => this.handleChange('service_title', e.target.value)}  placeholder="Service Title"></input>
                    <input className="input-style" value={this.state.service_desc} name="service_desc" onChange={(e) => this.handleChange('service_desc', e.target.value)}  placeholder="Service Description"></input>
                    <button onClick={this.createService} className="button">Create Service</button>
                </div>
                <h1 className="link-title">Services</h1>
                <div className="services-main">
                    {map}
                    {/* </div> */}
                </div>
            </div>
        ) :
            <div>
                <Header />
                <h1 className="link-title">Services</h1>
                <div className="services-main">
                    {map}
                    {/* </div> */}
                </div>
            </div>
    }
}

let mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(Services)