import React, { Component } from 'react'
import Header from './../Header/Header'
import axios from 'axios'
import GalleryDisplay from './GalleryDisplay'
import './Gallery.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'
class Gallery extends Component {
    constructor() {
        super()

        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        this.getGallery()
        this.props.getData()
    }

    getGallery() {
        axios.get('/api/gallery').then(res => {
            this.setState({
                gallery: res.data
            })
        })
    }

    render() {
        // console.log(this.props.client)
        let { admin } = this.props.client
        let { gallery } = this.state
        let map = gallery.map(gallery => {
            return (
                <div className="content-middle">
                    <GalleryDisplay
                        gallery={gallery}
                        key={gallery.gallery_id} />
                </div>
            )
        })
        return admin ? (
            <div>
                <Header />
                <div className="create-gallery">
                    <input type="file" placeholder="Before picture"></input>
                    <input type="file" placeholder="After picture"></input>
                    <input placeholder="Service"></input>
                    <input placeholder="Service Description"></input>
                    <button>Create</button>
                </div>
                {map}
            </div>
        ) : (
            <div>
                <Header />
                {map}
            </div>
        )
    }
}

let mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(Gallery)