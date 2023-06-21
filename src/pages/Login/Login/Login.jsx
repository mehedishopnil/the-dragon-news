import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();


  return (
    <Container className="login-container">
      <Form className="login-form w-50 mx-auto">
        <h2 className="text-center text-bold pb-5">Login your account</h2>
        <p className="border-top pb-3"></p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="submit-btn" variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">
      
        </Form.Text>

        <p>Do not have any Account? Please <Link to='/register'>Resignter</Link> </p>
      </Form>
    </Container>
  );
};

export default Login;
