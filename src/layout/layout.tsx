import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/general/topbar/topbar";
import Sidebar from "../components/general/sidebar/sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
