import React, { useState } from "react";

const Login=()=>{
    const [input,setinput]=useState({
    Email:"",
    Password:""
});
const [employee,setemployee]=useState([]);
const submit=()=>{
    setemployee([...employee,input])
    alert("login successfully")
    setinput({Email:"",Password:""})
}
const onChange = (e) => {
    const { name, value } = e.target;
    setinput({
        ...input,
        [name]: value
    });
};
    return(
        <div>
            <h2>Welcometo login page</h2>

            <form onSubmit={submit}>

                Email:
                <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email"
                    value={input.Email}
                    onChange={onChange}
                    required
                />

                <br /><br />

                Password:
                <input
                    type="password"
                    name="Password"
                    placeholder="Enter your password"
                    value={input.Password}
                    onChange={onChange}
                    required
                />

                <br /><br />

                <p>{input.Email}</p>
                <p>{input.Password}</p>

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Login;
