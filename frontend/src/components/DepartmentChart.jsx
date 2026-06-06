import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer

} from "recharts";

function DepartmentChart({
data
}) {

return (

<div
style={{
width:"100%",
height:"450px"
}}
>

<ResponsiveContainer>

<BarChart data={data}>

<CartesianGrid
strokeDasharray="3 3"
/>

<XAxis
dataKey="department"
tick={{
     fill:"#01751e",
fontSize:18,
fontWeight:"bold"
}}
/>

<YAxis
tick={{
    fill:"#f8f4f4",
fontSize:16,
fontWeight:"bold"
}}
/>

<Tooltip
contentStyle={{
fontSize:"14px"
}}
/>

<Bar
dataKey="count"
radius={[10,10,0,0]}
barSize={60}
/>

</BarChart>

</ResponsiveContainer>

</div>

);

}

export default DepartmentChart;