import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [signState, setSignState] = useState("Sign In"); // "Sign In" or "Sign Up"
  const [name, setName] = useState(""); // Only used for "Sign Up"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Navigate between routes
  const location = useLocation(); // To redirect after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (signState === "Sign In") {
        // Login logic
        const user = await login(email, password);
        if (user) {
          const redirectPath = location.state?.from?.pathname || "/";
          navigate(redirectPath); // Redirect to home or intended route
        }
      } else {
        // Signup logic
        const user = await signup(name, email, password);
        if (user) {
          toast.success("Registration successful! Please log in.");
          setSignState("Sign In"); // Switch to "Sign In" form
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }

    // Clear form inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{signState}</button>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Myflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
