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

    const login=()=>{
        navigate("/login")
      }
      
    const register=()=>{
    navigate("/register")
    }
    const logOut=()=>{
        setIsLoggedIn(false)
        setIsRegistered(false)
    }

    const addJob=()=>{
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
    axios.get('http://localhost:4000/fetchJobPost', {
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
      .get('http://localhost:4000/fetchJobPost', {
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
                handleEditJob
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobal =()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobal}