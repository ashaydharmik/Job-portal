import React from 'react'
import "./joblist.scss"
import logo from "../../assets/logo.png"
import group from"../../assets/Group1.png"
import vector from "../../assets/Vector.png"
import flag from "../../assets/flag.png"
import { useGlobal } from '../../Context/Context';

const Joblist = () => {
    const {isRegistered, isLoggedIn} = useGlobal();

  return (
    <>
      <div className='joblist'>
        <div className='logo'>
            <img src={logo} alt=''/>
        </div>
        <div className='content'>
            <div className='left'>
                <div className='left-one'>
                    <p>Frontend Developer</p>
                </div>
                <div className='left-two'>
                    <p><img src={group} id="group" alt=''/>11-50</p>
                    <p><img src={vector} id="vector" alt=''/>50,000</p>
                    <p><img src={flag} id="flag" alt=''/>Delhi</p>
                </div>
                <div className='left-three'>
                    <p>Office</p>
                    <p>Full time</p>
                </div>
               
            </div>
            <div className='right'>
                <div className='skills'>
                    <p>Frontend</p>
                    <p>css</p>
                    <p>Javascript</p>
                    <p>HTML</p>
                </div>
                {
                    isLoggedIn || isRegistered ? (
                        <div className='buttons'>
                            <button type='button' id='edit'>Edit job</button>
                            <button type='button' id='view'>View Details</button>
                        </div> 
                    ):(
                <div className='buttons'>
                    <button type='button'id='view'>View Details</button>
                </div>
                    )
                }
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Joblist
