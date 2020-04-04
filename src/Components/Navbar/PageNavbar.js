import React from "react";
import {Navbar, Button, Nav, Row, Col} from "react-bootstrap";

class PageNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };

    renderButtonToolbar = () => {
      //if (logged in)
      return (
          <div>
              <Button className="navbar_button pull-left" inline variant="outline-light" size="lg">Me</Button>
              <Button className="navbar_button pull-right" inline variant="outline-secondary" size="lg">Log out</Button>
          </div>
      );
      // else return (
      //       <div>
      //           <Button variant="outline-light" >Register</Button>
      //           <Button variant="outline-secondary" >Log in</Button>
      //       </div>
      //   );
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

export default PageNavbar;