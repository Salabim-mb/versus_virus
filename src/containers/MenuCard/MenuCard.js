import React from "react";
import {Card, Container} from 'react-bootstrap';
import "./MenuCard.css";
import BackButton from "../BackButton";

class MenuCard extends React.Component {
  render() {
      const {title, children} = this.props;
      return (
          <Container className="MenuCard_container">
              <Card className="MenuCard_card mx-auto align-middle px-auto">
                  <Card.Header as="h2" className="MenuCard_header">
                      {title}
                     <BackButton className="float-right"/>
                  </Card.Header>
                  <Card.Body className="MenuCard_body">
                      {children}
                  </Card.Body>
              </Card>
          </Container>
      );
  }
};

export default MenuCard;