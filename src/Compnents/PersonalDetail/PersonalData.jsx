import React from "react";
import { Link } from "react-router-dom"
const personalData = ({Name, Lastname, Aadharno, Mobileno, Email,index,deletepersonaldetail,editpersonaldetail})=> {
    return (
        <div>
            <h2>welcome to personal detail</h2>
            <p>Name:{Name}</p>
            <p>Lastname:{Lastname}</p>
            <p>Aadharno:{Aadharno}</p>
            <p>Mobileno:{Mobileno}</p>
            <p>Email:{Email}</p>

            <button onClick={() => deletepersonaldetail(index)}>Delete</button>
            <button onClick={() => editpersonaldetail(index)}>Edit</button>

            <Link to="./Personal" state={{
                Name,
                Lastname,
                Email,
                Aadharno,
                Mobileno

            }}
            >

                <button>viewdetail</button>
            </Link>
        </div>
    )
}

export default personalData;