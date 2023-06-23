import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    createUser(email, password)
    .then(result =>{
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(error =>{
        console.log(error);
    })


  }
  return (
    <Container className="login-container">
      <Form onSubmit={handleRegister} className="login-form w-50 mx-auto">
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
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
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
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept Term & Conditions"
          />
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
