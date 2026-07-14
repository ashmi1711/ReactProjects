import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Assets/css/home-about.css";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);

    alert("Login Successful!");
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">
        <section id="login-form" className="card-section">
          <h2>Login</h2>

          <p>
            Enter your credentials to access the patient portal or staff
            dashboard.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Username or Email
              </label>

              <input
                type="text"
                name="username"
                className="form-control"
                value={loginData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>

          <p className="mt-3">
            If you do not have an account, please{" "}
            <Link to="/application">
              register here
            </Link>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Login;