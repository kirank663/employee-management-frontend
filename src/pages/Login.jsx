import React, { useState } from 'react'
import axios from 'axios'

export default function Login(){
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(null)

  const submit = async (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post((import.meta.env.VITE_API_URL||'/api') + '/auth/login',{username, password})
      // store token
      localStorage.setItem('token', res.data.token)
      window.location.href = '/'
    }catch(err){
      setError('Invalid credentials')
    }
  }

  return (
    <div className="login-wrapper">
      <form onSubmit={submit} className="login-form">
        <h2>Sign in</h2>
        {error && <div className="error">{error}</div>}
        <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
