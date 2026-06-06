function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      window.location.href =
      "/login";

    };

  return (

    <nav className="navbar">

      <h2>
        EMS Dashboard
      </h2>

      <div
        style={{
          display:"flex",
          gap:"15px",
          alignItems:"center"
        }}
      >

        <span>

          Welcome

          {" "}

          {
            user?.username
          }

        </span>

        <button
          onClick={
            handleLogout
          }
          className="logout-btn"
        >

          Logout

        </button>

      </div>

    </nav>

  );

}

export default Navbar;