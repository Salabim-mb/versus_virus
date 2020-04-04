import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../Styles/global.css";
import {UserProvider} from "../context/UserContext";

const App = () => (
    <UserProvider>
        <div className="App">
          <Router>
            <Route path="/" component={null}/>
          </Router>
        </div>
    </UserProvider>
);

export default App;
