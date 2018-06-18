import React from 'react'
import axios from 'axios'

import Button from './Button.js'
import './Login.css'
// import { actions }  from "../actions/users"
 
const onSubmit = e => {
  e.preventDefault()
  console.log(e.target);
  console.log(e.target.name.value);
  console.log(e.target.password.value)
  console.log(
    'onSubmit'
  )
  axios
    .post("http://localhost:3030/auth/signup", {
      username: e.target.name.value,
      password: e.target.password.value
    })
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.headers["x-access-token"])
      console.log('token',localStorage.getItem("token"))
    })
}

const protectedRoute = () => {
  const token = localStorage.getItem("token")
    axios({
      method: 'POST',
      url: "http://localhost:3030/auth/protected", 
       headers: {
         'Authorization': `Bearer ${token}`,
       },
      })
      .then(res => {
        console.log(res) //reste a ajouter les redirection si  token valide
      })
}

const Login = ({ name, id, login }) => {
  return <div className="contentGlob">
  <div className="login">
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <input type="password" name="password" />
      <Button type="submit">Login</Button>
    </form>
    <Button onClick={() => protectedRoute()}>Test</Button>
  </div>
  </div>
}

export default Login
