import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <p><Link to='/register'>Register</Link></p>
    </div>
  )
}

export default LoginPage
