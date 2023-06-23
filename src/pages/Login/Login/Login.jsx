import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const {userLogin} = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
    .then(result =>{
      const loginUser = result.user;
      console.log(loginUser) 
    })
    .catch(error =>{
      console.log(error);
    })
 }



  return  (
    <Container className="login-container">
      <Form onSubmit={handleLogin} className="login-form w-50 mx-auto">
        <h2 className="text-center text-bold pb-5">Login your account</h2>
        <p className="border-top pb-3"></p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Button className="submit-btn" variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">
      
        </Form.Text>

        <p>Do not have any Account? Please <Link to='/register'>Register</Link> </p>
      </Form>
    </Container>
  );
};

export default Login;
