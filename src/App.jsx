import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

export default function App() {
  const [token, setToken] = useState(null)
  console.log(token)
  // const [successMessage, setSuccessMessage] = useState(null) console.log(message)
  return (
    <>
      <Authenticate token={token} />
      <SignUpForm setToken={setToken} />
    </>
  );
}


