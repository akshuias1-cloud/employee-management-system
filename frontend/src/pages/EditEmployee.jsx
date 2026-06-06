import { useState, useEffect } from "react";

import { useParams,useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  getEmployeeById,
  updateEmployee
} from "../services/employeeService";

function EditEmployee() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      employeeId: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      salary: "",
      joiningDate: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });

  };

  const fetchEmployee =
    async () => {

      try {

        const response =
          await getEmployeeById(id);

        setFormData({
  ...response.data,
  joiningDate: response.data.joiningDate
    ? response.data.joiningDate.split("T")[0]
    : ""
});

      } catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    fetchEmployee();

  }, []);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await updateEmployee(
          id,
          formData
        );

        alert(
          "Employee Updated Successfully"
        );
        navigate("/employees");

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

          <h1>
            Edit Employee
          </h1>

          <form
            className="form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />

            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />

            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />

            <input type="text"
            name="photo"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={handleChange}
            />

            <button type="submit">
              Update Employee
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default EditEmployee;