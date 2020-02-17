import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class InputData extends Component {

    constructor(props) {
        super(props);
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
            <Form>
                <Form.Group>
                    <Form.Label>Pick A Number</Form.Label>
                    <Form.Control placeholder="100" value = {temp} onSubmit={this.handleSubmit} onChange={this.handleChange} />
                </Form.Group>
                <Button type="submit">
                    Words
                </Button>
            </Form>
        );
    }
}


export default InputData;