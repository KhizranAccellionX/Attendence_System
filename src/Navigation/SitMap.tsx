import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AddUser } from "../components/Admin/User/AddUser";
import { AppContent } from "../components/Admin/Dashboard/AppContent";
import { DashContent } from "../components/Employees/Dashboard/DashContent";
import { Profile } from "../components/Employees/Dashboard/Profile";
import { LeaApp } from "../components/Employees/Leave/LeaApp";
import { Employees } from "../components/Admin/User/Employeees";
import AppLayout from "../common/AppLayout";

export const SitMap = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <AppContent />
            </AppLayout>
          }
        />
        <Route
          path="/dashboard/add-employee"
          element={
            <AppLayout>
              <AddUser />
            </AppLayout>
          }
        />
        <Route
          path="/dashboard/employees"
          element={
            <AppLayout>
              <Employees />
            </AppLayout>
          }
        />
        <Route
          path="/employee/dashboard"
          element={
            <AppLayout>
              <DashContent />
            </AppLayout>
          }
        />
        <Route
          path="/employee/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />
        <Route
          path="/employee/leave-applications"
          element={
            <AppLayout>
              <LeaApp />
            </AppLayout>
          }
        />
      </Routes>
    </div>
  );
};
