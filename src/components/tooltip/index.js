import React, { Component } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import SingleBar from "../progressbar";
import "../progressbar/progressbar.css"
import InputData from './inputForm'


class Build extends Component {

    constructor(props) {
        super(props);
        this.state = { temp: "" };
        this.handleTempChange = this.handleSubmit.bind(this);
    }

    handleSubmit(temp) {
        this.setState({ temp });
        //console.log(this.state);
    }

    render() {
        const temp = this.state.temp;
        return (
            <div>
                <InputData onTempChange={this.handleSubmit} />

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