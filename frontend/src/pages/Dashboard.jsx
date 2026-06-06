import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import DepartmentChart from "../components/DepartmentChart";

import {
  getEmployees
} from "../services/employeeService";

function Dashboard({ darkMode,
  setDarkMode}) {
  const [employeeCount,
    setEmployeeCount] =
    useState(0);

  const [departmentCount,
    setDepartmentCount] =
    useState(0);

  const [averageSalary,
    setAverageSalary] =
    useState(0);
  const [recentEmployees,setRecentEmployees] = useState([]);  
  const [highestSalary,setHighestSalary] = useState(0);

  const [chartData,setChartData] =useState([]);  
  const [totalPayroll,setTotalPayroll] = useState(0);
  const [latestEmployee,setLatestEmployee] = useState("");

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData =
    async () => {

      try {

        const response =
          await getEmployees();

        const employees =
          response.data;

        // Total Employees

        setEmployeeCount(
          employees.length
        );

        // Unique Departments

        const departments =
          [
            ...new Set(
              employees.map(
                emp =>
                emp.department
              )
            )
          ];

        setDepartmentCount(
          departments.length
        );
       const deptCounts =
departments.map(
(dept)=>({

department:dept,

count:
employees.filter(
(emp)=>
emp.department
===
dept
).length

})
);

setChartData(
deptCounts
);
        // Average Salary

        const totalSalary =
          employees.reduce(
            (sum, emp) =>
              sum +
              Number(
                emp.salary
              ),
            0
          );

        const avg =
          employees.length > 0
          ?
          Math.round(
            totalSalary /
            employees.length
          )
          :
          0;

        setAverageSalary(
          avg
        );

        if(
employees.length > 0
){

setLatestEmployee(

employees[
employees.length - 1
].name

);

}
        setTotalPayroll(totalSalary);
        const maxSalary =

Math.max(

...employees.map(
emp =>
Number(
emp.salary
)
)

);

setHighestSalary(
maxSalary
);
        const latestEmployees =

employees

.slice(-5)

.reverse();

setRecentEmployees(
latestEmployees
);


      } catch (error) {

        console.log(error);

      }

    };

  return (
    <>
      <Navbar />

      <div className="container">

        <Sidebar />

        <div className="content">
          <div className="dashboard-header">

  <h1>
    Dashboard
  </h1>

  <button
    className="theme-btn"
    onClick={() =>
      setDarkMode(!darkMode)
    }
  >
    {
      darkMode
      ?
      "☀️ Light"
      :
      "🌙 Dark"
    }
  </button>

</div>
<div className="welcome-card">
<h1>
Welcome Back 👋
</h1>
<p>
Manage Employees,
Departments and Salary
Information Easily

</p>
</div>

          <div className="card-grid">

            <DashboardCard
              title="Employees"
              value={employeeCount}
            />

            <DashboardCard
              title="Departments"
              value={departmentCount}
            />

            <DashboardCard
              title="Average Salary"
              value={`₹${averageSalary}`}
            />

               <DashboardCard
              title="Highest Salary"
              value={`₹${highestSalary}`}
            />

            <DashboardCard
title="Latest Employee"
value={latestEmployee}
/>

            <DashboardCard title="Total Payroll" value={`₹${totalPayroll}`}
            />

          </div>
          <div className="chart-card">
          <h2>
            Department Analytics
          </h2>
          <DepartmentChart data={chartData}
          />
          <div className="recent-card">

<h2>

Recent Employees

</h2>

{

recentEmployees.map(
(emp)=>(

<div
key={emp._id}
className=
"recent-item"
>

<img

src={
emp.photo
||
"https://via.placeholder.com/60"
}

alt={emp.name}

className=
"recent-photo"

/>

<div>

<h4>

{emp.name}

</h4>

<p>

{
emp.department
}

</p>

</div>

</div>

)
)

}

</div>
          </div> 

        </div>

      </div>
    </>
  );
}

export default Dashboard;