import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import '../../Styles/Signup.css'
import Provider from '../Provider/Provider';
import auth from '../../../Firebase.init';
import Loading from '../../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail,resetError] = useSendPasswordResetEmail(auth);
  const from = location?.state?.from?.pathname || '/'
  if (loading) {
    return <Loading />
  }
  if (user) {
    navigate(from, { replace: true })
  }

  const handleLoginEmail = event => {
    setEmail(event.target.value);
  }

  const handleLoginPassword = event => {
    setPassword(event.target.value)
  }

  const handleAllSubmit = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }
  const passwordReset = async (event) => {
    await sendPasswordResetEmail(email);
    toast('Reset Password Verifaction Message Sent');
  }
  return (
    <div className="form-background">
      <Form onSubmit={handleAllSubmit}>
        <h3 className="heding-signup">Login</h3>
        <Form.Group className="">
          <Form.Control onBlur={handleLoginEmail} type="email" placeholder="Enter Email"
            className="input-design" required />
        </Form.Group>
        <Form.Group className="">
          <Form.Control onBlur={handleLoginPassword} type="password" placeholder="Password" className="input-design" required />
        </Form.Group>
        <button type="submit" className="signup-button">Login</button>
      </Form>
      <p className="log-sign">
        New to Wed-Graphy ? <Link to='/signup' className='toggle-link'>Create Account</Link>
      </p>
      <p className="log-sign">
        Forget Password ?
        <span className="toggle-link" onClick={passwordReset}> Reset Password</span>
      </p>
      <Provider />
      <div>
        <h5 style={{ color: 'red' }}>{error?.message}</h5>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;