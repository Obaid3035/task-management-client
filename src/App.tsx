import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Projects from "./container/Projects/Projects";
import Tasks from "./container/Tasks/Tasks";

export enum USER_ROLE {
  USER = "user",
  ADMIN = "admin"
}

function App() {
  return (
      <div className="App">
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
          </Routes>
        </Router>
      </div>
  );
}

export default App;
