import React from "react";
import HoverOverlay from "containers/HoverOverlay";
import {Button, Col, Form, Row} from "react-bootstrap";

class CurrentQuest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            progress: null,
            completed: false
        }
    };

    componentDidMount() {
        const {name, desc, prog, completed} = this.props;
        this.setState({
            name: name,
            description: desc,
            progress: prog,
            completed: completed
        });
    };

    toggleCompleted = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }));
    };

    render() {
        return (
            <HoverOverlay message={this.state.description}>
                <Button variant="success">
                    <Col className="quest_text_details">
                        <Row>{this.state.name}</Row>
                        <Row>{this.state.progress}</Row>
                    </Col>
                    <Col className="quest_checkbox">
                        <Form.Check
                            type="checkbox"
                            defaultValue={this.toggleCompleted()}
                        />
                    </Col>
                </Button>
            </HoverOverlay>
        )
    }
}

export default CurrentQuest;