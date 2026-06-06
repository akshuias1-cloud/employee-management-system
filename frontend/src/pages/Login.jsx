import {
  useState
} from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";
import { toast } from "react-toastify";

import {
  loginUser
} from "../services/authService";

function Login() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      email: "",

      password: ""

    });

  const [loading,setLoading] = useState(false);  

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
      setLoading(true);

      try {

        const response =
          await loginUser(
            formData
          );

        localStorage.setItem(

          "token",

          response.data.token

        );
        localStorage.setItem(
  "user",
  JSON.stringify(
    response.data.user
  )
);

        toast.success(
          "Login Successful"
        );
        setLoading(false);
        navigate(
          "/dashboard"
        );

      } catch (error) {
        setLoading(false);

        toast.error(
          error.response.data.message
        );

      }

    };

  return (
    <div className="landing">

    <div
      className="auth-container"
    >

      <form
        className="auth-form"
        onSubmit={
          handleSubmit
        }
      >

        <h1>Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={
            formData.email
          }
          onChange={
            handleChange
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={
            formData.password
          }
          onChange={
            handleChange
          }
        />

        <button
          type="submit"
        >
          {
            loading
            ?
            "Loading In..."
            :
            "Login"
          }
        </button>

        <p>

          New User?

          <Link
            to="/register"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
    </div>

  );

}

export default Login;