import React, { useState } from 'react'
import "./login.scss"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";
import { useGlobal } from '../Context/Context';

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {email:"",password:""}
  const [formData, setFormData] = useState(initialValue)
  const {register} = useGlobal()

  const changeHandler=(e)=>{
    const {name,value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://job-portal-backend-3gkptgsif-ashays-projects-5d384c1a.vercel.app/login", formData, {
        withCredentials: true,
      });
  
      // Assuming your API response includes a token and user name
      const { accessToken, recruiterName } = response.data;
  
      // Store the token and user name in localStorage
      localStorage.setItem("token", accessToken);
      localStorage.setItem("userName", recruiterName);
  
      setFormData(response.data);
      console.log(response.data);
  
      toast.success(response.data.message);
  
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log("Error during login:", error);
  
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };
  

 

  return (
    <>
   
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
            <p>Don’t have an account? <span><a href='#' onClick={register}>Sign Up</a></span></p>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='heading'>
        <p>Your Personal Job Finder</p>
        </div>
      </div>
    </section>
    <Toaster
    toastOptions={{
      style: {
        background: '#363636',
        color: '#fff',
        width:"350px",
        fontSize:"18px"
      }
    }}
    />
    </>
  )
}

export default Login
