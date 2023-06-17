import React from "react";
import logo from "../../../assets/logo.png";
import "./Header.css";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Container>
      {/*********
       * Logo and Date *
       * ***********/}
      <div className="text-center header-content py-5">
        <img src={logo} alt="" />
        <p className="pt-3 ">Journalism Without Fear or Favour</p>
        <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
      </div>

      {/*********
       * Important Notification *
       * ***********/}
      <div className="d-flex justify-content-center">
        <div className="d-flex notification-container justify-content-center">
          <Button className=" me-2 px-4 rounded-0 " variant="danger">
            Latest
          </Button>
          <Marquee speed={60}>
            <h6>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </h6>
          </Marquee>
        </div>
      </div>

      {/*********
       * Main Navbar *
       * ***********/}
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-white my-5">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto d-flex ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#about">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button className=" me-2 px-4 rounded-0 " variant="secondary">
                    Login
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
