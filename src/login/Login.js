import React from 'react'

function Login() {
  const handleSignIn = (e)=>{
    e.preventDefault()
  }
  const handleSignUp = (e)=>{
    e.preventDefault()
  }
  return (
    <div className="max-w-sm flex justify-center items-center h-screen mx-auto">
      <form className="flex flex-col w-full gap-5 shadow-2xl p-5 rounded">
        <h1 className="text-center font-semibold text-blue-600">Login</h1>
        <input type="email" placeholder="email" className="border border-blue-200 rounded px-2 py-2 outline-none"/>
        <input type="password" placeholder="password"  className="border rounded px-2 py-2 border-blue-200 outline-none"/>
        <button  onClick={handleSignIn} className="text-white font-medium outline-none hover:bg-blue-700 bg-blue-600 rounded px-2 py-2 subpixel-antialiased">Sign In</button>
        <button onClick={handleSignUp} className="text-white font-medium outline-none hover:bg-blue-700 bg-blue-600 rounded px-2 py-2 subpixel-antialiased">Create Account</button>
      </form>
    </div>
  )
}

export default Login
