import React, { Component } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import SingleBar from "../progressbar";
import "../progressbar/progressbar.css"
import InputData from '../inputForm'


class Build extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleTempChange = this.handleTempSubmit.bind(this);
    }

    handleTempSubmit(temp) {
        this.setState({ temp });
        console.log(this.state);
    }

    render() {
        const temp = this.props.temp;
        return (
            <div>
                <InputData onTempChange={this.handleTempSubmit} />

                <div className="PageContainer">
                    <div className="App">
                        <OverlayTrigger placement="top"
                            defaultShow="true"
                            overlay={<Tooltip>{temp}</Tooltip>}>
                            <SingleBar />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        );
    };
}

export default Build;