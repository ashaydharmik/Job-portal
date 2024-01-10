import axios from "axios";
import React, { useContext,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUserName] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)
    const [fetchSingleJob, setFetchSingleJob] = useState(null)
    const [allSkills, setAllSkills] = useState([])

    const login=()=>{
        navigate("/login")
      }
      
    const register=()=>{
    navigate("/register")
    }
    const logOut=()=>{
        setIsLoggedIn(false)
        setIsRegistered(false)
        localStorage.removeItem("userName")
    }

    const addJob=(e)=>{
      e.preventDefault();
        navigate("/jobPost")
    }

    const cancel=()=>{
        navigate("/")
    }

    useEffect(()=>{
        const storedUserName = localStorage.getItem("userName")
        if(storedUserName){
          setUserName(storedUserName)
          setIsLoggedIn(true)
          setIsRegistered(true)
        }
      },[])

//to fetch single job view details button function
const handleViewJob = (jobId) => {
    axios.get('https://job-portal-backend-5gknlj8lh-ashays-projects-5d384c1a.vercel.app/fetchJobPost',
   {
      params: {
        _id: jobId,
      }
    })
    .then((res) => {
      const jobData = res.data;
      if (jobData) {
        console.log(jobData);
        setFetchSingleJob(jobData);
        localStorage.setItem('jobData', JSON.stringify(jobData));
        navigate('/jobDetails');
      } else {
        console.log('Job data is undefined.');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  //handle edit job button functionality
  const handleEditJob = (jobId) => {
    axios
      .get('https://job-portal-backend-3gkptgsif-ashays-projects-5d384c1a.vercel.app/fetchJobPost',
    {
        params: {
          _id: jobId,
        },
      })
      .then((res) => {
        const jobData = res.data;
        if (jobData) {
          setFetchSingleJob(jobData); // Update state with the fetched data
          console.log('Job data fetched successfully');
          navigate('/jobPost', { state: { fetchSingleJob: jobData } });
        } else {
          console.log('Job data is undefined.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const addSkillsToList = (newSkills) => {
    // Split the newSkills by comma
    const skillsArray = newSkills.split(',').map(skill => skill.trim());
  
    // Retrieve existing skills from local storage
    const existingSkills = localStorage.getItem("skills");
  
    // Parse the existingSkills as JSON or initialize an empty array
    const parsedSkills = existingSkills ? JSON.parse(existingSkills) : [];
  
    // Combine existing skills with new skills and remove duplicates
    const updatedSkills = Array.from(new Set([...parsedSkills, ...skillsArray]));
  
    // Save the updated skills back to local storage as a JSON string
    localStorage.setItem("skills", JSON.stringify(updatedSkills));
  
    // Updating the state with the new skills
    setAllSkills((prevSkills) => [...new Set([...prevSkills, ...skillsArray])]);
  }
  
  
  

    return(
        <AppContext.Provider
            value={{
                navigate,
                isLoggedIn,
                setIsLoggedIn,
                username,
                setUserName,
                isRegistered,
                setIsRegistered,
                login,
                register,
                logOut,
                addJob,
                cancel,
                handleViewJob,
                fetchSingleJob, 
                setFetchSingleJob,
                handleEditJob,
                allSkills,
                addSkillsToList,
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobal =()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobal}