import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/general/topbar/topbar";
import Sidebar from "../components/general/sidebar/sidebar";

const Layout: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const changeToggleFalse = () => {
    setToggle(false);
  };

  const changeToggleTrue = () => {
    setToggle(true);
  };

  return (
    <div>
      <Topbar
        toggle={toggle}
        changeToggleTrue={changeToggleTrue}
        changeTogglefalse={changeToggleFalse}
      />
      <div className="flex">
        <Sidebar
          toggle={toggle}
          changeToggleTrue={changeToggleTrue}
          changeTogglefalse={changeToggleFalse}
        />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
