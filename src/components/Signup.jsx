import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formValues, setformValues] = useState({
    name: "",
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
    const regexName = /^[a-zA-Z]+$/;
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;

    if (!values.name) {
      errors.name = "Name is required";
      alert("ERROR : " + errors.name);
    } else {
      if (!values.email) {
        errors.email = "email is required";
        alert("ERROR : " + errors.email);
      } else {
        if (!values.password) {
          errors.password = "password is required";
          alert("ERROR : " + errors.password);
        } else if (!regexName.test(values.name)) {
          errors.name = "Name must be string";
          alert("ERROR :" + errors.name);
        } else if (!regexEmail.test(values.email)) {
          errors.email = "This is not a valid email address";
          alert("ERROR : " + errors.email);
        } else if (!regexPassword.test(values.password)) {
          errors.password =
            "min length 8 and max 20 characters , at least one uppercase, one lowercase, one digit, one special characters";
          alert("ERROR : " + errors.password);
        }
      }
    }
    return errors;
  };

  async function handleSignup() {
    try {
      if (Object.keys(formErrors).length === 0) {
        let item = formValues;

        let result = await axios.post(
          "https://techyroots.com:8123/auth/signup",
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
      const response = await handleSignup();

      if (response.success) {
        setIsSubmit(true);
        navigateTo("/dashboard");
      } else {
        alert(response.data.message);
      }
    }
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>
          <h1
            style={{
              fontSize: "28px",
              textAlign: "center",
              color: "#007BFF",
            }}
          >
            Signed in Successfully
          </h1>
        </div>
      ) : (
        <h1
          style={{
            fontSize: "28px",
            textAlign: "center",
            color: "#007BFF",
          }}
        >
          Create Your Account
        </h1>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field" style={{ marginBottom: "15px" }}>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333",
              }}
            >
              name :{" "}
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formValues.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333",
              }}
            >
              Email :{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formValues.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333",
              }}
            >
              Password :{" "}
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <br />
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              fontSize: "18px",
            }}
          >
            Sign Up
          </button>
          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              fontSize: "16px",
              color: "#333",
            }}
          >
            already account?{" "}
            <Link
              to="/login"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              Login{" "}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
