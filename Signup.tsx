import { useState,type FormEvent } from 'react'
import type { User } from '../types/User'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const savedUsers = localStorage.getItem('users')
    let users: User[] = []
    if (savedUsers) {
  users = JSON.parse(savedUsers)
}
const emailExists = users.some((user)=>user.email==email)
 if(emailExists){
  alert("This email is already registerd")
 }  
 const newUser: User={
  id:crypto.randomUUID(),
  name:name,
  email:email,
  password:password
 }
  users.push(newUser)
  localStorage.setItem('users',JSON.stringify(users))
  console.log(users)
  }
  
  return (
  <main>
    <h1>Signup</h1>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      required
    ></input>
    <input type='email' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} required></input>
    <input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} required minLength={6}/>
  <button type='submit'>Sign up</button>
  </form>
  </main>
)
}

export default Signup