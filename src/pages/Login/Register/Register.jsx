import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="login-container">
      <Form className="login-form w-50 mx-auto">
        <h2 className="text-center text-bold pb-5">Create a new account</h2>
        <p className="border-top pb-3"></p>

        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="link"
            name="photo-url"
            placeholder="Enter your image link"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Term & Conditions" />
        </Form.Group>

        <Button className="submit-btn" variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>

        <Form.Text>
          Already have an account? Please <Link to="/login">Login</Link>{" "}
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
