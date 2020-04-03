import React from "react";
import {Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";

class HoverOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    renderTooltip = (message) => {
        return (
            <Tooltip id="overlay_tooltip" {...props}>
                {message}
            </Tooltip>
        )
    };

    render() {
        const {message, children} = this.props;
        return (
            <OverlayTrigger overlay={this.renderTooltip(message)} placement="right">
                {children}
            </OverlayTrigger>
        );
    }
}

export default HoverOverlay;