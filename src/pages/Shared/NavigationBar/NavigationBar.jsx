import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
      logOut()
      .then()
      .catch(error =>
        console.log(error)
      )
    }

    

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-white my-5">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex nav-menu ">
              <Nav.Link>
                <Link to="/category/0">Home</Link>
              </Nav.Link>
              <Nav.Link to="#about">About</Nav.Link>
              <Nav.Link to="#about">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link className="d-flex" href="#deets">
                  <FaUserCircle className="fs-4 me-2"></FaUserCircle>{" "}
                  <h6>{user.displayName}</h6>
                </Nav.Link>
              )}

              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Link to="/register">
                    <Button onClick={handleLogout}
                      className="login me-2 px-4 rounded-0 "
                      variant="secondary"
                    >
                      LogOut
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                  <Button
                    className="login me-2 px-4 rounded-0 "
                    variant="secondary"
                  >
                    Login
                  </Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
