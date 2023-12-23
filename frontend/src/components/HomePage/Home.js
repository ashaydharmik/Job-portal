import React from 'react'
import "./home.scss";

import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Joblist from './JobLists/Joblist';
import Header from './Header/Header';


const Home = () => {
  return (
    <>
      <section className='home-container'>
      <Header/>
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

        <div className='joblist-container'>
          <Joblist/>
        </div>
      </section>
    </>
  )
}

export default Home
