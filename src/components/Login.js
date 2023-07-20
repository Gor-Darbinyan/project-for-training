import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import  Form from './Form'

const Login = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, password)
           .then(console.log)
           navigate('/')
    }
  return (
    <Form title='sign in'
    handleClick={handleLogin}/>
  )
}

export default Login
