import React from 'react'
import "./jobDetails.scss"
import Header from "../HomePage/Header/Header"
import stipend from "../assets/stipend.png"

const JobDetails = () => {
  return (
    <>
      <section className='jobDetails-container'>
        <div className='header'>
        <Header/>
        </div>
        <div className='job-description'>
          <p>WordPress Development work from home job/internship at Adyaka Infosec Private Limited</p>
        </div>
        <div className='job-page'>
          <div className='job-box'>
          <div className='jobType'>
            <p>Full Time</p>
            <p>Google</p>
          </div>

          <div className='jobPosition'>
            <div className='heading'>
            <h1>WordPress Development</h1>
            </div>
            <div className='edit'>
              <button type='button'>Edit job</button>
            </div>
          </div>

          <div className='location'>
            <p><span>Bangalore</span> | India</p>
          </div>

          <div className='salary'>
            <div className='stipend-logo'>
              <img src={stipend} alt=''/>
              <p>Stipend</p>
            </div>
            <div className='price'>
              <p>Rs <span>25000</span>/month</p>
            </div>
          </div>

          <div className='about-company'>
            <h2>About company</h2>
            <p>We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.</p>
          </div>

          <div className='about-job'>
            <h2>About the job/internship</h2>
            <p>We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end.</p>
          </div>

          <div className='skills-container'>
            <h2>Skill(s) required</h2>
            <div className='skills'>
              <p>CSS</p>
              <p>HTML</p>
              <p>Javascript</p>
            </div>
          </div>

          <div className='information'>
            <h2>Additional Information</h2>
            <p>Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).</p>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JobDetails
