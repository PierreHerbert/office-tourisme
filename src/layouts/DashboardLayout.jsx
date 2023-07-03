import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/AuthContext";
import Adminbar from "./Adminbar";

const DashboardLayout = () => {
  const { user, authToken } = useStateContext();
  if (!authToken) return <Navigate to="/login" />;
  if (user) {
    return (
      <div>
        <Adminbar />
        <main className="dashboard">
          <Outlet />
        </main>
      </div>
    );
  }
};

export default DashboardLayout;