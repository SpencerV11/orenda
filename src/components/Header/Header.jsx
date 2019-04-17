import React, { Component } from 'react'
import pic from './../../logo/OrendaAesthetics.png'
import './Header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getData } from './../../ducks/clientReducer'

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
            login: false
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

    toggleSignUp = () => {
        this.setState({
            signup: !this.state.signup
        })
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    
    async register() {
        const { first_name, last_name, phone_number, email, password } = this.state
        const response = await axios.post('/auth/register', {first_name, last_name, phone_number, email, password})
        if(response.data.loggedIn) {
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
        const res = await axios.post('/auth/login', {login_email, login_password})
        if(res.data.loggedIn) {
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

        
        console.log(this.props)
        // alert(this.props.client.firstName)
        console.log(res.data)
    }

    render() {
        let { signup, login } = this.state
        let { firstName, lastName } = this.props.client
        return (
            <div className="body">
                <div className="top-header">
                    <Link to="/"><img className="logo" src={pic} alt="logo" width="250" height="100" /></Link>
                    {
                        firstName ? 
                        (
                        <div className="welcome">Welcome, {firstName} {lastName} <a href="http://localhost:4000/logout"><button>Logout</button></a></div>
                        ) 
                        : 
                        (
                            <div></div>
                        )
                    }
                    <div className="top-header-links">
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/products"><div className="link">Products</div></Link>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/promotions"><div className="link">Promotions</div></Link>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/gallery"><div className="link">Gallery</div></Link>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/reviews"><div className="link">Reviews</div></Link>
                            <button onClick={this.toggleSignUp} className="button">SIGN UP</button>
                        
                        <button onClick={this.toggleLogin} className="button">LOGIN</button>
                    </div>
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
                    <input value={this.state.login_password} name="login_password" onChange={(e) => this.handleChange('login_password', e.target.value)} placeholder="Password"></input>
                    <button  onClick={() => this.login()} className="button space">Login</button>
                </div>
            </div>
        )
        
    }
}

let mapToState = (reduxState) => reduxState

export default connect(mapToState, {getData})(Header)