import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "../components/Admin/Login/Login";
import App from "../components/Admin/Dashboard/Dashboard";

export const SitMap = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<App />} />
        </Routes>
      </Router>
    </div>
  );
};
