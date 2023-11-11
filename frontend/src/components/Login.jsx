import React, { useState } from 'react';
import loginImg from "../assets/login.png";
import logo from "../assets/navbar-logo.png";
import { Link } from 'react-router-dom';

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#27aa8a" : "var(--color-green)",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "8px",
    width: "100%",
    transition: "background-color 0.3s",
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data to your backend or perform the desired action
      console.log('Form data submitted:', formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:overflow-y-hidden">
      {/* Right Part (Form) */}
      <div className="bg-white p-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-semibold text-gray">CV Security</h1>
          </Link>
        </div>
        <h2 className="text-3xl font-semibold mb-8 mt-14">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full mt-3"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Login
            </button>
            <p className="mt-2">
              <span className='text-xs'>Not Registered?</span> <Link to="/signup" style={{color:"#27aa8a"}}>Signup</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Left Part (Image) */}
      <div className=" p-10">
        <img
          src={loginImg}
          alt="Logo"
          className="max-w-full h-auto mx-auto mt-8"
          style={{ maxWidth: "75%", maxHeight: "70vh" }}
        />
      </div>
    </div>
  );
}

export default Login;
