import React, { useState, useEffect } from "react";
import "./jobpost.scss";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import { useGlobal } from "../Context/Context";

const Jobpost = () => {
  const{cancel, fetchSingleJob, setFetchSingleJob, addSkillsToList} = useGlobal();
  console.log("fetchSingleJob1", fetchSingleJob);

  useEffect(() => {
    setFetchSingleJob(null);
  }, [setFetchSingleJob]);
  
  const initialData = {
    companyName: "",
    addLogo: "",
    jobPosition: "",
    salary: "",
    jobType: "",
    remote: "",
    location: "",
    description: "",
    aboutCompany: "",
    skills: "",
    information: "",
    createdAt:"",
    updatedAt:""
  };


  //check if we are in add mode or edit mode
  const initialFormData = fetchSingleJob ? { ...fetchSingleJob.fetchJob }: initialData;
  
  console.log("fetchSingleJob", fetchSingleJob);

  console.log("initialData", initialData);
  
  const [jobPostData, setJobPostData] = useState(initialFormData);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobPostData({
      ...jobPostData,
      [name]: value,
    });
  };
  console.log("jobPostData", jobPostData); // Check the state after updating


  const handleJobSubmit = (e) => {
    e.preventDefault();
    jobPostData._id ? handleEditButton() : postJob();
  }

 

    const postJob=()=>{
      const registerToken = localStorage.getItem("token")
      console.log(registerToken)
      const headers = {
        'Authorization': `Bearer ${registerToken}`,
        'Content-Type': 'application/json', 
      };
    
   axios.post("https://job-portal-backend-seven.vercel.app/jobPost", jobPostData, {headers})
   .then((res)=>{
     setJobPostData(res.data)
     console.log(res.data)
     toast.success(res.data.message);
     addSkillsToList(jobPostData.skills)
    setTimeout(() => {
      setJobPostData(initialData)
      setFetchSingleJob(null);
      localStorage.removeItem('jobData');
    }, 1000);
   })
   .catch((error)=>{
    // console.error("Axios error:", error);
    console.log(error)
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    }
   })
  };

  const handleEditButton=()=>{
    const jobId = jobPostData._id;

    axios.put(`https://job-portal-backend-seven.vercel.app/updateJobPost`, jobPostData, {
      params: {
        _id: jobId,
      },
    })
      .then((res)=>{
        setJobPostData(res.data)
        console.log(res.data)
        toast.success(res.data.message);
       setTimeout(() => {
         setJobPostData(initialData)
       }, 1000);
      })
      .catch((error)=>{
       // console.error("Axios error:", error);
       console.log(error)
       if (error.response && error.response.data && error.response.data.message) {
         toast.error(error.response.data.message);
       }
      })

}
 

  return (
    <>
      <section className="jobPost-container">
        <div className="left">
          <div className="left-content">
            <div className="left-heading">
              <h1>Add job description</h1>
            </div>
            <div className="form-container">
              <form onSubmit={handleJobSubmit}>
                <div className="info">
                  <p>
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter your company name here"
                      value={jobPostData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>Add logo URL</label>
                    <input
                      type="text"
                      name="addLogo"
                      placeholder="Enter the link"
                      value={jobPostData.addLogo}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>Job position</label>
                    <input
                      type="text"
                      name="jobPosition"
                      placeholder="Enter job position"
                      value={jobPostData.jobPosition}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>Monthly salary</label>
                    <input
                      type="text"
                      name="salary"
                      placeholder="Enter Amount in rupees"
                      value={jobPostData.salary}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>Job Type</label>
                    <select
                      id="dropdown"
                      name="jobType"
                      value={jobPostData.jobType}
                      onChange={handleChange}
                      required
                    >
                      <option value="Select">Select</option>
                      <option value="part-time">part-time</option>
                      <option value="full-time">full-time</option>
                    </select>
                  </p>
                  <p>
                    <label>Remote/office</label>
                    <select
                      id="dropdown"
                      name="remote"
                      value={jobPostData.remote}
                      onChange={handleChange}
                      required
                    >
                      <option value="Select">Select</option>
                      <option value="remote">remote</option>
                      <option value="office">office</option>
                    </select>
                  </p>
                  <p>
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter Location"
                      value={jobPostData.location}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>Job Description</label>
                    <textarea
                      type="text"
                      name="description"
                      id="jobDescription"
                      placeholder="Type about your company"
                      value={jobPostData.description}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>About Company</label>
                    <textarea
                      type="text"
                      name="aboutCompany"
                      id="aboutCompany"
                      placeholder="Type about your company"
                      value={jobPostData.aboutCompany}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>Skills Required</label>
                    <input
                      type="text"
                      name="skills"
                      placeholder="Enter the must have skills"
                      value={jobPostData.skills}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label>Information</label>
                    <input
                      type="text"
                      name="information"
                      placeholder="Enter the additional information"
                      value={jobPostData.information}
                      onChange={handleChange}
                      required
                    />
                  </p>
                </div>
                <div className="buttons">
                  <button type="button" id="cancel-btn" onClick={cancel}>
                    Cancel
                  </button>
                  {
                    jobPostData._id ? (
                  <button type="submit" id="add-btn" >
                    Update Job
                  </button>
                    ):(
                      <button type="submit" id="add-btn" >
                    + Add Job
                  </button>
                    )
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="heading">
            <p>Recruiter add job details here</p>
          </div>
        </div>
      </section>
      <Toaster
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            width: "350px",
            fontSize: "18px",
          },
        }}
      />
    </>
  );
};

export default Jobpost;
