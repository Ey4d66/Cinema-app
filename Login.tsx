import { useState,type FormEvent } from 'react'
import type { User } from '../types/User'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const savedUsers = localStorage.getItem('users')

let users: User[] = []

if (savedUsers) {
  users = JSON.parse(savedUsers)
  const matchedUser = users.find(
  (user) =>
    user.email.toLowerCase() === email.toLowerCase() &&
    user.password === password
)
if (!matchedUser) {
  alert('Email or password is incorrect')
  return
}

localStorage.setItem('currentUser', JSON.stringify(matchedUser))
navigate('/')
}


console.log(users)
}
  return (
    <main>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <input type="email" placeholder='Email' value={email} onChange={(event) =>setEmail(event.target.value)} required />
    <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  required
/>
<button type='submit'>Login</button>
    </form>
    </main>
  )
}

export default Login