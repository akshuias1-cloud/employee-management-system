import { useState } from "react";

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import {
  addEmployee
} from "../services/employeeService";

function AddEmployee() {

  const [formData, setFormData] =
    useState({
      employeeId: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      salary: "",
      photo: "",
      joiningDate: ""
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
      e.target.value
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await addEmployee(
          formData
        );

        alert(
          "Employee Added Successfully"
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

          <h1 className="page-title">
            Add Employee
          </h1>

          <form
            onSubmit={handleSubmit}
            className="form"
          >

            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              onChange={handleChange}
            />

            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              onChange={handleChange}
            />

            <input
              type="text"
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
            />

            <input
              type="number"
              name="salary"
              placeholder="Salary"
              onChange={handleChange}
            />

            <input type="text"
            name="photo"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={handleChange}
            />

            <input
              type="date"
              name="joiningDate"
              onChange={handleChange}
            />

            <button type="submit">
              Add Employee
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default AddEmployee;