import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarDatainterface } from "../../../model";

const sidebarData: SidebarDatainterface[] = [
  { text: "Contact", link: "/home" },
  { text: "Charts and Maps", link: "/chartsandmaps" },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const handleButtonClick: Function = (link: string) => {
    navigate(link);
  };
  return (
    <div
      className={
        !toggle
          ? "w-full sm:w-72 h-screen bg-dark-purple text-white flex-col gap-10 pt flex"
          : "hidden"
      }
    >
      <h1 className="text-4xl">Menu</h1>
      <div>
        {sidebarData.map((value) => (
          <div
            key={value.text}
            className="flex bg-light-purple justify-center align-middle h-12 p-1 cursor-pointer hover:bg-light-white text-black"
            onClick={() => handleButtonClick(value.link)}
          >
            <h1 className="text-xl">{value.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
