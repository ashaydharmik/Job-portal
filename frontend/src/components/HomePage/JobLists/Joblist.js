import React,{useEffect, useState,}from 'react'
import "./joblist.scss"
import vector from "../../assets/Vector.png"
import flag from "../../assets/flag.png"
import { useGlobal } from '../../Context/Context';
import axios from "axios"


const Joblist = ({searchQuery, selectedSkills}) => {
  const { isRegistered, isLoggedIn } = useGlobal();
  const [fetchAllJobs, setFetchAllJobs] = useState([]);
const {handleViewJob, handleEditJob} = useGlobal()
const [searchedJobs, setSearchedJobs] = useState([])


  useEffect(() => {
    axios.get('https://job-portal-backend-3gkptgsif-ashays-projects-5d384c1a.vercel.app/getJobPost')
    .then((res) => {
      if (Array.isArray(res.data.jobPost)) {
        setFetchAllJobs(res.data.jobPost);
        
      }
      console.log(res.data);
    })
    .catch(error=>{
      console.log("NO JOBS FOUND", error)
    })
  }, []);


  useEffect(()=>{
    if(searchQuery && typeof searchQuery === 'string'){
      const query = searchQuery.toLowerCase();

      const filteredJob = fetchAllJobs.filter(job => job.jobPosition && job.jobPosition.toLowerCase().includes(query));
      
      if(selectedSkills.length > 0 ){
        const filteredBySkills = filteredJob.filter(job => job.skills.some(skill => selectedSkills.includes(skill)));
        setSearchedJobs(filteredBySkills)             
      }else{
        setSearchedJobs(filteredJob) 
      }

    }else if (selectedSkills.length > 0){ //if there is not query in search but skills are selected
      const filteredBySkills = fetchAllJobs.filter(job => job.skills.some(skill => selectedSkills.includes(skill)));
      setSearchedJobs(filteredBySkills)            
    }else{
      setSearchedJobs(fetchAllJobs)  
    }
    
  },[searchQuery, selectedSkills, fetchAllJobs])
 
  
  return (
    <>

      {searchedJobs.map((job) => (
        <div className='joblist' key={job._id}>
          <div className='logo'>
            <img src={job.addLogo} alt="" />
          </div>
          <div className='content'>
            <div className='left'>
              <div className='left-one'>
                <p>{job.jobPosition}</p>
              </div>
              <div className='left-two'>
                    <p><img src={vector} id="vector" alt=''/>{job.salary}</p>
                    <p><img src={flag} id="flag" alt=''/>{job.location}</p>
              </div>
              <div className='left-three'>
                <p>{job.jobType ? "Part time" : "Full time"}</p>
                <p>{job.remote ? 'Remote' : 'Office'}</p>
              </div>
            </div>
            <div className='right'>
              <div className='skills'>
                {job.skills.map((skill) => (
                  <p key={skill}>{skill}</p>
                ))}
              </div>
              <div className='buttons'>
                {isLoggedIn || isRegistered ? (
                  <>
                    <button type='button' id='edit' onClick={()=> handleEditJob(job._id)}>
                      Edit job
                    </button>
                    <button type='button' id='view' onClick={()=> handleViewJob(job._id)}>
                      View Details
                    </button>
                  </>
                ) : (
                  <button type='button' id='view' onClick={()=> handleViewJob(job._id)}>
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default Joblist;
