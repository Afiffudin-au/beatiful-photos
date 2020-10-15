import React,{useState} from 'react'
import { auth } from '../firebase,'
import { useHistory } from 'react-router-dom'
import { LoadingProcess } from './loading/Loading'
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory()
  const handleSignIn = (e)=>{
    setLoading(true)
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
      .then(res=>{
        setLoading(false)
        history.push('/')
      }).catch(err=>{
        setLoading(false)
        alert(err)
      })
  }
  const handleSignUp = (e)=>{
    setLoading(true)
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
      .then(res=>{
        setLoading(false)
        history.push('/')
      }).catch(err=>{
        setLoading(false)
        alert(err)
      })
  }
  return (
    <div className="max-w-sm flex p-4 justify-center items-center h-screen mx-auto">
      <form className="flex flex-col w-full shadow-lg sm:shadow-2xl p-5 rounded">
        <h1  className="mb-5 text-center font-semibold text-blue-600">Login</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="mb-5 border border-blue-200 rounded px-2 py-2 outline-none"/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"  className="mb-5 border rounded px-2 py-2 border-blue-200 outline-none"/>
        <button onClick={handleSignIn} className="mb-5 text-white font-medium outline-none hover:bg-blue-700 bg-blue-600 rounded px-2 py-2 subpixel-antialiased">Sign In</button>
        <button onClick={handleSignUp} className="mb-5 text-white font-medium outline-none hover:bg-blue-700 bg-blue-600 rounded px-2 py-2 subpixel-antialiased">Create Account</button>
        {
          loading && LoadingProcess
        }
      </form>
    </div>
  )
}

export default Login
