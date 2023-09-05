import { useState } from "react";
import "./signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <div className="login-container">
      <div className="signIn">
        <form action="">
          <h1>Sign In</h1>
          <div>
            <div className="input-box">
              <input
                value={user?.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="field"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-box">
              <input
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="field"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn">
              SIGN IN
            </button>
            <div className="register-link">
              <p>
                Dont have account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
