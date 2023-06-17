import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaBeer,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
import './RightNav.css'

const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button className="mb-2 px-5" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="mb-2 px-5" variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>

      <div>
        <h4 className="pb-2 pt-4">Find Us On</h4>
        <div className="my-2">
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter /> Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <div className="mt-4">
        <QZone></QZone>
      </div>

      <div className="bg-container ">
        <img src={bg} alt="" />
        <div className="amazing-info">
          <h2 className="pb-3">Create an Amazing Newspaper</h2>
          <p className="pb-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className=" me-2 px-4 py-3  rounded-0 " variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
