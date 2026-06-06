import jsPDF
from "jspdf";

import autoTable
from "jspdf-autotable";

export const exportToPDF =
(employees) => {

const doc =
new jsPDF();

doc.setFontSize(18);

doc.text(
"Employee Report",
14,
20
);

autoTable(
doc,
{
startY:30,

head:[[
"ID",
"Name",
"Department",
"Designation",
"Salary"
]],

body:
employees.map(
(emp)=>[
emp.employeeId,
emp.name,
emp.department,
emp.designation,
emp.salary
]
)
}
);

doc.save(
"Employee_Report.pdf"
);

};