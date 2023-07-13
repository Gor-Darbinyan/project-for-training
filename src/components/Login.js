import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import  Form from './Form'

const Login = () => {
    const dispatch = useDispatch()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, password)
           .then(console.log)
           .catch(console.log)
    }
  return (
    <Form title='sign in'
    handleClick={handleLogin}/>
  )
}

export default Login
