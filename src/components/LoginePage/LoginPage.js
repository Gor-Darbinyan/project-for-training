import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <Login/>
      <p><Link to='/register'>Register</Link></p>
    </div>
  )
}

export default LoginPage
