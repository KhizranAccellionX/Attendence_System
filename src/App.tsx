import React from "react";
import "./App.css";
import { Login } from "./components/Admin/Login/Login";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import EmpDashboard from "./components/Employees/Dashboard/EmpDashboard";
import { SitMap } from "./Navigation/SitMap";

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Dashboard /> */}
      {/* <EmpDashboard/> */}
       <SitMap/>
    </div>
  );
}

export default App;
