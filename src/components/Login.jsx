import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;

    if (!values.email) {
      errors.email = "email is required";
      alert("ERROR : " + errors.email);
    } else {
      if (!values.password) {
        errors.password = "password is required";
        alert("ERROR : " + errors.password);
      } else if (!regexEmail.test(values.email)) {
        errors.email = "This is not a valid email address";
        alert("ERROR : " + errors.email);
      } else if (!regexPassword.test(values.password)) {
        errors.password =
          "min length 8 and max 20 characters , at least one uppercase, one lowercase, one digit, one special characters";
        alert("ERROR : " + errors.password);
      }
    }
    return errors;
  };

  async function handleLogin() {
    try {
      if (Object.keys(formErrors).length === 0) {
        
        let item = formValues;

        let result = await axios.post(
          "https://techyroots.com:8123/auth/login",
          item,
          {
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(item),
          }
        );
        return { success: true, message: "Signup success" };
      }
    } catch (error) {
      if (error.response.status >= 400) {
        return error.response;
      }
      
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length == 0) {
      const response = await handleLogin();
      if (response.success) {
        setIsSubmit(true);
        navigateTo("/dashboard");
      } else {
        alert(response.data.message);
      }
    }
  };

  return (
    <div className="container"  style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>
          <h1 style={{ fontSize: '24px', textAlign: 'center',color: '#007BFF'  }}>Logged in Successfully</h1>
        </div>
      ) : (
        <h1 style={{ fontSize: '24px', textAlign: 'center' ,color: '#007BFF' }}>Login Your Account</h1>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Email : </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div  style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}> Password : </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <br />
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Login</button>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Dont have an Account? <Link to="/signup" style={{ color: '#007BFF', textDecoration: 'none' }}> SignUp </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
