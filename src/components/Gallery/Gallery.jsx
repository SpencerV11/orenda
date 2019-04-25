import React, { Component } from 'react'
import Header from './../Header/Header'
import axios from 'axios'
import GalleryDisplay from './GalleryDisplay'
import './Gallery.css'
import { getData } from './../../ducks/clientReducer'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { v4 as randomString } from 'uuid';

class Gallery extends Component {
    constructor() {
        super()

        this.state = {
            gallery: [],
            url: 'http://via.placeholder.com/450x450',
            gallery_service_title: '',
            description: ''
        }
    }

    componentDidMount() {
        this.getGallery()
        this.props.getData()
    }

    getGallery = () => {
        axios.get('/api/gallery').then(res => {
            this.setState({
                gallery: res.data
            })
        }).catch(error => console.log(error))
    }

    createGallery = () => {
        let { url, gallery_service_title, description } = this.state
        axios.post('/api/gallery', { url, gallery_service_title, description }).then(res => {
            this.setState({
                gallery: res.data,
                url: 'http://via.placeholder.com/450x450',
                gallery_service_title: '',
                description: ''
            })
        }).catch(error => console.log(error))
    }

    deleteGallery = (gallery_id) => {
        axios.delete(`/api/gallery/${gallery_id}`).then(res => {
            this.setState({
                gallery: res.data
            })
        })
        .catch(error => console.log(error))
    }

    //AMAZON S3
    getSignedRequest = ([file]) => {
        this.setState({
            isUploading: true
        })

        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`

        axios.get('/api/signs-s3', {
            params: {
                'file-name': fileName,
                'file-type': file.type
            }
        }).then((response) => {
            const { signedRequest, url } = response.data
            this.uploadFile(file, signedRequest, url)
        }).catch(error => console.log(error))
    }

    uploadFile = (file, signedRequest, url) => {
        const options = {
            headers: {
                'Content-Type': file.type
            }
        }
        axios.put(signedRequest, file, options)
            .then(res => {
                this.setState({ isUploading: false, url })
            })
            .catch(error => {
                this.setState({
                    isUploading: false
                })
                if (error.response.status === 403) {
                    alert(`Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
                        error.stack
                        }`)
                } else {
                    alert(`Error: ${error.status}\n ${error.stack}`)
                }
            })
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        let { admin } = this.props.client
        let { gallery } = this.state
        let map = gallery.map(gallery => {
            return (
                <div key={gallery.gallery_id} className="content-middle">
                    <GalleryDisplay
                        gallery={gallery}
                        deleteGallery={this.deleteGallery} />
                </div>
            )
        })
        //AMAZON S3
        const { url } = this.state
        return admin ? (
            <div>
                <Header />
                <div className="create-gallery">
                    {/* //AMAZON S3--------------------------------------------------------------------------------- */}
                    <div>
                        <div>
                            <img className="gallery-test-image" src={url} alt="" width="200px" />
                            <Dropzone
                                onDropAccepted={this.getSignedRequest}
                                style={{
                                    position: 'relative',
                                    width: 200,
                                    height: 200,
                                    borderWidth: 7,
                                    marginTop: 100,
                                    borderColor: 'rgb(102, 102, 102)',
                                    borderStyle: 'dashed',
                                    borderRadius: 5,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: 28,
                                }}
                                accept='image/*'
                                multiple={false} >
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p className="button">Select File</p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                        <div className="flex-gall">
                            <input value={this.state.gallery_service_title} name="gallery_service_title" onChange={(e) => this.handleChange('gallery_service_title', e.target.value)} placeholder="Service Title"></input>
                            <input value={this.state.description} name="description" onChange={(e) => this.handleChange('description', e.target.value)} placeholder="Service Description"></input>
                            <button onClick={this.createGallery} className="button create-gall">Create</button>
                        </div>
                    </div>
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