import React, { useContext,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUserName] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)

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

    return(
        <AppContext.Provider
            value={{
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
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobal =()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobal}