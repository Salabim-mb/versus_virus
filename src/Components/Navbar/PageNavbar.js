import React from "react";
import {Navbar, Button, Nav, Col, Row} from "react-bootstrap";
import {UserContext} from "../../context";
import myquests from "../../assets/myquests.png";
import allquests from "../../assets/allquests.png";
import shop from "../../assets/shop.png";
import daily_stats from "../../assets/dailystats.png";
import main_logo from "../../assets/logo.png";

class PageNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };

    renderButtonToolbar = () => {
      if (this.context.token !== undefined)
      return (
          <div>
              <Button className="navbar_button pull-left" inline href="/user" variant="outline-light" size="lg">Me</Button>
              <Button className="navbar_button pull-right" inline variant="outline-danger" size="lg">Log out</Button>
          </div>
      );
      else return (
            <div>
                <Button className="navbar_button pull-left" inline href="/register" variant="outline-light" size="lg">Register</Button>
                      <Button className="navbar_button pull-right" inline href="/login" variant="outline-danger" size="lg">Log in</Button>
            </div>
        );
    };

    render() {
        return (
            <Navbar fluid bg="dark" variant="dark" expand="lg" className="navbar">
                <Navbar.Brand href="/">
                    <Row>
                        {window.innerWidth > 768 ? <img src={main_logo} alt="" width="70" height="70" className="d-inline-block" /> : <img src={main_logo} alt="" width="40" height="40" className="d-inline-block" /> }
                        {window.innerWidth > 768 ? <h1 className="align-text-bottom">Home heroes</h1> : <h2>Home heroes</h2>}
                    </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="navbar_collapse">
                    <Nav className="navbar_menu mr-auto text-center">
                        <Nav.Link href="/myquests" className="navbar_item">
                            <Col className="vw-20">
                                <Row><img src={myquests} className="mx-auto d-block" alt=""/></Row>
                                <Row><p className="mx-auto d-block">My quests</p></Row>
                            </Col>
                        </Nav.Link>
                        <Nav.Link href="/allquests" className="navbar_item">
                            <Col className="vw-20">
                                <Row><img src={allquests} className="mx-auto d-block" alt=""/></Row>
                                <Row><p className="mx-auto d-block">All quests</p></Row>
                            </Col>
                        </Nav.Link>
                        <Nav.Link href="/shop" className="navbar_item">
                            <Col className="vw-20">
                                <Row><img src={shop} className="mx-auto d-block" alt=""/></Row>
                                <Row><p className="mx-auto d-block">Shop</p></Row>
                            </Col>
                        </Nav.Link>
                        <Nav.Link href="/daily" className="navbar_item">
                            <Col className="vw-20">
                                <Row><img src={daily_stats} className="mx-auto d-block" alt=""/></Row>
                                <Row><p className="mx-auto d-block">Daily summary</p></Row>
                            </Col>
                        </Nav.Link>
                    </Nav>
                    <div inline className="navbar_button_toolbar">
                        {this.renderButtonToolbar()}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

PageNavbar.contextType = UserContext;

export default PageNavbar;