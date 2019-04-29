import React, { Component } from 'react'
import './ServicesDisplay.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class ServicesDisplay extends Component {
    constructor() {
        super()

        this.state = {
            edit_time_limit: '',
            edit_service_title: '',
            edit_service_cost: '',
            edit_service_desc: '',
            toggleEdit: true
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    handleDelete = () => {
        let { service_id } = this.props.services
        this.props.deleteService(service_id)
    }

    handleEdit = () => {
        let { service_id } = this.props.services
        let { edit_service_title, edit_service_desc, edit_time_limit, edit_service_cost } = this.state
        this.props.editService(service_id, edit_service_title, edit_service_desc, edit_time_limit, edit_service_cost)
        this.setState({
            edit_time_limit: '',
            edit_service_title: '',
            edit_service_cost: '',
            edit_service_desc: '',
            toggleEdit: true
        })
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        let { admin } = this.props.client
        let { toggleEdit } = this.state
        return admin ? (
            <div>
                {toggleEdit ? (
                    <div className="services-flex">
                        <div className="service-box2">
                            <div className="services-flex">
                                <div>{this.props.services.time_limit} Min</div>
                                <h4 className="service-title">{this.props.services.service_title}</h4>
                                <div>${this.props.services.service_cost}</div>
                            </div>
                            <div className="services-book">
                                <div className="service-desc">{this.props.services.service_desc}</div>
                            </div>
                            <div className="button-display">
                                <button onClick={() => this.setState({ toggleEdit: false })} className="button button2">Edit</button>
                                <button className="button button2">Book Now</button>
                                <button onClick={() => this.handleDelete()} className="button button2">X</button>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="services-flex">
                            <div className="service-box3">
                                <input value={this.state.edit_time_limit} name="edit_time_limit" onChange={(e) => this.handleChange('edit_time_limit', e.target.value)} placeholder="Time Limit of Service"></input>
                                <input value={this.state.edit_service_cost} name="edit_service_cost" onChange={(e) => this.handleChange('edit_service_cost', e.target.value)} placeholder="Cost of Service"></input>
                                <input value={this.state.edit_service_title} name="edit_service_title" onChange={(e) => this.handleChange('edit_service_title', e.target.value)} placeholder="Service Title"></input>
                                <input value={this.state.edit_service_desc} name="edit_service_desc" onChange={(e) => this.handleChange('edit_service_desc', e.target.value)} placeholder="Service Description"></input>
                                <div className="edit-display2">
                                    <button onClick={() => this.setState({toggleEdit: true, edit_time_limit: '', edit_service_title: '', edit_service_cost: '', edit_service_desc: ''})} className="button">Back</button>
                                    <button onClick={this.handleEdit} className="button">Submit Change</button>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        ) :
            <div className="services-flex">
                <div className="service-box2">
                    <div className="services-flex">
                        <div>{this.props.services.time_limit} Min</div>
                        <h4 className="service-title">{this.props.services.service_title}</h4>
                        <div>${this.props.services.service_cost}</div>
                    </div>
                    <div className="services-book">
                        <div className="service-desc">{this.props.services.service_desc}</div>
                    </div>
                    <button className="button button2">Book Now</button>
                </div>
            </div>
    }
}

let mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(ServicesDisplay)  