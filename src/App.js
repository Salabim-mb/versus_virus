import React from 'react';
import './App.css';
import MenuCard from "./containers/MenuCard/MenuCard";
import "./Styles/global.css"

const App = () => (
    <div className="App">
      <MenuCard title="Hello world" body="Hi!" hide={null} />
    </div>
);

export default App;
