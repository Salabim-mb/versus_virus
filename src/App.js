import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./Styles/global.css";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import LoginPage from "./Components/LoginPage/LoginPage";

const App = () => (
    <div className="App">
      <Router>
        <Route path="/" component={null}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
      </Router>
    </div>
);

export default App;
