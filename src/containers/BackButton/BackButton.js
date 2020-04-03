import React from "react";
import {Button} from "react-bootstrap";
import {Redirect, useHistory} from "react-router-dom";

class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prev_location: "",
            redirect: false,
            matching_history: true
        }
    }

    renderRedirect = () => {
        if (this.state.redirect && !this.state.matching_history)
            return (
                <Redirect to={this.state.prev_location}/>
            );
    };

    render() {
        return (
            <Button
                variant="danger"
                className="back_button"
                // onClick={history.back()}
            >
                X
            </Button>
        );
    }
}

export default BackButton;