function DashboardCard({
  title,
  value
}) {

  const getIcon = () => {

    if(title === "Employees")
      return "👥";

    if(title === "Departments")
      return "🏢";

    if(title === "Average Salary")
      return "💰";
    if(title ===
"Highest Salary")
return "🏆";
    if(title ===
"Total Payroll")
return "💵";
    if(title ===
"Latest Employee")
return "🆕";

    return "📊";

  };

  return (

    <div className="card">

      <div className="card-icon">

        {getIcon()}

      </div>

      <h3>

        {title}

      </h3>

      <h1>

        {value}

      </h1>

    </div>

  );

}

export default DashboardCard;

// function DashboardCard({
//   title,
//   value
// }) {
//   return (
//     <div className="card">
//       <h3>{title}</h3>

//       <h1>{value}</h1>
//     </div>
//   );
// }

// export default DashboardCard;