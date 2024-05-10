import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "../components/Admin/Login/Login";
import { PrivateMap } from "./PrivateMap";
import { SitMap } from "./SitMap";
export const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateMap>
                <SitMap />
              </PrivateMap>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
