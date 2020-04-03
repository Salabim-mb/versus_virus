import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./Styles/global.css";
import UserPage from "./Components/UserPage";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const App = () => (
    <div className="App">
      <Router history={history}>
        <Route path="/" component={null}/>
        <Route path="/user" exact component={UserPage} />
      </Router>
    </div>
);

export default App;
