import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Projects from "./container/Projects/Projects";
import Tasks from "./container/Tasks/Tasks";
import Register from "./container/Auth/Register";
import Login from "./container/Auth/Login";
import "./App.css";
import ProtectedRoute from "./component/AuthRedirectGuard/ProtectedRoute";
import AuthRedirectGuard from "./component/AuthRedirectGuard/AuthRedirectGuard";
import { useAuth } from "./context/authContext";
import { Spinner } from "react-bootstrap";
import Loader from "./component/Loader/Loader";

export enum USER_ROLE {
  USER = "user",
  ADMIN = "admin"
}

function App() {

  const { isAuthenticated, loader } = useAuth();


  const routes = [
    {
      id: 1,
      component: <Projects />,
      path: "/"
    },
    {
      id: 2,
      component: <Tasks />,
      path: "/tasks"
    }
  ];

  if (loader) {
    return <Loader/>
  }


  return (
    <div className="App">
      <Toaster />
      <Router>
        <Routes>
          {
            routes.map((el) => (
              <Route path={el.path} element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  {el.component}
                </ProtectedRoute>
              } />
            ))
          }
          <Route path={"/login"} element={
            <AuthRedirectGuard isAuthenticated={isAuthenticated}>
              <Login/>
            </AuthRedirectGuard>
          } />
          <Route path={"/register"} element={
            <AuthRedirectGuard isAuthenticated={isAuthenticated}>
              <Register/>
            </AuthRedirectGuard>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
