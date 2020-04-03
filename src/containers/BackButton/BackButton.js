import React from "react";
import {Button} from "react-bootstrap";

class BackButton extends React.Component {
    static contextTypes = {
        router: () => true
    };

    render() {
        return (
            <Button
                variant="danger"
                className="back_button"
                onClick={this.context.router.history.goBack}
            >
                X
            </Button>
        );
    }
}

export default BackButton;