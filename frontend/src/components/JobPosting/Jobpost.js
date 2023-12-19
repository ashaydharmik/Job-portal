import React from 'react'
import "./jobpost.scss"

const Jobpost = () => {
  return (
    <>
      <section className='jobPost-container'>
        <div className='left'>
            <div className='left-content'>
                <div className='left-heading'>
                    <h1>Add job description</h1>
                </div>
                <div className='form-container'>
                <form>
              <div className='info'>
                <p> 
                <label>Company Name</label>
                <input type='text' name='' placeholder='Enter your company name here'/>
                </p>
                <p> 
                <label>Add logo URL</label>
                <input type='text' name='' placeholder='Enter the link'/>
                </p>
                <p> 
                <label>Job position</label>
                <input type='text' name='' placeholder='Enter job position'/>
                </p>
                <p> 
                <label>Monthly salary</label>
                <input type='text' name='' placeholder='Enter Amount in rupees'/>
                </p>
                <p> 
                <label>Job Type</label>
                <select id="dropdown" name="jobtype">
                    <option value="Select">Select</option>
                    <option value="part-time">part-time</option>
                    <option value="full-time">full-time</option>
                </select>
                </p>
                <p> 
                <label>Remote/office</label>
                <select id="dropdown" name="jobtype">
                    <option value="Select">Select</option>
                    <option value="remote">remote</option>
                    <option value="office">office</option>
                </select>
                </p>
                <p> 
                <label>Location</label>
                <input type='text' name='' placeholder='Enter Location'/>
                </p>
                <p> 
                <label>Job Description</label>
                <textarea type='text' name='' id="jobDescription"  placeholder='Type about your company'/>
                </p>
                <p> 
                <label>About Company</label>
                <textarea type='text' name='' id="aboutCompany"  placeholder='Type about your company'/>
                </p>
                <p> 
                <label>Skills Required</label>
                <input type='text' name='' placeholder='Enter the must have skills'/>
                </p>
                <p> 
                <label>Information</label>
                <input type='text' name='' placeholder='Enter the additional information'/>
                </p>
             
              </div>
              <div className="buttons">
                <button type="button" id='cancel-btn'>Cancel</button>
                <button type="submit" id='add-btn'>+ Add Job</button>
              </div>

            </form>
          </div>
            </div>
        </div>
        <div className='right'>
        <div className='heading'>
        <p>Recruiter add job details here</p>
        </div>
        </div>
      </section>
    </>
  )
}

export default Jobpost
