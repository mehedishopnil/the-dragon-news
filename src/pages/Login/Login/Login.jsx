import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Container className="login-container">
      <Form className="login-form w-50 mx-auto">
        <h2 className="text-center text-bold pb-5">Login your account</h2>
        <p className="border-top pb-3"></p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="submit-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
