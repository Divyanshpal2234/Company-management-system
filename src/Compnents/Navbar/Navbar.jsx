import React from "react"; 
import download from "../../assets/download.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar=()=>{
    return(
        <div>
        <h1 className="color">welcome to Company management system</h1>

        <nav className="dir">
            <Link to="/" className="red">Home</Link>
            <span>&nbsp; &nbsp; &nbsp;</span>
            <Link to="/About" className="red">About</Link>
             <span>&nbsp; &nbsp; &nbsp;</span>
             <Link to="/Attendence" className="red">Attendence</Link>
             <span>&nbsp; &nbsp; &nbsp;</span>
             <Link to="/PersonalDetail" className="red">PersonalDetail</Link>
             <span>&nbsp; &nbsp; &nbsp;</span>
             <Link to="Product" className="red">Product</Link>
             <span>&nbsp; &nbsp; &nbsp;</span>
             <Link to="Login" className="red">Login</Link>
             <span>&nbsp; &nbsp; &nbsp;</span>
             <Link to ="Signup" className="red">Signup</Link>
             <span>&nbsp; &nbsp; &nbsp;</span>
             <Link to="Dashboard" className="red">Dashboard</Link>

             </nav>

        
        </div>
    );
}

export default Navbar;