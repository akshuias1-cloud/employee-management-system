import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2 className="logo">

        EMS

      </h2>

      <Link
        className="sidebar-link"
        to="/dashboard"
      >
        🏠 Dashboard
      </Link>

      <Link
        className="sidebar-link"
        to="/add"
      >
        ➕ Add Employee
      </Link>

      <Link
        className="sidebar-link"
        to="/employees"
      >
        👥 Employees
      </Link>

    </div>

  );

}

export default Sidebar;