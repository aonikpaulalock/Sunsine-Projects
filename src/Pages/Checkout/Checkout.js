
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Checkout = () => {
  const navigate = useNavigate();
  // Input and Error State Field
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword()

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError("Don't match password")
      return;
    }
    createUserWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return (
    <div className="form-background">
      <Form onSubmit={handleSubmit}>
        <h3 className="heding-signup">Checkout</h3>
        <Form.Group className="">
          <Form.Control type="text" placeholder="Enter Name"
            className="input-design"
            required
          />
        </Form.Group>
        <Form.Group className="">
          <Form.Control  type="email" placeholder="Your Email" className="input-design" required />
        </Form.Group>
        <Form.Group className="">
          <Form.Control onBlur={handleConfirmPassword} type="text" placeholder="Your Adress" className="input-design" required />
        </Form.Group>
        <Form.Group className="">
          <Form.Control onBlur={handleConfirmPassword} type="text" placeholder="Phone Number" className="input-design" required />
        </Form.Group>
        <button type="submit" className="signup-button">Checkout</button>
      </Form>
    </div>
  );
};

export default Checkout;