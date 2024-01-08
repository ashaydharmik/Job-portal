import React, { useEffect } from 'react';
import './jobDetails.scss';
import Header from '../HomePage/Header/Header';
import stipend from '../assets/stipend.png';
import { useGlobal } from '../Context/Context';

const JobDetails = () => {
  const {fetchSingleJob, setFetchSingleJob,isLoggedIn,isRegistered,handleEditJob} = useGlobal(null);

  useEffect(() => {
    const storedJobData = localStorage.getItem('jobData');
    if (storedJobData) {
      const parsedJobData = JSON.parse(storedJobData);
      setFetchSingleJob(parsedJobData);
    }
  }, [setFetchSingleJob]);

  if (!fetchSingleJob || !fetchSingleJob.fetchJob) {
    return <h1>JOB NOT FOUND!!</h1>; 
  }

  const {
    _id,
    companyName,
    addLogo,
    jobPosition,
    salary,
    jobType,
    location,
    aboutCompany,
    description,
    skills,
    information,
  } = fetchSingleJob.fetchJob;

  return (
    <>
      <section className='jobDetails-container'>
        <div className='header'>
          <Header />
        </div>
        <div className='job-description'>
          <p>{description}</p>
        </div>
        <div className='job-page'>
          <div className='job-box'>
            <div className='jobType'>
              <p>{jobType}</p>
              <p><img src={addLogo} alt='' id='profile'/></p>
              <p>{companyName}</p>
            </div>

            <div className='jobPosition'>
              <div className='heading'>
                <h1>{jobPosition}</h1>
              </div>
              <div className='edit'>
                {
                  isLoggedIn || isRegistered ? (
                    <button type='button' onClick={()=> handleEditJob(_id)}>Edit job</button>
                  ):(<p></p>)
                }
              </div>
            </div>

            <div className='location'>
              <p>
                <span>{location}</span> | India
              </p>
            </div>

            <div className='salary'>
              <div className='stipend-logo'>
                <img src={stipend} alt='' />
                <p>Stipend</p>
              </div>
              <div className='price'>
                <p>
                  Rs <span>{salary}</span>/month
                </p>
              </div>
            </div>

            <div className='about-company'>
              <h2>About company</h2>
              <p>{aboutCompany}</p>
            </div>

            <div className='skills-container'>
              <h2>Skill(s) required</h2>
              <div className='skills'>
                {skills.map((skill) => (
                  <p key={skill}>{skill}</p>
                ))}
              </div>
            </div>

            <div className='information'>
              <h2>Additional Information</h2>
              <p>{information}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
