import React, { Component } from 'react';
import axios from "axios";
import './Carter.css';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'


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
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        const { name, email, message } = this.state;
        axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <div className='total'>
                <Jumbotron >
                    <Container >
                        <h1>Ask for Appointments Here!</h1>
                    </Container>
                </Jumbotron>
                <div className="email">
                    <Form style={{ width: "600px", justifyContent: "center" }}>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            /> <br />
                        </FormGroup>

                        <FormGroup></FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                        /> <br />

                        <FormGroup></FormGroup>
                        <Label for="message">Message:</Label>
                        <Input className="textArea"
                            type="textarea"
                            name="message"
                            onChange={this.handleChange}
                            placeholder="Check for availability on the schedule!!"
                        /> <br />
                        <Link to={`/cart`}>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </Link>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Carter;