import React from 'react';
import './App.css';
import "../../Styles/global.css"
import {UserProvider} from '../../context/UserContext';
import Router from "../Router/Router";
import {BrowserRouter} from "react-router-dom";

const App = () => (
    <UserProvider>
        <BrowserRouter>
            <div className="App">
              <Router />
            </div>
        </BrowserRouter>
    </UserProvider>
);

export default App;
