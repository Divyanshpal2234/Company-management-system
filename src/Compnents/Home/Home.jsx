import React from "react";
import "./Home.css";
import download from "../../assets/download.png";
const Home=()=>{
    return(
        <div>
            <img
                src={download}
                alt="company logo"
                width="100"
                />

                
            <h2 className="dir1">welcome to home page</h2>
            <p>welcome to company page</p>
            </div>
    );
}

export default Home;
