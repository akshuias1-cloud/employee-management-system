import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import { toast } from "react-toastify";

import {
  registerUser
} from "../services/authService";

function Register() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      username: "",

      email: "",

      password: ""

    });

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
        e.target.value

      });

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await registerUser(
          formData
        );

        toast.success(
          "Registration Successful"
        );

        navigate(
          "/login"
        );

      } catch (error) {

        toast.error(
          error.response.data.message
        );

      }

    };

  return (
    <div className="landing">
    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Register
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
        >
          Register
        </button>

        <p>

          Already have account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </form>
    </div>
    </div>

  );

}

export default Register;