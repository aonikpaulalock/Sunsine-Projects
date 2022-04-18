
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase.init';
const Checkout = () => {
  // Input and Error State Field
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [adress, setAdress] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [user] = useAuthState(auth)
  const handlePhone = event => {
    setPhone(event.target.value)
  }
  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handleAdress = event => {
    setAdress(event.target.value)
  }

  const handleName = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setName('')
    setAdress('')
    setPhone('')
    toast('Your Booking Completed')
  }

  return (
    <div className="form-background">
      <Form onSubmit={handleSubmit}>
        <h3 className="heding-signup">Checkout</h3>
        <Form.Group className="">
          <Form.Control type="text" placeholder="Enter Name"
            className="input-design"
            required
            onBlur={handleName}
          />
        </Form.Group>
        <Form.Group className="">
          <Form.Control type="email" placeholder="Your Email" className="input-design" required value={user?.email} readOnly />
        </Form.Group>
        <Form.Group className="">
          <Form.Control onBlur={handleAdress} type="text" placeholder="Your Adress" className="input-design" required />
        </Form.Group>
        <Form.Group className="">
          <Form.Control onBlur={handlePhone} type="text" placeholder="Phone Number" className="input-design" required />
        </Form.Group>
        <button type="submit" className="signup-button">Checkout</button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;