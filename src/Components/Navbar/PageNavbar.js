import React from "react";
import {Navbar, Button, Nav} from "react-bootstrap";
import {UserContext} from "../../context";

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
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg" className="navbar">
                <Navbar.Brand href="/">Home heroes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="navbar_collapse">
                    <Nav className="navbar_menu mr-auto text-center">
                        <Nav.Link href="/quests" className="navbar_item">My quests</Nav.Link>
                        <Nav.Link href="/shop" className="navbar_item">Shop</Nav.Link>
                        <Nav.Link href="/daily" className="navbar_item">Daily summary</Nav.Link>
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