import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Projects from "./container/Projects/Projects";
import Tasks from "./container/Tasks/Tasks";
import Register from "./container/Auth/Register";
import Login from "./container/Auth/Login";
import './App.css';
import { AuthProvider } from "./context/authContext";

export enum USER_ROLE {
  USER = "user",
  ADMIN = "admin"
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Toaster />
        <Router>
          <Routes>
            <Route path={"/"} element={
              <React.Fragment>
                <Projects/>
              </React.Fragment>
            }/>
            <Route path={"/tasks"} element={
              <React.Fragment>
                <Tasks/>
              </React.Fragment>
            }/>
            <Route path={"/register"} element={
              <React.Fragment>
                <Register/>
              </React.Fragment>
            }/>
            <Route path={"/login"} element={
              <React.Fragment>
                <Login/>
              </React.Fragment>
            }/>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
