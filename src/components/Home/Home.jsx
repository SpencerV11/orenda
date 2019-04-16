import React, { Component } from 'react'
import Header from '../Header/Header'
import './Home.css'
import background from './backgrounds/background1.jpeg'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            signup: false,
            login: false
        }
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

    async register() {
        const { firstName, lastName, phoneNumber, email, password } = this.state
        console.log(firstName)
        const response = await axios.post('/auth/register', {firstName, lastName, phoneNumber, email, password})
        if(response.data.loggedIn) {
            return response.status(200).send('Account Created')
        }
        else {
            alert('Registration Failed..')
        }
    }

    render() {
        let { signup } = this.state
        console.log(this.state)
        return (
            <div>
                <Header toggleLogin={this.toggleLogin} toggleSignUp={this.toggleSignUp} />
                <div className={signup ? 'sign-up' : 'sign-up gone'}>
                    <input value={this.state.firstName} name="firstName" onChange={(e) => this.handleChange('firstName', e.target.value)} className="input-style" placeholder="First Name"></input>
                    <input value={this.state.lastName} name="lastName" onChange={(e) => this.handleChange('lastName', e.target.value)} className="input-style" placeholder="Last Name"></input>
                    <input type="number" value={this.state.phoneNumber} name="phoneNumber" onChange={(e) => this.handleChange('phoneNumber', e.target.value)} className="input-style" placeholder="Phone Number"></input>
                    <input value={this.state.email} name="email" onChange={(e) => this.handleChange('email', e.target.value)} className="input-style" placeholder="Email"></input>
                    <input value={this.state.password} name="password" onChange={(e) => this.handleChange('password', e.target.value)} className="input-style" placeholder="Password"></input>
                    <button onClick={this.register} className="input-style" className="button">Sign Up</button>
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
            </div>
        )
    }
}

export default Home