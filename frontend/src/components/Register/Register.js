import React, { useEffect, useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const initialValue = { username: "", email: "", phone: "", password: "" };
  const [formData, setFormData] = useState(initialValue);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4000/register", formData);
  
      // Assuming your API response includes a token and user name
      const { token, recruiterName } = response.data;
  
      // Store the token and user name in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userName", recruiterName);
  
      setFormData(response.data);
      console.log(response.data);
  
      toast.success(response.data.message);
  
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log("Error during registration:", error);
  
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };
  
  

  const handleClick = () => {
    navigate("/login");
  };
   
   
  return (
    <>
      <section className="register-container">
        <div className="left">
          <div className="left-content">
            <div className="left-heading">
              <h1>Create an account</h1>
              <p>Your personal job finder is here</p>
            </div>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="info">
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    value={formData.username}
                    onChange={changeHandler}
                    required
                  />
                
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Mobile"
                    value={formData.phone}
                    onChange={changeHandler}
                    required
                  />
                   
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={changeHandler}
                    required
                  />
                   
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="checkbox" required />
                  <span>
                    By creating an account, I agree to our terms of use and
                    privacy policy
                  </span>
                </div>
                <div className="buttons">
                  <button type="submit">Create Account</button>
                </div>
              </form>
            </div>

            <div className="content">
              <p>
                Already have an account?
                <a href="#" onClick={handleClick}>
                  Sign In
                </a>
              </p>
              
            </div>
          </div>
        </div>
        <div className="right"></div>
      </section>
      <Toaster
       toastOptions={{
        style: {
          background: '#363636',
          color: '#fff',
          width:"350px",
          fontSize:"18px"
        }
      }}
      />
    </>
  );
};

export default Register;
