import React, { useState } from "react";
import PersonalData from "./PersonalData";
const PersonalDetail=({ employee, setemployee })=>{
    const[input,setinput]=useState({
        Name:"",
        Lastname:"",
        Email:"",
        Mobileno:"",
        Aadharno:"",
    });


    const deletepersonaldetail=(index)=>{
        setemployee(employee.filter((item,i)=>i !==index));
    };

    const editpersonaldetail=(index)=>{
        setinput(employee[index]);
    }
    const onChange=(e)=>{
        const{name,value}=e.target;
        setinput({...input,[name]:value});
    }
    const submit=()=>{
        alert("submit the personal detail")
        setemployee([...employee,input])
        setinput({Name:"",Lastname:"",Email:"",Aadharno:"",Mobileno:""})

    }
    return(
        <div>
            <h2>Personal detail</h2>
            Name=
            <input
            required
            name="Name"
            type="text"
            placeholder="Enter your name"
            onChange={onChange}
            value={input.Name}
            />
            <br></br>
            <br></br>

            Last name=
            <input
            required
            name="Lastname"
            type="text"
            placeholder="Enter last name"
            onChange={onChange}
            value={input.Lastname}
            />
            <br></br>
            <br></br>

            Aadhar no=
            <input
            required
            name="Aadharno"
            type="number"
            placeholder="enter your aadhar no"
            onChange={onChange}
            value={input.Aadharno}
            />
            <br></br>
            <br></br>

            Email=
            <input
            required
            name="Email"
            type="email"
            placeholder="enter your email"
            onChange={onChange}
            value={input.Email}
            />
            <br></br>
            <br></br>

            Mobile no=
            <input
            required
            name="Mobileno"
            type="number"
            value={input.Mobileno}
            onChange={onChange}
            placeholder="enter your mobil no"
            />

            <p>{input.Name}</p>
            <p>{input.Lastname}</p>
            <p>{input.Aadharno}</p>
            <p>{input.Email}</p>
            <p>{input.Mobileno}</p>

            <button onClick={submit}>Add</button>

            {employee.map((item,index)=>(
                <PersonalData
                key={index}
                Name={item.Name}
                Lastname={item.Lastname}
                Aadharno={item.Aadharno}
                Mobileno={item.Mobileno}
                deletepersonaldetail={deletepersonaldetail}
                editpersonaldetail={editpersonaldetail}
                index={index}
                Email={item.Email}
                />
            ))}

            </div>

            
    );
}

export default PersonalDetail;