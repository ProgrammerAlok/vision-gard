import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import Quotes from "./components/Quotes/Quotes";
import Register from "./components/Register/Register";
import Map from "./components/Map/Map";

function App() {
  useEffect(() => {
    document.title = "VISION GARD";
    <Navigate to="/signin" replace="true" />;
  }, []);

  const LoginDescription =
    "Resilient Human Tracking and Anomaly Detection for Outdoor Environments";

  const RegisterDescription =
    "Resilient Human Tracking and Anomaly Detection for Outdoor Environments";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout>
                  <div
                    style={{ position: "absolute", top: "50%", right: "50%" }}
                  >
                    <Link to="/signin">
                      <button>sign in</button>
                    </Link>
                    <Link to="/register">
                      <button>register</button>
                    </Link>
                    <Link to="/map">
                      <button>Map</button>
                    </Link>
                  </div>
                </Layout>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Layout>
                  <Navbar />
                  <Quotes description={RegisterDescription} />
                  <Register />
                </Layout>
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Layout>
                  <Navbar />
                  <Quotes description={LoginDescription} />
                  <Signin />
                </Layout>
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Layout>
                  <Navbar />
                  <Map />
                </Layout>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
