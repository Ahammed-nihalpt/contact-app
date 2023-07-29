import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarDatainterface, sideBarProps } from "../../../model";

const sidebarData: SidebarDatainterface[] = [
  { text: "Contact", link: "/home" },
  { text: "Charts and Maps", link: "/chartsandmaps" },
];

function Sidebar({
  toggle,
  changeToggleTrue,
  changeTogglefalse,
}: sideBarProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const handleButtonClick: Function = (link: string) => {
    navigate(link);
  };

  console.log(screenWidth);

  const handleResize = () => {
    if (screenWidth === 375) {
      changeTogglefalse();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={screenWidth <= 375 && !toggle ? "h-8" : "h-8 bg-black"}>
      <div
        className={
          toggle
            ? "flex bg-slate-600 w-96 h-screen flex-col"
            : "sm:flex bg-slate-600 hidden  sm:w-96 sm:h-screen flex-col"
        }
      >
        <div className="hidden sm:flex justify-center items-center p-2">
          <h1 className="text-4xl text-white">Menu</h1>
        </div>
        <div
          className="flex sm:hidden justify-center items-center p-2"
          onClick={() => changeTogglefalse()}
        >
          <h1 className="text-4xl text-white">Close</h1>
        </div>
        {sidebarData &&
          sidebarData.map((value) => (
            <div
              onClick={() => handleButtonClick(value.link)}
              className="flex justify-start p-4 items-center bg-slate-500  hover:bg-gray-700 text-white"
            >
              <h1 className=" text-2xl">{value.text}</h1>
            </div>
          ))}
      </div>
      {!toggle && (
        <div>
          <div className="sm:hidden bg-slate-600">
            <div
              className="flex justify-center items-center p-2"
              onClick={() => changeToggleTrue()}
            >
              <h1 className="text-4xl text-white">Menu</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
