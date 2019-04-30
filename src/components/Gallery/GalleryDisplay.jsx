import React, { Component } from 'react'
import './GalleryDisplay.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'

class GalleryDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.props.getData()
    }

    handleDelete = () => {
        let { gallery_id } = this.props.gallery
        this.props.deleteGallery(gallery_id)
    }

    render() {
        let { admin } = this.props.client
        return !admin ? (
            <div className="gallery-box">
                <div className="relative">
                    <div className="absolute2">BEFORE/AFTER</div>
                    <img className="img-size" src={this.props.gallery.before_after_img} alt=""></img>
                </div>
                <div className="flex-desc">
                    <h4 className="gallery-title">{this.props.gallery.gallery_service_title}</h4>
                    <div className="gallery-desc">{this.props.gallery.description}</div>
                </div>

            </div>

        ) : (
            <div className="gallery-box">
                <div className="relative">
                    <div className="absolute2">BEFORE/AFTER</div>
                    <img className="img-size" src={this.props.gallery.before_after_img} alt=""></img>
                </div>
                <div className="flex-desc">
                    <div className="gallery-title">{this.props.gallery.gallery_service_title}</div>
                    <div className="gallery-desc">{this.props.gallery.description}</div>
                </div>
                <button onClick={this.handleDelete} className="button gallery-delete">X</button>
            </div>
        )
    }
}

let mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(GalleryDisplay)