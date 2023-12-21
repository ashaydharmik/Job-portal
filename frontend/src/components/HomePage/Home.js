import React from 'react'
import "./home.scss";
import rectangle1 from "../assets/Rectangle1.png"
import rectangle2 from "../assets/Rectangle2.png"
import rectangle3 from "../assets/Rectangle3.png"
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Home = () => {
  return (
    <>
      <section className='home-container'>
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
                <button id="login">Login</button>
                <button id='register'>Register</button>
                </div>
            </div>
        </div>

        <div className='search-container'>
            <div className='inner'>
                <div className='search-bar'>
                    <BsSearch />
                    <input type='text'  name='search' placeholder='Type any job title'/>
                </div>
                <div className='filter-container'>
                    <div className='left'>
                    <select
                      id="select"
                      name="skills"
                    >
                      <option value="skills">skills</option>
                      <option value="frontend">frontend</option>
                      <option value="css">css</option>
                      <option value="javascript">javascript</option>
                    </select>
                    </div>
                    <div className='middle'>
                        <p className="box"><p>frontend</p><span><RxCross1 /></span></p>
                        <p className="box"><p>css</p><span><RxCross1 /></span></p>
                        <p className="box"><p>javascript</p><span><RxCross1 /></span></p>
                        
                        
                    </div>
                    <div className='right'>
                        <p>clear</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
