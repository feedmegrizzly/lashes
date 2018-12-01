import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    cancel() {
        this.setState({
            email: '',
            password: ''
        })
    }

    // Handle login
    login(e) {
        e.preventDefault();
        
        let { email, password } = this.state;
        let usr = {
            email,
            password
        }

        axios.post('/api/login', usr)
            .then(res => {
                alert("Login");
                this.cancel();
            })
    }
    
    // Handle register
    addUser(e) {
        e.preventDefault();

        let { email, password } = this.state;
        let usr = {
            email,
            password
        }

        axios.post('/api/usr', usr)
            .then(res => {
                alert("User Added");
                this.cancel();
            })
    }


    render() {
        return (
            <div className="login">
                <div className="loginCard">
                    <div className="inputs">
                        <form>
                            <input classproperty="email" className="inputText" name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email" />    <br />
                            <input classproperty="password" className="inputText" name="password" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={this.state.password} onChange={this.handleChange} placeholder="Password" />          <br />
                        </form>
                    </div>
                    <div className="buttons">
                        <button onClick={this.addUser}>Create Account</button>
                        <button onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
