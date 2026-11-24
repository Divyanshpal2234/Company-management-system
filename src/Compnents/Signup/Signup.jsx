
import React, { useState } from "react";

const Signup = () => {
    const [input, setinput] = useState({
        Name: "",
        Email: "",
        Createpassword: "",
        Confirmpassword: ""
    });

    const [employee, setemployee] = useState([]);

    const submit = (e) => {
        e.preventDefault();

        if (input.Createpassword !== input.Confirmpassword) {
            alert("Password does not match");
            return;
        }

        setemployee([...employee, input]);

        alert("Signup successfully");

        setinput({
            Name: "",
            Email: "",
            Createpassword: "",
            Confirmpassword: ""
        });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setinput({ ...input, [name]: value });
    };

    return (
        <div>
            <h3>Welcome to signup page</h3>

            <form onSubmit={submit}>
                Name:
                <input
                    type="text"
                    name="Name"
                    value={input.Name}
                    onChange={onChange}
                    required
                />

                <br /><br />

                Email:
                <input
                    type="email"
                    name="Email"
                    value={input.Email}
                    onChange={onChange}
                    required
                />

                <br /><br />

                Create password:
                <input
                    type="password"
                    name="Createpassword"
                    value={input.Createpassword}
                    onChange={onChange}
                    required
                />

                <br /><br />

                Confirm password:
                <input
                    type="password"
                    name="Confirmpassword"
                    value={input.Confirmpassword}
                    onChange={onChange}
                    required
                />

                <br /><br />

                <button type="submit">Registered</button>
            </form>
        </div>
    );
};

export default Signup;
