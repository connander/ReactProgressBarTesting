import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class InputData extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        this.props.onTempChange(event.target.value);
        event.preventDefault();
    }

    render() {
        const temp = this.props.temp;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pick A Number</Form.Label>
                    <Form.Control placeholder="100" value = {temp} onChange={this.handleChange}/>
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}


export default InputData;