import React from 'react';
import './App.css';
import "../../Styles/global.css"
import {UserProvider} from '../../context/UserContext';
import Router from "../Router/Router";

const App = () => (
    <UserProvider>
        <div className="App">
          <Router />
        </div>
    </UserProvider>
);

export default App;
