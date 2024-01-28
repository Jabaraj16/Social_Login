
import './App.css';
import React, { useState } from 'react'
import {auth, google,twitter,github} from './config/firbase'
import {signInWithPopup, signOut} from 'firebase/auth' 

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  
  
  const LoginFalse = () => (
    <div className='align-items-center w-100'>
      <h1>Social Login</h1>
      <div className='border shadow align-items-center w-100'>
      <div className='d-flex flex-column justify-content-center align-items-center p-5'>
        <button className='btn mt-2  w-25' style={{backgroundColor:'#de5246', color:'white'}}
          onClick={() => login(google)}>
            Google
          </button>
          <button className='btn mt-2  w-25' style={{ backgroundColor:'#3b5998', color:'white'}}
          onClick={() => login(facebook)}>
            Facebook
          </button>
          <button className='btn mt-2 w-25' style={{ backgroundColor:'#00acee', color:'white'}}
          onClick={() => login(twitter)}>
             Twitter
          </button>
          <button className='btn mt-2 w-25' style={{ backgroundColor:'black', color:'white'}}
          onClick={() => login(github)}>
             GitHub
          </button>
      </div>
      </div>
      
    </div>
  )
  
  const LoginTrue = () => (
    <>
      <h1>Welcome!</h1>
      <img src={user.photoURL} style={{width:120}}/>
      <p>Welcome {user.displayName}! Your account {user.email} has been successfully logged in at {user.metadata.lastSignInTime}</p>
      <button style={{width:150}} onClick={logout}>
        Logout
      </button>
    </>
  )
  
  const login = async(provider) => {
    const result = await signInWithPopup(auth, provider) 
    console.log(typeof(result));
    setUser(result.user)
    
    setIsLogin(true)
    console.log(result)
  }

  const logout = async() => {
    const result = await signOut(auth)
    setUser(null)
    setIsLogin(false)
    console.log(result)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      
      {isLogin && user ? <LoginTrue/> : <LoginFalse/>}

      </header>
    </div>
  );
}

export default App;
