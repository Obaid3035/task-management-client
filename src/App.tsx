import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';


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
              </React.Fragment>
            }/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
