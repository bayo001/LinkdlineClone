import {   Routes,  Route } from "react-router-dom"
import React from 'react';
 

import "./index.css"
import Login from "./component/Login"
import Home from "./component/Home"


const App = () => {
    return(
        <div className='App'>
           
             <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/Home" element={ <Home />} />
             </Routes>
            
        </div>
    );
}

export default App;