import React from "react";
import {Card, Container} from 'react-bootstrap';
import Button from "react-bootstrap/Button";

const MenuCard = ({title, body, hide}) => (
    <Container className="MenuCard_container">
        <Card className="MenuCard_card">
            <Card.Header as="h2" className="MenuCard_header">
                {title}
                <Button variant="danger" className="MenuCard_button_close" onClick={e=> hide(e)}>X</Button>
            </Card.Header>
            <Card.Body className="MenuCard_body">
                {body}
            </Card.Body>
        </Card>
    </Container>
);

export default MenuCard;