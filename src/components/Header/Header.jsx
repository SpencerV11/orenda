import React, { Component } from 'react'
import pic from './../../logo/OrendaAesthetics.png'
import './Header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getData, killClient } from './../../ducks/clientReducer'
import { withRouter } from 'react-router-dom'

class Header extends Component {
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
            login: false,
            hamslide: true
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    toggleLogin = () => {
        this.setState({
            login: !this.state.login
        })
    }

    toggleLoginSlider = () => {
        this.setState({
            login: !this.state.login,
            hamslide: !this.state.hamslide
        })
    }

    toggleSignUp = () => {
        this.setState({
            signup: !this.state.signup
        })
    }

    toggleSignUpSlider = () => {
        this.setState({
            signup: !this.state.signup,
            hamslide: !this.state.hamslide
        })
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }


    async register() {
        const { first_name, last_name, phone_number, email, password } = this.state
        const response = await axios.post(`/auth/register`, { first_name, last_name, phone_number, email, password })
        if (response.data.loggedIn) {
            console.log("Registered Account")
        }
        else {
            alert("Email in use.")
        }
        this.setState({
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            password: '',
            signup: false,
            login: false
        })
    }

    async login() {
        const { login_email, login_password } = this.state
        const res = await axios.post(`/auth/login`, { login_email, login_password })
        if (res.data.loggedIn) {
            this.componentDidMount()
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

    logout = () => {
        this.props.killClient()
        this.props.getData()
        this.props.history.push('/')
    }

    logoutSlider = () => {
        this.props.killClient()
        this.props.getData()
        // this.props.history.push('/')
        this.setState({
            hamslide: !this.state.hamslide
        })
    }

    render() {
        let { signup, login } = this.state
        let { firstName, lastName } = this.props.client
        return firstName ? (
            <div className="body">
                <div className="top-header">
                    <Link to="/"><img className="logo" src={pic} alt="logo" /></Link>
                    {
                        firstName ?
                            (
                                <div className="welcome">Welcome, {firstName} {lastName}</div>
                            )
                            :
                            (
                                <div></div>
                            )
                    }
                    <div className="top-header-links">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><button className="button">PRODUCTS</button></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/services"><button className="button">SERVICES</button></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/gallery"><button className="button">GALLERY</button></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/reviews"><button className="button">REVIEWS</button></Link>
                        <button onClick={() => this.logout()} className="button">LOGOUT</button>
                    </div>
                    <div className="top-header-links2">
                        <div onClick={() => this.setState({ hamslide: !this.state.hamslide })} className="hamburger"><i className="fas fa-bars"></i></div>
                    </div>
                </div>
                <div className={!this.state.hamslide ? "slider" : "slider gone"}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><button className="button">PRODUCTS</button></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/services"><button className="button">SERVICES</button></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/gallery"><button className="button">GALLERY</button></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/reviews"><button className="button">REVIEWS</button></Link>
                    <button onClick={() => this.logoutSlider()} className="button">LOGOUT</button>
                </div>
            </div>
        ) :
            (
                <div className="body">
                    <div className="top-header">
                        <Link to="/"><img className="logo" src={pic} alt="logo" /></Link>
                        {
                            firstName ?
                                (
                                    <div className="welcome">Welcome, {firstName} {lastName}</div>
                                )
                                :
                                (
                                    <div></div>
                                )
                        }
                        <div className="top-header-links">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><button className="button">PRODUCTS</button></Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/services"><button className="button">SERVICES</button></Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/gallery"><button className="button">GALLERY</button></Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/reviews"><button className="button">REVIEWS</button></Link>
                            <button onClick={this.toggleSignUp} className="button">SIGN UP</button>
                            <button onClick={this.toggleLogin} className="button">LOGIN</button>
                        </div>
                        <div className="top-header-links2">
                            <div onClick={() => this.setState({ hamslide: !this.state.hamslide })} className="hamburger"><i className="fas fa-bars"></i></div>
                        </div>
                    </div>
                    <div className={!this.state.hamslide ? "slider" : "slider gone"}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><button className="button">PRODUCTS</button></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/services"><button className="button">SERVICES</button></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/gallery"><button className="button">GALLERY</button></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/reviews"><button className="button">REVIEWS</button></Link>
                        <button onClick={this.toggleSignUpSlider} className="button">SIGN UP</button>
                        <button onClick={this.toggleLoginSlider} className="button">LOGIN</button>
                    </div>
                    {/* //SIGN UP CONDITIONAL RENDERING */}
                    <div className={signup ? 'sign-up' : 'sign-up gone'}>
                        <input value={this.state.first_name} name="first_name" onChange={(e) => this.handleChange('first_name', e.target.value)} className="input-style" placeholder="First Name"></input>
                        <input value={this.state.last_name} name="last_name" onChange={(e) => this.handleChange('last_name', e.target.value)} className="input-style" placeholder="Last Name"></input>
                        <input type="number" value={this.state.phone_number} name="phone_number" onChange={(e) => this.handleChange('phone_number', e.target.value)} className="input-style" placeholder="Phone Number"></input>
                        <input value={this.state.email} name="email" onChange={(e) => this.handleChange('email', e.target.value)} className="input-style" placeholder="Email"></input>
                        <input value={this.state.password} name="password" onChange={(e) => this.handleChange('password', e.target.value)} className="input-style" placeholder="Password"></input>
                        <button onClick={() => this.register()} className="button input-style">Sign Up</button>
                    </div>
                    {/* //LOGIN CONDITIONAL RENDERING */}
                    <div className={login ? 'login' : 'login gone2'}>
                        <input value={this.state.login_email} name="login_email" onChange={(e) => this.handleChange('login_email', e.target.value)} className="input-style" placeholder="Email"></input>
                        <input type="password" value={this.state.login_password} name="login_password" onChange={(e) => this.handleChange('login_password', e.target.value)} className="input-style" placeholder="Password"></input>
                        <button onClick={() => this.login()} className="button space">Login</button>
                    </div>
                </div>
            )

    }
}

let mapToState = (reduxState) => reduxState

export default withRouter(connect(mapToState, { killClient, getData })(Header))