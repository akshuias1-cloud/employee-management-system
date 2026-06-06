import { Link } from "react-router-dom";

function LandingPage() {

  return (

    <div className="landing">

      {/* Hero Section */}

      <section className="hero">

        <h1>

          Employee Management System 🚀

        </h1>

        <p>

          Manage Employees,
          Departments,
          Salaries and Analytics
          from one modern dashboard.

        </p>

        <div className="hero-buttons">

          <Link
            to="/register"
            className="hero-btn"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>

          Features

        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>👥 Employee Management</h3>

            <p>
              Add, Edit and Delete
              Employees Easily.
            </p>

          </div>

          <div className="feature-card">

            <h3>📊 Analytics Dashboard</h3>

            <p>
              View Department and
              Salary Statistics.
            </p>

          </div>

          <div className="feature-card">

            <h3>🔐 Secure Login</h3>

            <p>
              JWT Authentication
              and Protected Routes.
            </p>

          </div>

          <div className="feature-card">

            <h3>📸 Employee Profiles</h3>

            <p>
              Store Employee Photos
              and Details.
            </p>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="about">

        <h2>

          About EMS

        </h2>

        <p>

          EMS is a modern Employee
          Management System built
          using React, Node.js,
          Express and MongoDB.

        </p>

      </section>

      {/* Footer */}

      <footer className="footer">

        <h3>

          Contact

        </h3>

        <p>
          Email:
          support@ems.com
        </p>

        <p>
          Phone:
          +91 9876543210
        </p>

        <p>
          © 2026 Employee
          Management System
        </p>

      </footer>

    </div>

  );

}

export default LandingPage;