import React, { Component } from 'react';
import axios from "axios";

class Carter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { name, email, message} = this.state;

        axios.post('/api/form', {
            name,
            email,
            message
        })

    }

    render() {
        return (
            <div>
                <form action="">
                    <label for="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                    /> <br />

                    <label for="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                    /> <br />

                    <label for="message">Message:</label>
                    <input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange}
                        placeholder="Check for availability on the schedule!!"
                    /> <br />

                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Carter;