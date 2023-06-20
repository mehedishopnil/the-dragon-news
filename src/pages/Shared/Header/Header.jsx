import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import "./Header.css";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../providers/AuthProvider";

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
      <div className="d-flex justify-content-center mb-5">
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
      <div></div>
    </Container>
  );
};

export default Header;
