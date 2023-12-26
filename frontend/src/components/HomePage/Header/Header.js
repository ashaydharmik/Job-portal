import React from 'react'
import rectangle1 from "../../assets/Rectangle1.png"
import rectangle2 from "../../assets/Rectangle2.png"
import rectangle3 from "../../assets/Rectangle3.png"
import profile from "../../assets/profile.png"
import { useNavigate } from 'react-router-dom'
import "./header.scss"
const Header = () => {
const navigate = useNavigate();

  const login=()=>{
    navigate("/login")
  }
  const register=()=>{
    navigate("/register")
  }

  return (
    <>
      <div className='header'>
            <div className='rectangles'>
                <p id="rect1"><img src={rectangle1}  alt=''/></p>
                <p id="rect1"><img src={rectangle2} id="rect2" alt=''/></p>
                <p id="rect1"><img src={rectangle3} id="rect3" alt=''/></p>
            </div>
            <div className='menu'>
                <div className='menu-heading'>
                <h1>Jobfinder</h1>
                </div>
                <div className='buttons'>
                <button id="login" onClick={login}>Login</button>
                <button id='register' onClick={register}>Register</button>
                </div>
                {/* <div className='buttons2'>
                <button id='logout'>Logout</button>
                <p>Hello! Recruiter </p>
                <img src={profile} alt=''/>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Header
