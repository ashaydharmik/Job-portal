import React, { useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const initialValue = { username: "", email: "", mobile: "", password: "" };
  const [formData, setFormData] = useState(initialValue);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const handleClick = () => {
    navigate("/login");
  };
  return (
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
                  value={formData.name}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
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
  );
};

export default Register;
