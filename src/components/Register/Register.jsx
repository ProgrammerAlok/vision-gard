import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  return (
    <div className="register-container">
      <div className="register-container-inner">
        <form action="">
          <h1>Sign Up</h1>
          <div>
            <div className="register-container-input-box">
              <input
                value={user?.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="register-container-field"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="register-container-input-box">
              <input
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="register-container-field"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="register-container-btn">
              SIGN UP
            </button>
            <div className="register-container-register-link">
              <p>
                Already have account? <Link to="/signin">Sign In</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
