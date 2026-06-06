import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect} from "react";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployees from "./pages/ViewEmployees";
import EditEmployee from "./pages/EditEmployee";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [darkMode,setDarkMode] = useState(localStorage.getItem("theme")==="dark");
  useEffect(()=>{

localStorage.setItem(

"theme",

darkMode
?
"dark"
:
"light"

);

},[darkMode]);

  return (
   <div
className={
darkMode
?
"dark-mode"
:
"light-mode"
}
>

<BrowserRouter>
      <Routes>

       <Route
path="/"
element={<LandingPage />}
/>

<Route
path="/login"
element={<Login />}
/>

<Route
path="/register"
element={<Register />}
/>

<Route
path="/dashboard"
element={
<ProtectedRoute>

<Dashboard darkMode={darkMode}
setDarkMode={setDarkMode}/>

</ProtectedRoute>
}
/>

        <Route
          path="/add"
          element={<AddEmployee />}
        />

        <Route
          path="/employees"
          element={<ViewEmployees />}
        />
        <Route
          path="/edit/:id"
          element={<EditEmployee/>}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;