import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  getEmployees,deleteEmployee
} from "../services/employeeService";
import { exportToExcel } from "../utils/exportToExcel";
import { exportToPDF } from "../utils/exportToPDF";

function ViewEmployees() {

  const [employees,
    setEmployees] = useState([]);
  const [search,
    setSearch] = useState("");
  const navigate = useNavigate(); 

  const [
departmentFilter,
setDepartmentFilter
] = useState("");

const [
sortOrder,
setSortOrder
] = useState("");

  const fetchEmployees =
    async () => {

      try {

        const response =
          await getEmployees();

        setEmployees(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };
  const handleDelete = async (id) => {

  const confirmDelete =
    window.confirm(
      "Delete Employee?"
    );

  if (!confirmDelete)
    return;

  try {

    await deleteEmployee(id);

    fetchEmployees();

  } catch (error) {

    console.log(error);

  }
};
const handleExport =
() => {

exportToExcel(
employees
);
};
const handlePDFExport =
() => {

exportToPDF(
employees
);
};
  useEffect(() => {

    fetchEmployees();

  }, []);

  return (
    <>
      <Navbar />

      <div className="container">

        <Sidebar />

        <div className="content">

          <h1 className="page-title">
            Employees
          </h1>
         <div className="toolbar">
          <input
className="search-box"

placeholder=
"Search Employee"

value={search}

onChange={(e)=>
setSearch(
e.target.value
)}
/>

<select

value={
departmentFilter
}

onChange={(e)=>

setDepartmentFilter(
e.target.value
)

}

>

<option value="">
All Departments
</option>

<option value="IT">
IT
</option>

<option value="HR">
HR
</option>

<option value="Finance">
Finance
</option>

<option value="Marketing">
Marketing
</option>
<option value="Design">
Design
</option>
<option value="Architect">
Architect
</option>
<option value="Business">
Business
</option>

</select>

<select
value={sortOrder}
onChange={(e)=>

setSortOrder(
e.target.value
)

}

>

<option value="">
Sort Salary
</option>

<option value="low">
Low to High
</option>

<option value="high">
High to Low
</option>

</select>
          <button

className="export-btn"

onClick={
handleExport
}

>

Export Excel

</button>
<button

className="pdf-btn"

onClick={
handlePDFExport
}

>

Export PDF

</button>
</div>
          <table
            className="employee-table"
          >

            <thead>

              <tr>
                <th>Photo</th>
                <th>ID</th>

                <th>Name</th>

                <th>Department</th>

                <th>Designation</th>

                <th>Salary</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {
             employees
.filter((emp)=>

departmentFilter === ""

?

true

:

emp.department ===
departmentFilter

)
.filter((emp)=>

emp.name
.toLowerCase()
.includes(
search.toLowerCase()
)

)
.sort((a,b)=>{

if(sortOrder==="low"){

return a.salary - b.salary;

}

if(sortOrder==="high"){

return b.salary - a.salary;

}

return 0;

})
  .map((emp) => (

    <tr key={emp._id}>

      <td>
        <img src={emp.photo
          ||
          "https://via.placeholder.com/60"
        } alt={emp.name}
        className="employee-photo"
      />
      </td>
      <td>{emp.employeeId}</td>

      <td>{emp.name}</td>

      <td>{emp.department}</td>

      <td>{emp.designation}</td>

      <td>₹{emp.salary}</td>
      <td>

<button
className="edit-btn"
onClick={() =>
navigate(
`/edit/${emp._id}`
)
}
>
Edit
</button>

<button
className="delete-btn"
onClick={() =>
handleDelete(emp._id)
}
>
Delete
</button>

</td>

    </tr>

  ))
              }

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default ViewEmployees;