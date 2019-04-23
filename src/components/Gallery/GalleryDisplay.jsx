import React, { Component } from 'react'
import './GalleryDisplay.css'

class GalleryDisplay extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div className="gallery-box">
                <div className="flex-pic">
                    <div className="relative">
                        <div className="absolute2">BEFORE/AFTER</div>
                        <img className="img-size" src={this.props.gallery.before_after_img} alt="before service"></img>
                    </div>
                    <div className="flex-desc">
                        <div className="gallery-title">{this.props.gallery.gallery_service_title}</div>
                        <div className="gallery-desc">{this.props.gallery.description}</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default GalleryDisplay