
import React, { useState } from "react";

const Attendence = () => {

    const [employees, setEmployees] = useState([
        { Name: "Rahul", status: "Present" },
        { Name: "Amit", status: "Absent" },
        { Name: "Ankit", status: "Present" },
        { Name: "Rohit", status: "Absent" },
        { Name: "Divyansh", status: "Present" }
    ]);

    // Total Present
    const totalPresent = employees.filter(
        (item) => item.status === "Present"
    ).length;

    // Total Absent
    const totalAbsent = employees.filter(
        (item) => item.status === "Absent"
    ).length;

    // Attendance change
    const handleAttendance = (index) => {
        const updatedEmployees = [...employees];

        updatedEmployees[index].status =
            updatedEmployees[index].status === "Present"
                ? "Absent"
                : "Present";

        setEmployees(updatedEmployees);
    };

    return (
        <div>
            <h2>Attendance</h2>

            <h3>Total Present: {totalPresent}</h3>
            <h3>Total Absent: {totalAbsent}</h3>

            {employees.map((item, index) => (
                <div key={index}>
                    <span>{item.Name}</span>

                    <input
                        type="checkbox"
                        checked={item.status === "Present"}
                        onChange={() => handleAttendance(index)}
                    />

                    <span>{item.status}</span>
                </div>
            ))}
        </div>
    );
};

export default Attendence;
