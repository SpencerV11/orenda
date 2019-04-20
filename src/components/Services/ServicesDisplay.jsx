import React, { Component } from 'react'
import './ServicesDisplay.css'

class ServicesDisplay extends Component {
    render() {
        console.log(this.props.services)
        return (
            <div className="services-flex">
                <div className="service-box2">
                    <div className="services-flex">
                        <div>{this.props.services.time_limit} Min</div>
                        <h4>{this.props.services.service_title}</h4>
                        <div>${this.props.services.service_cost}</div>
                    </div>
                    <div>
                        {this.props.services.service_desc}
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesDisplay