
import React from "react";

const Dashboard = ({ employee }) => {

    return (
        <div>
            <h2>Welcome to my Dashboard</h2>

            <h3>Total Employees</h3>

            <h1>{employee.length}</h1>

            <div className="dashboard">

  <div className="card">
    <h3>Total Present</h3>
    <h1>{totalPresent}</h1>
  </div>

  <div className="card">
    <h3>Total Absent</h3>
    <h1>{totalAbsent}</h1>
  </div>

</div>

            

        </div>
    );
};

export default Dashboard;
