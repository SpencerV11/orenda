import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from './../Footer/Footer'
import './Home.css'
import background from './backgrounds/background1.jpeg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import { getData } from './../../ducks/clientReducer'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            login_email: '',
            login_password: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            password: '',
            signup: false,
            login: false
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    toggleSignUp = () => {
        this.setState({
            signup: !this.state.signup
        })
    }

    toggleLogin = () => {
        this.setState({
            login: !this.state.login
        })
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    // async register() {
    //     const { first_name, last_name, phone_number, email, password } = this.state
    //     const response = await axios.post('/auth/register', {first_name, last_name, phone_number, email, password})
    //     if(response.data.loggedIn) {
    //         this.props.history.push('/')
    //     }
    //     else {
    //         alert("Email in use.")
    //     }
    //     this.setState({
    //         first_name: '',
    //         last_name: '',
    //         phone_number: '',
    //         email: '',
    //         password: '',
    //         signup: false,
    //         login: false
    //     })
    // }

    async login() {
        const { login_email, login_password } = this.state
        const res = await axios.post('/auth/login', {login_email, login_password})
        if(res.data.loggedIn) {
            this.props.history.push('/')
        }
        else {
            console.log("Incorrect login")
        }
        this.setState({
            login_email: '',
            login_password: '',
            login: false
        })
    }

    render() {
        let { signup, login } = this.state
        console.log(this.props)
        return (
            <div>
                <Header toggleLogin={this.toggleLogin} toggleSignUp={this.toggleSignUp} />
                <div className={signup ? 'sign-up' : 'sign-up gone'}>
                    <input value={this.state.first_name} name="first_name" onChange={(e) => this.handleChange('first_name', e.target.value)} className="input-style" placeholder="First Name"></input>
                    <input value={this.state.last_name} name="last_name" onChange={(e) => this.handleChange('last_name', e.target.value)} className="input-style" placeholder="Last Name"></input>
                    <input type="number" value={this.state.phone_number} name="phone_number" onChange={(e) => this.handleChange('phone_number', e.target.value)} className="input-style" placeholder="Phone Number"></input>
                    <input value={this.state.email} name="email" onChange={(e) => this.handleChange('email', e.target.value)} className="input-style" placeholder="Email"></input>
                    <input value={this.state.password} name="password" onChange={(e) => this.handleChange('password', e.target.value)} className="input-style" placeholder="Password"></input>
                    <button onClick={() => this.register()} className="button input-style">Sign Up</button>
                </div>
                <div className={login ? 'login' : 'login gone2'}>
                <input value={this.state.login_email} name="login_email" onChange={(e) => this.handleChange('login_email', e.target.value)} className="input-style" placeholder="Email"></input>
                    <input value={this.state.login_password} name="login_password" onChange={(e) => this.handleChange('login_password', e.target.value)} placeholder="Password"></input>
                    <button  onClick={() => this.login()} className="button space">Login</button>
                    
                </div>
                <div className="main-content">
                    <img className="background" src={background} alt="pic" />
                </div>
                <div className="under-main">
                    <div className="box-display">
                        <div className="title">Promotions</div>
                        <p className="box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla veritatis iure possimus tempore deleniti, tempora expedita perspiciatis.</p>
                        <Link to="/promotions"><button className="button">Promotions</button></Link>
                    </div>
                    <div className="box-display">
                        <div className="title">Services</div>
                        <p className="box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla veritatis iure possimus tempore deleniti, tempora expedita perspiciatis.</p>
                        <Link to="/services"><button className="button">Services</button></Link>
                    </div>
                    <div className="box-display">
                        <div className="title">About Me</div>
                        <p className="box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla veritatis iure possimus tempore deleniti, tempora expedita perspiciatis.</p>
                        <Link to="/aboutme"><button className="button">About Me</button></Link>
                    </div>
                </div>
                <div className="book-now">
                    <h2>Schedule your appointment today!</h2>
                    <button>Book Now</button>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(Home)