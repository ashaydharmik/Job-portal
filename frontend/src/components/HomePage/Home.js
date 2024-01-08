import React, { useState, useEffect } from 'react'
import "./home.scss";

import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Joblist from './JobLists/Joblist';
import Header from './Header/Header';
import { useGlobal } from '../Context/Context';


const Home = () => {
  const {isRegistered, isLoggedIn,addJob} = useGlobal();
  const [selectedSkills, setSelectedSkills] = useState([])
  const [allSkills, setAllSkills] = useState([]);
  const [searchQuery,setSearchQuery] = useState([])

  useEffect(() => {
    // Retrieve skills from local storage
    const storedSkills = localStorage.getItem('skills');
  
    if (storedSkills) {
      // Parse the storedSkills string into a JavaScript array
      const parsedSkills = JSON.parse(storedSkills);
  
      // Remove duplicates and update the state
      const uniqueSkills = Array.from(new Set(parsedSkills)).filter(skill => skill.trim() !== '');
      setAllSkills(uniqueSkills);
    }
  }, []);
  

  const handleSelectedSkills = (e) => {
    const selectedSkill = e.target.value;
    // Exclude default value and prevent duplicates
    if (selectedSkill !== "skills" && !selectedSkills.includes(selectedSkill)) {
      setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, selectedSkill]);
    }
  }

 

 
  const handleDeleteSkills = (deleteSkill) => {
    // Update the selectedSkills state by filtering out the deleted skill
    const updatedSkills = selectedSkills.filter(skill => skill !== deleteSkill);
    setSelectedSkills(updatedSkills);
  }

  //clear button functionality
  const deleteAllSelectedSkills=()=>{
    setSelectedSkills([])
  }
  
  
  return (
    <>
      <section className='home-container'>
      <Header/>
        <div className='search-container'>
            <div className='inner'>
                <div className='search-bar'>
                    <BsSearch />
                    <input type='text'  name='search' placeholder='Type any job title'
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                   />
                </div>
                <div className='filter-container'>
                  {
                     
                    isLoggedIn || isRegistered ? (
                      <>
                  <div className='inner-filter'>
                    <div className='left'>
                    <select
                      id="select"
                      name="skills"
                      onChange={handleSelectedSkills}
                    >
                      <option value="skills">Skills</option>
                          {allSkills.map((skill) => (
                            <option key={skill} value={skill}>
                              {skill}
                            </option>
                      ))}

                    </select>
                    </div>
                    <div className='middle'>
                    {selectedSkills.map((skill) => (
                        <p key={skill} className="box">
                          <p>{skill}</p><span onClick={() => handleDeleteSkills(skill)}><RxCross1 /></span>
                        </p>
                      ))}                        
                    </div>
                    <div className='right'>
                        <p  onClick={() => deleteAllSelectedSkills()}>clear</p>
                    </div>
                  </div>
                  <div className='addPost'>
                  <button type='button' id="postJob" onClick={addJob}>+ Add Job</button>
                   </div>
                   </>
                    ):(                  
                    <div className='inner-filter'>
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

                    )
                  }
                </div>
            </div>
        </div>

        <div className='joblist-container'>
          <Joblist searchQuery={searchQuery} selectedSkills={selectedSkills}/>
        </div>
      </section>
    </>
  )
}

export default Home
