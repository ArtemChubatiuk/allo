import './App.css';
import React from "react";
import Component1 from "./components/component-1/component-1";
import Component2 from "./components/component-2/component-2";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Component1/>
            <Component2/>
        </div>
    )
}

export default App;
