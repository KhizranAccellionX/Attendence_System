import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "../components/Admin/Login/Login";
import App from "../components/Admin/Dashboard/Dashboard";
import { AddUser } from "../components/Admin/User/AddUser";
import { AppContent } from "../components/Admin/Dashboard/AppContent";
import EmpDashboard from "../components/Employees/Dashboard/EmpDashboard";
import { DashContent } from "../components/Employees/Dashboard/DashContent";
import { Profile } from "../components/Employees/Dashboard/Profile";
import { LeaApp } from "../components/Employees/Leave/LeaApp";

export const SitMap = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <App>
                <AppContent />
              </App>
            }
          />
          <Route
            path="/dashboard/add-employee"
            element={
              <App>
                <AddUser />
              </App>
            }
          />
          <Route
            path="/employee/dashboard"
            element={
              <EmpDashboard>
                <DashContent />
              </EmpDashboard>
            }
          />
          <Route
            path="/employee/profile"
            element={
              <EmpDashboard>
                <Profile />
              </EmpDashboard>
            }
          />
          <Route
            path="/employee/leave-applications"
            element={
              <EmpDashboard>
                <LeaApp />
              </EmpDashboard>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
