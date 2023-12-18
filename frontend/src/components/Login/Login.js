import React, { useState } from 'react'
import "./login.scss"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {email:"",password:""}
  const [formData, setFormData] = useState(initialValue)

  const changeHandler=(e)=>{
    const {name,value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("form submitted")
  }

  const handleClick=()=>{
    navigate("/")
  }
  return (
    <section className='login-container'>
      <div className='left'>
        <div className='left-content'>
          <div className='left-heading'>
            <h1>Already have an account?</h1>
            <p>Your personal job finder is here</p>
          </div>
          <div className='form-container'>
          <form onSubmit={handleSubmit}>
              <div className='info'>
              <input type='email' name='email' placeholder='Email' value={formData.email} onChange={changeHandler}  required/>            
              <input type='password' name='password' placeholder='Password' value={formData.password} onChange={changeHandler} required/>
              </div>
              
              <div className="buttons">
                <button type="submit">Sign In</button>
              </div>

            </form>
          </div>
          <div className='content'>
            <p>Don’t have an account? <span><a href='#' onClick={handleClick}>Sign Up</a></span></p>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='heading'>
        <p>Your Personal Job Finder</p>
        </div>
      </div>
    </section>
  )
}

export default Login
