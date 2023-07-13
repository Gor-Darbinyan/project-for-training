import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../SignUp';
const RegisterPage = () => {
  return (
    <div>
      <h2>Register</h2>
      <SignUp/>
      <p><Link to='/login'>Login</Link></p>
    </div>
  )
}

export default RegisterPage
