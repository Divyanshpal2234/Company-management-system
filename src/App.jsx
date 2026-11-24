
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Compnents/Navbar/Navbar";
import Home from "./Compnents/Home/Home";
import About from "./Compnents/About/About";
import PersonalDetail from "./Compnents/PersonalDetail/PersonalDetail";
import Product from "./Compnents/Product/Product";
import Attendence from "./Compnents/Attendence/Attendence";
import Login from "./Compnents/Login/Login";
import Signup from "./Compnents/Signup/Signup";
import Dashboard from "./Compnents/Dashboard/Dashboard";

const App = () => {

  const[darkmode,setdarkmode]=useState(false);
  <div className={darkmode ? "app dark":"app light"}>

    
  </div>

    const [employee, setemployee] = useState([]);

    return (
        <div>
            <BrowserRouter>

            <button onClick={()=> setdarkmode(!darkmode)}>
      {darkmode ?"light mode":"darkmode"}
    </button>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />

                    <Route
                        path="/PersonalDetail"
                        element={
                            <PersonalDetail
                                employee={employee}
                                setemployee={setemployee}
                            />
                        }
                    />

                    <Route path="/Product" element={<Product />} />
                    <Route path="/Attendence" element={<Attendence />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />

                    <Route
                        path="/Dashboard"
                        element={<Dashboard employee={employee} />}
                    />
                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default App;
